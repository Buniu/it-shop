import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { ReactComponent as CrwnLogo }  from "../../assets/crown.svg";


import {NavigationContainer, LogoContainer, NavLinks, NavLink } from  "./navigation.styles"
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { selectCurrentUser } from "../../store/user/user.selector";

import { selectCartDropdown } from "../../store/cart/cart.selector";

const Navigation = () =>{
    const currentUser = useSelector(selectCurrentUser)
    const activeCartDropdown = useSelector(selectCartDropdown)
    // console.log(currentUser)

    return (
      <Fragment>
        <NavigationContainer>
            <LogoContainer to="/">
                <CrwnLogo/>
            </LogoContainer>
            <NavLinks>
                <NavLink to='/shop'>
                    SHOP
                </NavLink>     
                {
                    currentUser ? (
                        <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                    ) : 
                        (<NavLink to='/auth'>
                    SIGN IN
                </NavLink>)
                }
                <CartIcon/>

            </NavLinks>
            {activeCartDropdown ? (<CartDropdown/>) : null}
            {// {activeCartDropdown && <CartDropdown/>}
            }
            
        </NavigationContainer>
      <Outlet />
      </Fragment>
        
    )
  }

  export default Navigation;