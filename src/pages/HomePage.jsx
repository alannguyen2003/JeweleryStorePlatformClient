import CanvasHeaderMenu from "../components/Layout/Carousel/CanvasHeaderMenu"
import Collection from "../components/Layout/Carousel/Collection"
import Header from "../components/Layout/Header/Header"
import Advertisement from "../components/Layout/Carousel/Advertisement"
import ProductSection from "../components/Layout/Carousel/ProductSection"
import Banner from "../components/Layout/Carousel/Banner"
import RecommendProduct from "../components/Layout/Carousel/RecommendProduct"
import Footer from "../components/Layout/Footer/Footer"
import Preloader from "../components/Layout/Preloader"

export const HomePage = () => { 

    return (
        <body>
            <Preloader/>
            <Header/>
            <div className="main__content_wrapper">
                <CanvasHeaderMenu/>
                <Collection/>
                <Advertisement/>
                <ProductSection/>
                <Banner/>
                <RecommendProduct/>
                <Footer/>
            </div>
        </body>
    )
}