import "./Header.scss";
import { Context, useEffect, useState } from "react";
import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";




const Header = () => {
    const [scrolled,setscrolled] =useState(false);
    const [showCart ,setShowCart] =useState(false);
    const [showSearch,setShowSearch] =useState(false);
    

    const handlescroll =() =>{
        const offset= window.scrolly;
        // console.log(offset)
        if(offset >200) {
            setscrolled("true");
        }
        else{
            setscrolled("false");
        }

    };
    useEffect(()=>{
        window.addEventListener("scroll",handlescroll)

    },[])

    return (
        <>
            <header className={`main-header ${scrolled ?'stickey-header' :""}`}>
                <div className="header-content">
                    <ul className="left">
                        <li>Home</li>
                        <li>About</li>
                        <li>Category</li>
                    </ul>
                    <div className="center">ADD STORE</div>
                    <div className="right">
                        <TbSearch onClick={() => setShowSearch(true)}
                       /> 
                        {/* {console.log("Ravinder")}  */}
                       
                        <AiOutlineHeart />


                        <span className="cart-icon" onClick={()=> setShowCart(true)}>
                           
                        <CgShoppingCart />                     
                            <span>5</span>
                        </span>
                    </div>
                </div>

            </header>
            {showCart && <Cart setShowCart={setShowCart} />}
           {showSearch && <Search setShowSearch={setShowSearch} />}
           
        </>
    )
};

export default Header;
