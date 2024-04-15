import { useState } from "react";
import titleImage from "../assets/title.png";
import { AuthenticatedUser, LoginForm, RegisterUserForm } from "../user";
import PokerModal from "./PokerModal";

interface Props {
  onLogin: (authenticatedUser: AuthenticatedUser) => void;
  user: AuthenticatedUser | null;
}

function TitlePage(props: Props) {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegisterUser, setShowRegisterUser] = useState(false);

  return (
    <>
      <div className="bg-base-100 flex flex-col items-center justify-between p-5 space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
          Chico Degens Poker Club
        </h1>
        <div className="h-auto">
          <img
            className="max-w-md rounded-lg shadow-2xl"
            src={titleImage}
            alt="Chico Degens Poker Club"
          />
        </div>

        {!props.user && (
          <>
            <div className="flex items-center justify-center mb-4 gap-2">
              <button
                className="btn btn-secondary"
                onClick={() => setShowRegisterUser(true)}
              >
                Register
              </button>
              <button
                className="btn btn-primary"
                onClick={() => setShowLogin(true)}
              >
                Login
              </button>
            </div>
          </>
        )}
      </div>
      {showLogin && (
        <PokerModal>
          <LoginForm
            onLogin={props.onLogin}
            onClose={() => setShowLogin(false)}
          />
        </PokerModal>
      )}
      {showRegisterUser && (
        <PokerModal>
          <RegisterUserForm
            onRegister={props.onLogin}
            onClose={() => setShowRegisterUser(false)}
          />
        </PokerModal>
      )}
    </>
  );
}

export default TitlePage;
