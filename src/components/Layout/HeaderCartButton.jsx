import "./HeaderCartButton.css";
import CartIcon from "../Cart/CartIcon";
import { CartContext } from "../../context/CartProvider";
import { useContext } from "react";

const HeaderCartButton = ({ showCartHandle }) => {
  const cartCtx = useContext(CartContext);

  const totalItemsInCart = cartCtx.items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);
  return (
    <button className="button" onClick={showCartHandle}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className="badge">{totalItemsInCart}</span>
    </button>
  );
};

export default HeaderCartButton;
