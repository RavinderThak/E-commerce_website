import "./Cart.scss";
import { MdClose } from "react-icons/md"
import { BsCartX } from "react-icons/bs"
import CartItem from "./CartItem/CartItem";
const Cart = ({setShowCart}) => {
    return (
        <>

            <div className="cart-panel">
                <div className="opac-layer">qwjiwjioqwjioq</div>
                <div className="cart-content">
                    <div className="cart-header">
                        <span className="heading">Shoping Cart</span>
                        <span
                         className="close-btn"
                         onClick={() =>setShowCart(false)}
                         >
                            <MdClose />
                            <span className="text">Close</span>

                        </span>
                    </div>
                     <div className="empty-cart">
                        < BsCartX  />

                        <div>No Products in the Cart.</div>
                        <button className="return-ts">Return To Shop</button>
                    </div> 

                    <>
                    <CartItem  />
                    <div className="cart-footer">
                        <div className="subtotal">
                            <span className="text">Subtotal:</span>
                            <span className="text">&#8377;1234</span>
                        </div>
                        <div className="button">
                            <button className="checkout-td">Checkout</button>
                        </div>
                    </div>
                    </>


                </div>
            </div>

        </>

    );
};
export default Cart;
