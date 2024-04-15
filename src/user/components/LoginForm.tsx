import { FieldValues, useForm } from "react-hook-form";
import userSerivce, { AuthenticatedUser, User } from "../UserService";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
  onLogin: (authenticatedUser: AuthenticatedUser) => void;
  onClose: () => void;
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
    setError,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onSubmit" });

  const onSubmit = (data: FieldValues) => {
    userSerivce
      .login(data.username, data.password)
      .then((response) => {
        props.onLogin(response.data);
        clearErrors("password");
        props.onClose();
      })
      .catch((error) => {
        setError("password", {
          type: "manual",
          message: "Invalid Credentials",
        });
        return;
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-transparent shadow-md rounded px-8 pt-6 pb-8"
    >
      <h1 className="mb-4 text-3xl font-bold text-center">Login</h1>
      <hr className="mb-4 border-t-2 border-primary" />
      <div className="mb-4 grid grid-cols-3 gap-2 items-center">
        <label className="label block text-right" htmlFor="username">
          Username
        </label>
        <input
          className="input input-primary col-span-2 w-full max-w-xs"
          id="username"
          type="text"
          placeholder="Username"
          {...register("username")}
        />
        <label className="label block text-right" htmlFor="password">
          Password
        </label>
        <input
          className="input input-primary col-span-2 w-full max-w-xs"
          id="password"
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        {errors.password && (
          <p className="col-start-2 col-span-2 bg-error pl-4 text-error-content rounded-md">
            {errors.password.message}
          </p>
        )}
      </div>
      <hr className="mb-4 border-t-2 border-primary" />
      <div className="flex items-center justify-center gap-2">
        <button className="btn btn-secondary" onClick={props.onClose}>
          Cancel
        </button>
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
