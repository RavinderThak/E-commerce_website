import "./Search.scss";
import { IoMdCloseCircle } from "react-icons/io";
import prod from "../../../assets/products/earbuds-prod-3.webp";


const Search = ({ setShowSearch }) => {

    return (
        <>
            <div className="search-model">
                <div className="form-field">
                    <input
                        type="text" placeholder="Search Products" />
                    <IoMdCloseCircle onClick={() => setShowSearch(false)} />
                </div>
                <div className="search-result-content">
                    <div className="search-results">
                        <div className="search-result-item">
                            <div className="img-container">
                                <img src={prod} alt="" />
                            </div>

                            <div className="product-details">
                                <span className="name">Product Name</span>
                                <span className="desc">Product Desc.</span>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Search;
