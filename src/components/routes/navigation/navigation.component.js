import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { SignOutUser } from "../../../utils/firebase/firebase.utils";

// Components
import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropown from "../../cart-dropdown/cart-dropdown.component";

// Context
import { UserContext } from "../../../context/user.context";
import { CartContext } from "../../../context/cart.context";

// Assets & Styles
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import "./navigation.styles.scss";


const Navigation = () => {
  const {currentUser, setCurrentUser} = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  
  const signOutHandler = async ()=>{
    const res = await SignOutUser();
    setCurrentUser(null)
  }
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {
            currentUser ? (
              <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
            ) : (
              <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
            )
          }
          <CartIcon />
        </div>
        {/** if isCartOpen is true, will render any component because it always is true */}
        { isCartOpen && <CartDropown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
