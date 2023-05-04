import { Moon } from "@phosphor-icons/react";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <h1 className="header__logo">Where in the World?</h1>

          <button className="header__thema">
            <Moon />
            <span>Dark Mode</span>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
