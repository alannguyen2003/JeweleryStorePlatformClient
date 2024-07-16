import BreadcrumpSection from "../components/Layout/PageTitle/BreadcrumpSection";
import Header from "../components/Layout/Header/Header";
import Collection from "../components/Layout/Carousel/Collection";
import ProductSidebar from "../components/Layout/Sidebar/ProductSidebar";
import ProductContent from "../components/Product/ProductContent";
import Preloader from "../components/Layout/Preloader";
export const Shop = () => {

    return ( 
        <body>
            <Preloader/>
            <Header/>
            <main class="main__content_wrapper">
                <BreadcrumpSection name="Products"/>
                <Collection/>
                <div class="shop__section section--padding pt-0">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-3 col-lg-4 shop-col-width-lg-4">
                                <ProductSidebar/>
                            </div>  
                            <ProductContent/>
                        </div>
                    </div>
                </div>
            </main>
        </body>
    );
}

export default Shop;