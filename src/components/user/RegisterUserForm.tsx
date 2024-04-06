import { FormEvent, useRef, useState } from "react";
import { User, AuthenticatedUser } from "./User";

interface RegisterUserRequest {
  user: User;
  passcode: string;
}

interface Props {
  onRegister: (authenticatedUser: AuthenticatedUser) => void;
}
const RegisterUserForm = (props: Props) => {
  // Could also use useRef to get the input values. This is more performant than using state but kind of ugly.
  // const loginIdRef = useRef<HTMLInputElement>(null);
  // const passwordRef = useRef<HTMLInputElement>(null);
  // const confirmPasswordRef = useRef<HTMLInputElement>(null);
  // const emailRef = useRef<HTMLInputElement>(null);
  // const nameRef = useRef<HTMLInputElement>(null);
  // const phoneRef = useRef<HTMLInputElement>(null);
  // const passcodeRef = useRef<HTMLInputElement>(null);
  //
  // and then in input elements, use ref={loginIdRef} etc.
  // finally in handleSubmit, use loginIdRef.current?.value to get the form values.

  const [user, setUser] = useState({
    loginId: "",
    password: "",
    confirmPassword: "",
    email: "",
    name: "",
    phone: "",
  });
  const [passcode, setPasscode] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Call your registration API here and get the token
    // Then call onRegister with the token
    // onRegister(token);
    const authenticatedUser: AuthenticatedUser = {
      user: {
        ...user,
      },
      jwt: "token",
    };
    props.onRegister(authenticatedUser);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <form
        onSubmit={handleSubmit}
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
            value={user.loginId}
            type="text"
            placeholder="Username"
            onChange={(e) => setUser({ ...user, loginId: e.target.value })}
          />
          <label
            className="block text-gray-700 text-sm font-bold mb-2 text-right"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow col-span-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            value={user.password}
            type="password"
            placeholder="Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <label
            className="block text-gray-700 text-sm font-bold mb-2 whitespace-nowrap text-right"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            className="shadow col-span-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            value={user.confirmPassword}
            type="password"
            placeholder="Confirm Password"
            onChange={(e) =>
              setUser({ ...user, confirmPassword: e.target.value })
            }
          />
          <label
            className="block text-gray-700 text-sm font-bold mb-2 text-right"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow col-span-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            value={user.name}
            type="text"
            placeholder="John Doe"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <label
            className="block text-gray-700 text-sm font-bold mb-2 text-right"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow col-span-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            value={user.email}
            type="email"
            placeholder="Email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <label
            className="block text-gray-700 text-sm font-bold mb-2 text-right"
            htmlFor="phone"
          >
            Phone
          </label>
          <input
            className="shadow col-span-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            value={user.phone}
            type="phone"
            placeholder="(xxx) xxx-xxxx"
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
          />
          <label
            className="block text-gray-700 text-sm font-bold mb-2 text-right"
            htmlFor="passcode"
          >
            Passcode
          </label>
          <input
            className="shadow col-span-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="passcode"
            value={passcode}
            type="password"
            placeholder="Passcode"
            onChange={(e) => setPasscode(e.target.value)}
          />
        </div>
        <hr className="mb-4 border-t-2 border-gray-200" />
        <div className="flex items-center justify-center">
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
