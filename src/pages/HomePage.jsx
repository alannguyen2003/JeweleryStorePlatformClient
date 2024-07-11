import CanvasHeaderMenu from "../components/Layout/Carousel/CanvasHeaderMenu"
import Collection from "../components/Layout/Carousel/Collection"
import Header from "../components/Layout/Header/Header"
import Advertisement from "../components/Layout/Carousel/Advertisement"
import ProductSection from "../components/Layout/Carousel/ProductSection"

export const HomePage = () => { 
const preLoader = function () {
    let preloaderWrapper = document.getElementById("preloader");
    preloaderWrapper.classList.add("loaded");
};
setTimeout(() => {
    preLoader();
}, 300);
    return (
        <div>
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
        <div className="main__content_wrapper">
            <CanvasHeaderMenu/>
            <Collection/>
            <Advertisement/>
            <ProductSection/>
        </div>
    </div>
    )
}