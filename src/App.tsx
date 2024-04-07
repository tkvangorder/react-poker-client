import NavigationBar from "./components/NavigationBar";
import TitlePage from "./components/TitlePage";
import { LoginForm } from "./user";
import RegisterUserForm from "./user/components/RegisterUserForm";
import { AuthenticatedUser } from "./user/User";

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
