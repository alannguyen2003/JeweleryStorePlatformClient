export const FeatureSection = () => {
    return ( 
        <section class="feature__section section--padding pt-0">
        <div class="container">
            <div class="feature__inner d-flex justify-content-between">
                <div class="feature__items d-flex align-items-center">
                    <div class="feature__icon">  
                        <img src="assets/img/other/feature1.webp" alt="img"/>
                    </div>
                    <div class="feature__content">
                        <h2 class="feature__content--title h3">Free Shipping</h2>
                        <p class="feature__content--desc">Free shipping over $100</p>
                    </div>
                </div>
                <div class="feature__items d-flex align-items-center">
                    <div class="feature__icon ">  
                        <img src="assets/img/other/feature2.webp" alt="img"/>
                    </div>
                    <div class="feature__content">
                        <h2 class="feature__content--title h3">Support 24/7</h2>
                        <p class="feature__content--desc">Contact us 24 hours a day</p>
                    </div>
                </div>
                <div class="feature__items d-flex align-items-center">
                    <div class="feature__icon">  
                        <img src="assets/img/other/feature3.webp" alt="img"/>
                    </div>
                    <div class="feature__content">
                        <h2 class="feature__content--title h3">100% Money Back</h2>
                        <p class="feature__content--desc">You have 30 days to Return</p>
                    </div>
                </div>
                <div class="feature__items d-flex align-items-center">
                    <div class="feature__icon">  
                        <img src="assets/img/other/feature4.webp" alt="img"/>
                    </div>
                    <div class="feature__content">
                        <h2 class="feature__content--title h3">Payment Secure</h2>
                        <p class="feature__content--desc">We ensure secure payment</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default FeatureSection;