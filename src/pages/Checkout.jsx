import Preloader from "../components/Layout/Preloader"
import Header from "../components/Layout/Header/Header"
import BreadcrumpSection from "../components/Layout/PageTitle/BreadcrumpSection";
import Footer from "../components/Layout/Footer/Footer"
import ProductCheckout from "../components/Product/ProductCheckout";
import FeatureSection from "../components/Layout/Carousel/FeatureSection";

export const Checkout = () => {

    return ( 
        <body>
            <Preloader/>
            <Header/>
            <div className="main__content_wrapper">
                {/* <CanvasHeaderMenu/> */}
                <BreadcrumpSection name="Checkout"/>
                <ProductCheckout/>
                <FeatureSection/>
                <Footer/>
            </div>
        </body>
    );
}
export default Checkout;