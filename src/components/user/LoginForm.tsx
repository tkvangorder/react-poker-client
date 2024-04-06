import { FormEvent, useRef } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { User, AuthenticatedUser } from "./User";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
  onLogin: (authenticatedUser: AuthenticatedUser) => void;
}

// We use Zod to define a schema for the form data and then infer the FormData type from the schema
const schema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});
type FormData = z.infer<typeof schema>;

const LoginForm = (props: Props) => {
  // Using react-hook-form to manage form state, destructuring the register function and handleSubmit function
  // and then nested errors from the formState object
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onSubmit" });

  const onSubmit = (data: FieldValues) => {
    const user: AuthenticatedUser = {
      user: {
        ...(data as User),
      },
      jwt: "nothing yes",
    };
    props.onLogin(user);
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
            {...register("username")}
          />
          {errors.username && (
            <p className="col-start-2 col-span-2 text-red-600">
              {errors.username.message}
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
        </div>
        <hr className="mb-4 border-t-2 border-gray-200" />
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
