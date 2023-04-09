import { Moon } from "@phosphor-icons/react"
import "./Header.scss"

const Header = () => {
  return (
    <>
      <header className="header">
        <h1 className="header__logo">Where in the World?</h1>

        <button className="darkMode">
          <Moon/>
          <span>Dark Mode</span>
        </button>
      </header>
    </>
  )
}

export default Header
