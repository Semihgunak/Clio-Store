import Header from "./components/Layout/Header"
import Hero from "./components/Hero/Hero"
import Products from "./components/Products/Products"
import Cart from "./components/Cart/Cart"
import { useState } from "react"
import CartProvider from "./context/CartProvider"
import Footer from "./components/Layout/Footer"


function App() {
  const[cartIsShow,setcartIsShow] = useState(false)

  const showCartHandle = () =>{
    setcartIsShow(true)
  }

  const hideCartHandle = (e) =>{
    e.preventDefault()
    setcartIsShow(false)
  }


  return (
    <CartProvider>
      {cartIsShow && <Cart onClose={hideCartHandle} />}
      <Header showCartHandle={showCartHandle} />
      <Hero />
      <Products />
      <Footer />
    </CartProvider>
  )
}

export default App
