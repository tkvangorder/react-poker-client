import pokerIcon from "../assets/icon.png";
import profilePic from "../assets/nod2.gif";

function NavigationBar() {
  return (
    <div className="navbar bg-base-100 border-b-2 border-secondary">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
          <img src={pokerIcon} width={40} height={40} />
        </a>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={profilePic} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
