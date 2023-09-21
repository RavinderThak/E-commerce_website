import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
import BannerImg1 from "../../../assets/banner-img1.jpg";

const Banner = () => {

    return (
        <>
            <div className="hero-banner">
                <div className="content">
                    <div className="text-content">
                        <h1>Modern Interior Designs</h1>
                        <p>
                            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.

                        </p>
                        <div className="cta">
                            <div className="banner-cta">Read More</div>
                            <div className="banner-cta v2">Shop Now</div>
                        </div>
                    </div>
                    <img className="banner-img1" src={BannerImg1} alt="" />
                    <img className="banner-img" src={BannerImg} alt="" />
                    

                </div>
            </div>

        </>
    );
};


export default Banner;
