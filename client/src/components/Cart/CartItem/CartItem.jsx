import "./CartItem.scss";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-3.webp";

const CartItem = () => {
    return (
        <>
            <div className="cart-products">\
                <div className="cart-product">
                    <div className="img-container">
                        <img src={prod} alt="" />
                    </div>

                    <div className="product-details">
                        <span className="name">Product Name</span>
                        <MdClose className="close-btn" />
                        <div className="quantity-button">
                            <span>-</span>
                            <span>+</span>
                            <span>5</span>
                        </div>

                        <div className="text">
                            <span>4</span>
                            <span>x</span>
                            <span className="highlight">&#8377;4567</span>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default CartItem;
