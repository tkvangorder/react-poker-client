import pokerIcon from "../assets/icon.png";

function NavigationBar() {
  return (
    <header className="w-full bg-blue-500 p-4 flex justify-between items-center">
      <div>
        <img src={pokerIcon} width={40} height={40} />
      </div>
      <nav>
        <ul className="flex space-x-4">
          {/* Add more links as needed */}
          <li>
            <a href="/profile" className="text-white">
              Profile
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavigationBar;
