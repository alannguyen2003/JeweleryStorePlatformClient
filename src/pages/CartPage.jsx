import {Swiper, SwiperSlide} from "swiper/react";
import Header from "../components/Layout/Header/Header"
import Footer from "../components/Layout/Footer/Footer"
import Preloader from "../components/Layout/Preloader"
import CartSection from "../components/Cart/CartSection"
import BreadcrumpSectionCart from "../components/Layout/PageTitle/BreadcrumpSectionCart"
import ProductFeatured from "../components/Product/ProductFeatured"

export const CartPage = () => { 

    return (
        <body>
            <Preloader/>
            <Header/>
            <div className="main__content_wrapper">
                <BreadcrumpSectionCart name="Shopping Cart"/>
                <CartSection/>
                <ProductFeatured/>
                {/* <Collection/> */}
                {/* <Advertisement/> */}
                {/* <ProductSection/> */}
                {/* <Banner/> */}
                {/* <RecommendProduct/> */}
                <Footer/>
            </div>
        </body>
    )
}

export default CartPage;