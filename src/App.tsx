import NavigationBar from "./components/NavigationBar";
import TitlePage from "./components/TitlePage";
import LoginForm from "./components/user/LoginForm";
import RegisterUserForm from "./components/user/RegisterUserForm";
import { AuthenticatedUser } from "./components/user/User";

function App() {
  const onLogin = (authenticatedUser: AuthenticatedUser) => {
    console.log(authenticatedUser);
  };

  return (
    <LoginForm onLogin={onLogin} />
    // <div className="flex flex-col h-screen">
    //   <NavigationBar />
    //   <div className="flex-grow">
    //     <TitlePage />
    //   </div>
    // </div>
  );
}

export default App;
