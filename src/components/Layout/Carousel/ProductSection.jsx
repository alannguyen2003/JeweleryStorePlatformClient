import ProductSelling from "../../Product/ProductSelling";

export const ProductSection = () => {
    const products = [1, 2, 3, 4, 5, 6, 7,8]
    return ( 
        <section className="product__section section--padding ">
            <div className="container">
                <div class="section__heading text-center mb-40">
                    <h2 class="section__heading--maintitle">TRENDING PRODUCT</h2>
                </div>
                <div className="product__section-inner">
                    <div className="row mb--n30">
                        {products.map((product) => <ProductSelling percentage={12}/>)}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductSection;