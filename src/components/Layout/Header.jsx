import "./Header.css"
import HeaderCartButton from "./HeaderCartButton"
import Navbar from "./Navbar"

const Header = ({showCartHandle}) => {
  return (
    <header className="header">
      <img src="/images/Clio-Logo.jpg" alt="" width={120} height={60} />
      <Navbar />
      <HeaderCartButton showCartHandle={showCartHandle} />
    </header>
  )
}

export default Header