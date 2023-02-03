import { Fragment, useContext } from "react";
import { Outlet,Link } from "react-router-dom";

import { ReactComponent as CrwnLogo }  from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { CartDropdownHandler } from "../../contexts/cart-dropdown-handler.context";

import "./navigation.styles.scss"
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";


const Navigation = () =>{
    const {currentUser} = useContext(UserContext)
    const {activeCartDropdown} = useContext(CartDropdownHandler)
    // console.log(currentUser)

    return (
      <Fragment>
        <div className="navigation">
            <Link className="logo-cointainer" to="/">
                <CrwnLogo/>
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to='/shop'>
                    SHOP
                </Link>     
                {
                    currentUser ? (
                        <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
                    ) : 
                        (<Link className="nav-link" to='/auth'>
                    SIGN IN
                </Link>)
                }
                <CartIcon/>

            </div>
            {activeCartDropdown ? (<CartDropdown/>) : null}
            {// {activeCartDropdown && <CartDropdown/>}
            }
            
        </div>
      <Outlet />
      </Fragment>
        
    )
  }

  export default Navigation;