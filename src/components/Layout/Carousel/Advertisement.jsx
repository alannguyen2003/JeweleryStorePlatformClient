export const Advertisement = () => {
    
    return (
        <div>
            <section className="grid__banner--section section--padding pt-0">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="grid__banner--thumbnail">
                            <img src="assets/img/banner/banner13.webp" alt="banner-img"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="grid__banner--content margin__left">
                            <h2 className="grid__banner--title">Curated By Color</h2>
                            <p className="grid__banner--desc">Brighten up your look with vibrant gemstone jewelry.</p>
                            <a className="grid__banner--btn primary__btn" href="shop.html">SHOP NOW</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="grid__banner--section">
            <div className="container">
                <div className="row row_sm_u_reverse align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="grid__banner--content margin__left">
                            <h2 className="grid__banner--title">Soak Up The Savings</h2>
                            <p className="grid__banner--desc">Brighten up your look with vibrant gemstone jewelry.</p>
                            <a className="grid__banner--btn primary__btn" href="shop.html">SHOP NOW</a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="grid__banner--thumbnail">
                            <img src="assets/img/banner/banner14.webp" alt="banner-img"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
}

export default Advertisement;