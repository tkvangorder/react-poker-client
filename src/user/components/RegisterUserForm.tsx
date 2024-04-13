import { FieldValues, useForm } from "react-hook-form";
import userService, { AuthenticatedUser, User } from "../UserService";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
  onRegister: (authenticatedUser: AuthenticatedUser) => void;
  onCancel: () => void;
}

// We use Zod to define a schema for the form data and then infer the FormData type from the schema
const schema = z.object({
  loginId: z.string().min(1, { message: "Username is required" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  confirmPassword: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().min(1, { message: "Email is required" }),
  phone: z.string().min(1, { message: "Phone is required" }),
  serverPasscode: z.string().min(1, { message: "Passcode is required" }),
});
type FormData = z.infer<typeof schema>;

const RegisterUserForm = (props: Props) => {
  // Using react-hook-form to manage form state, destructuring the register function and handleSubmit function
  // and then nested errors from the formState object
  const {
    register,
    setError,
    clearErrors,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onSubmit" });

  const onSubmit = (data: FieldValues) => {
    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "The Password and Confirm Password do not match",
      });
      return;
    } else {
      clearErrors("confirmPassword");
    }

    userService
      .registerUser({
        user: { ...(data as User) },
        serverPasscode: data.serverPasscode,
      })
      .then((response) => {
        props.onRegister(response.data);
        clearErrors("serverPasscode");
      })
      .catch((error) => {
        setError("serverPasscode", {
          type: "manual",
          message: error.response.data.message,
        });
        return;
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <h1 className="mb-4 text-lg font-semibold text-gray-700 text-center">
          Register User
        </h1>
        <hr className="mb-4 border-t-2 border-gray-200" />
        <div className="mb-4 grid grid-cols-3 gap-2 items-center">
          <label
            className="block text-gray-700 text-sm font-bold mb-2 text-right"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow col-span-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            {...register("loginId")}
          />
          {errors.loginId && (
            <p className="col-start-2 col-span-2 text-red-600">
              {errors.loginId.message}
            </p>
          )}
          <label
            className="block text-gray-700 text-sm font-bold mb-2 text-right"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow col-span-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && (
            <p className="col-start-2 col-span-2 text-red-600">
              {errors.password.message}
            </p>
          )}
          <label
            className="block text-gray-700 text-sm font-bold mb-2 whitespace-nowrap text-right"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            className="shadow col-span-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="col-start-2 col-span-2 text-red-600">
              {errors.confirmPassword.message}
            </p>
          )}
          <label
            className="block text-gray-700 text-sm font-bold mb-2 text-right"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow col-span-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="John Doe"
            {...register("name")}
          />
          {errors.name && (
            <p className="col-start-2 col-span-2 text-red-600">
              {errors.name.message}
            </p>
          )}
          <label
            className="block text-gray-700 text-sm font-bold mb-2 text-right"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow col-span-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && (
            <p className="col-start-2 col-span-2 text-red-600">
              {errors.email.message}
            </p>
          )}
          <label
            className="block text-gray-700 text-sm font-bold mb-2 text-right"
            htmlFor="phone"
          >
            Phone
          </label>
          <input
            className="shadow col-span-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="phone"
            placeholder="(xxx) xxx-xxxx"
            {...register("phone")}
          />
          {errors.phone && (
            <p className="col-start-2 col-span-2 text-red-600">
              {errors.phone.message}
            </p>
          )}
          <label
            className="block text-gray-700 text-sm font-bold mb-2 text-right"
            htmlFor="passcode"
          >
            Passcode
          </label>
          <input
            className="shadow col-span-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="passcode"
            type="password"
            placeholder="Passcode"
            {...register("serverPasscode")}
          />
          {errors.serverPasscode && (
            <p className="col-start-2 col-span-2 text-red-600">
              {errors.serverPasscode.message}
            </p>
          )}
        </div>
        <hr className="mb-4 border-t-2 border-gray-200" />
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={props.onCancel}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};
export default RegisterUserForm;
