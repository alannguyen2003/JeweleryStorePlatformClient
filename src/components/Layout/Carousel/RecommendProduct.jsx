import FooterProduct from "../../Product/FooterProduct";

export const RecommendProduct = () => {
    return ( 
        <section class="small__product--section section--padding pt-0">
            <div class="container">
                <div class="row mb--n30">
                    <div class="col-lg-4 col-md-6 mb-30">
                        <div class="small__product--step">
                                <div class="section__heading mb-30">
                                    <h2 class="section__heading--maintitle">Featured Products</h2>
                                </div>
                                <div class="small__product--step__inner">
                                    <FooterProduct/>
                                    <FooterProduct/>
                                    <FooterProduct/>
                                </div>        
                            </div>
                        </div>
                    <div class="col-lg-4 col-md-6 mb-30">
                        <div class="small__product--step">
                                <div class="section__heading mb-30">
                                    <h2 class="section__heading--maintitle">Featured Products</h2>
                                </div>
                                <div class="small__product--step__inner">
                                    <FooterProduct/>
                                    <FooterProduct/>
                                    <FooterProduct/>
                                </div>        
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-30">
                        <div class="small__product--step">
                            <div class="section__heading mb-30">
                                <h2 class="section__heading--maintitle">Featured Products</h2>
                            </div>
                            <div class="small__product--step__inner">
                                <FooterProduct/>
                                <FooterProduct/>
                                <FooterProduct/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RecommendProduct;