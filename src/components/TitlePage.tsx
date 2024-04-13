import { useState } from "react";
import titleImage from "../assets/title.png";
import { AuthenticatedUser, LoginForm, RegisterUserForm } from "../user";
import PokerModal from "./PokerModal";
import NavigationBar from "./NavigationBar";

interface Props {
  onLogin: (authenticatedUser: AuthenticatedUser) => void;
  user: AuthenticatedUser | null;
}

function TitlePage(props: Props) {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegisterUser, setShowRegisterUser] = useState(false);

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4 bg-gray-950">
        <h1 className="text-4xl font-bold tracking-tight text-orange-500 sm:text-6xl">
          Chico Degens Poker Club
        </h1>
        <div className="relative flex h-auto">
          <img
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src={titleImage}
            alt="Chico Degens Poker Club"
            width={800}
            height={1600}
          />
        </div>

        {!props.user && (
          <>
            <div className="flex items-center justify-center mb-4 gap-2">
              <button
                className="px-4 py-2 text-lg font-semibold text-white bg-blue-500 border border-blue-500 rounded hover:bg-blue-600"
                onClick={() => setShowLogin(true)}
              >
                Login
              </button>
              <button
                className="px-4 py-2 text-lg font-semibold text-white bg-blue-500 border border-blue-500 rounded hover:bg-blue-600"
                onClick={() => setShowRegisterUser(true)}
              >
                Register
              </button>
            </div>
          </>
        )}
      </div>
      {showLogin && (
        <PokerModal>
          <LoginForm
            onLogin={props.onLogin}
            onCancel={() => setShowLogin(false)}
          />
        </PokerModal>
      )}
      {showRegisterUser && (
        <PokerModal>
          <RegisterUserForm
            onRegister={props.onLogin}
            onCancel={() => setShowRegisterUser(false)}
          />
        </PokerModal>
      )}
    </>
  );
}

export default TitlePage;
