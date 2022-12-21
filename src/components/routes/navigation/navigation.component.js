import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../../context/user.context";
import { SignOutUser } from "../../../utils/firebase/firebase.utils";

import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropown from "../../cart-dropdown/cart-dropdown.component";

import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import "./navigation.styles.scss";


const Navigation = () => {
  const {currentUser, setCurrentUser} = useContext(UserContext);
  
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
        <CartDropown />
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
