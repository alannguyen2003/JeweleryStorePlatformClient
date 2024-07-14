import BreadcrumpSection from "../components/Layout/PageTitle/BreadcrumpSection";
import Header from "../components/Layout/Header/Header";
import Collection from "../components/Layout/Carousel/Collection";
import ProductSidebar from "../components/Layout/Sidebar/ProductSidebar";
import ProductContent from "../components/Product/ProductContent";
export const Shop = () => {

    const preLoader = function () {
        let preloaderWrapper = document.getElementById("preloader");
        preloaderWrapper.classList.add("loaded");
    };
    setTimeout(() => {
        preLoader();
    }, 300);

    return ( 
        <body>
            <div id="preloader">
                <div id="ctn-preloader" class="ctn-preloader">
                    <div class="animation-preloader">
                        <div class="spinner"></div>
                        <div class="txt-loading">
                            <span data-text-preloader="L" class="letters-loading">
                                L
                            </span>
                        
                            <span data-text-preloader="O" class="letters-loading">
                                O
                            </span>
                        
                            <span data-text-preloader="A" class="letters-loading">
                                A
                            </span>
                        
                            <span data-text-preloader="D" class="letters-loading">
                                D
                            </span>
                        
                            <span data-text-preloader="I" class="letters-loading">
                                I
                            </span>
                        
                            <span data-text-preloader="N" class="letters-loading">
                                N
                            </span>
                        
                            <span data-text-preloader="G" class="letters-loading">
                                G
                            </span>
                        </div>
                    </div>	
                    <div class="loader-section section-left"></div>
                    <div class="loader-section section-right"></div>
                </div>
            </div>
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