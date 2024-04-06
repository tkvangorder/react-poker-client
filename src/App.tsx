import NavigationBar from "./components/NavigationBar";
import TitlePage from "./components/TitlePage";
import RegisterUserForm from "./components/user/RegisterUserForm";
import { AuthenticatedUser } from "./components/user/User";

function App() {
  const onRegister = (authenticatedUser: AuthenticatedUser) => {
    console.log(authenticatedUser.user.name + " has been registered");
  };

  return (
    <RegisterUserForm onRegister={onRegister} />
    // <div className="flex flex-col h-screen">
    //   <NavigationBar />
    //   <div className="flex-grow">
    //     <TitlePage />
    //   </div>
    // </div>
  );
}

export default App;
