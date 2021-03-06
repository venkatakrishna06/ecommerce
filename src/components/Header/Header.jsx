import React from "react";
import './Header.scss';
import {Link} from "react-router-dom";
import {auth, createUSerProfileDocument} from "../../firebase/firebase-utils";

const Header=({currentUser}) =>(
    <div className='header'>
<Link classNmae='logo-container' to='/'>Ecom</Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            {
                currentUser?
                    <div className='option' onClick={()=>auth.signOut()}>
SIGN OUT
                    </div>:
                    <Link className='option' to="/signin">
                    SIGN IN
                    </Link> }
        </div>

    </div>
) ;
export default Header;