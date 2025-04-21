import { FaRegSun } from "react-icons/fa6";
import { FaRegMoon } from "react-icons/fa";

const Header = ({ theme, handleToggleTheme }) => {
  return (
    <div className="header">
      <h1>Keep Notes</h1>
      <button
        className="btn-toggle"
        onClick={() => {
          const themeToSet = theme === "dark" ? "light" : "dark";
          handleToggleTheme(themeToSet);
          localStorage.setItem("theme", themeToSet);
        }}
        style={{ cursor: "pointer" }}
      >
        {theme === "dark" ? (
          <FaRegSun size="1.3em" />
        ) : (
          <FaRegMoon size="1.3em" />
        )}
      </button>
    </div>
  );
};

export default Header;
