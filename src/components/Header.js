const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>Keep Notes</h1>
      <button
        className="btn-toggle"
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
