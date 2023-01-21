import "./Header.css";
import Button from "../../Components/Button/Button";
import { useContext } from "react";
import ToggleContext from "../../Context/ToggleContext";

const Header = () => {
  const { isToggleled, setIsToggeled } = useContext(ToggleContext);

  const onThemeToggle = () => {
    setIsToggeled((current) => !current);
  };

  return (
    <header className={`header ${isToggleled ? "lightTheme-header" : ""}`}>
      <span className="header__icon">📝</span>
      <h1 className="header__h1">ToDO LisT</h1>
      <Button
        className={"header__theme-button"}
        text={`${isToggleled ? "☀️" : "🌙"}`}
        onButtonClick={onThemeToggle}
      />
    </header>
  );
};

export default Header;
