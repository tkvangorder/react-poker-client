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
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const confirmPassword = useRef<HTMLInputElement>(null);
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const phone = useRef<HTMLInputElement>(null);
  const passcode = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Call your registration API here and get the token
    // Then call onRegister with the token
    // onRegister(token);
    const authenticatedUser: AuthenticatedUser = {
      user: {
        loginId: "snowtoad",
        password: "yo yo yo",
        email: "frozen@peas.com",
        name: "Snow Toad",
        phone: "123-456-7890",
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
            type="text"
            placeholder="Username"
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
            type="password"
            placeholder="Password"
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
            type="password"
            placeholder="Confirm Password"
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
            type="text"
            placeholder="John Doe"
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
            type="email"
            placeholder="Email"
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
            type="phone"
            placeholder="(xxx) xxx-xxxx"
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
            type="password"
            placeholder="Passcode"
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
