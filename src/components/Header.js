import { FaRegSun } from "react-icons/fa6";
import { FaRegMoon } from "react-icons/fa";

const Header = ({ darkMode, handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>Keep Notes</h1>
      <button
        className="btn-toggle"
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
      >
        {darkMode ? <FaRegSun size="1.3em" /> : <FaRegMoon size="1.3em" />}
      </button>
    </div>
  );
};

export default Header;
