import { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import TitlePage from "./components/TitlePage";
import { LoginForm, AuthenticatedUser } from "./user";
import RegisterUserForm from "./user/components/RegisterUserForm";
import PokerModal from "./components/PokerModal";

function App() {
  const onLogin = (authenticatedUser: AuthenticatedUser) => {
    console.log(authenticatedUser);
    setUser(authenticatedUser);
  };

  const [user, setUser] = useState<AuthenticatedUser | null>(null);

  return (
    <>
      <div className="flex flex-col h-screen">
        <NavigationBar />
        <div className="flex-grow">
          <TitlePage onLogin={onLogin} user={user} />
        </div>
        <ul>
          <li>{user?.token}</li>
          <li>{user?.user.loginId}</li>
          <li>{user?.user.name}</li>
          <li>{user?.user.email}</li>
          <li>{user?.user.phone}</li>
        </ul>
      </div>
    </>
  );
}

export default App;
