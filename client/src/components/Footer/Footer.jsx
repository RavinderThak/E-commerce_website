import "./Footer.scss";
import { BsTelephoneOutboundFill } from 'react-icons/bs';
import { FaLocationArrow } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import PaymentImg from "../../assets/payments.png";
const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-content">
                    <div className="col">
                        <div className="title">About</div>
                        <div className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas modi asperiores maxime deleniti temporibus ea tempore eveniet praesentium nam cupiditate.</div>
                    </div>

                    
                    <div className="col">  {/* column1 data */}
                        <div className="title">Contact</div>
                        <div className="c-item">
                            <div className="text">
                                <FaLocationArrow size={14} />
                                KL Walawalkar Marg, Industrial Area, Andheri West,
                                400001
                            </div></div>
                        <div className="c-item">
                            <div className="text">

                                <BsTelephoneOutboundFill size={14} />
                                Phone  :  022 4062 9726</div>
                        </div><div className="c-item">
                            <div className="text">
                                <MdEmail size={14} />
                                Email : rav123@gmail.com </div>
                        </div>
                    </div>


                    <div className="col">   {/* column2 data */}
                        <div className="title">Categories</div>
                        <div className="text">Headphones</div>
                        <div className="text">Smart Watches</div>
                        <div className="text">Blutooth Speakers</div>
                        <div className="text">Wireless Earbuds</div>
                        <div className="text">Home Theature</div>
                        <div className="text">Projectors</div>
                    </div>


                    <div className="col">        {/* column3 data */}
                        <div className="title">Pages</div>
                        <div className="text">Home</div>
                        <div className="text">About</div>
                        <div className="text">Privacy Policy</div>
                        <div className="text">Returns</div>
                        <div className="text">Terms & Conditions</div>
                        <div className="text">Contact Us</div>

                    </div>
                </div>
                <div className="bottom-bar">
                    <div className="b0ttom-bar-content">
                        <div className="text">
                            CREATESTORE 2023 CREATED BY RAVINDER. PREMIUM E-COMMERCE SOLUTION.
                            <img src={PaymentImg} alt="" />
                        </div>

                    </div>
                </div>
            </footer>

        </>
    )

};

export default Footer;
