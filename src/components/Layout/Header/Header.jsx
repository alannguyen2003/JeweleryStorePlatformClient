import { useContext } from "react";
export const Header = () => {


    return (
    <header className="header__section">
        <div className="header__topbar bg__primary">
            <div className="container">
                <div className="header__topbar--inner style6 d-flex align-items-center justify-content-between">
                    <ul className="header__topbar--info d-none d-lg-flex">
                        <li className="header__info--text text-white">
                            Good luck with shopping
                        </li>
                        <li className="header__info--text text-white">
                            <span className="text__secondary">Call us</span>
                            <a  href="tel:+1234567898">: (+123) 456-7898</a>
                        </li>
                    </ul>
                    <div className="header__top--right d-flex align-items-center">
                        <ul className="language__currency d-flex align-items-center">
                            <li className="language__currency--list">
                                <a className="language__currency--link currency__link" href="javascript:void(0)">
                                    <img className="currency__link--icon" src="assets/img/icon/language-icon.webp" alt="currency"/>
                                    <span>USD</span> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="9.797" height="6.05" viewBox="0 0 9.797 6.05">
                                        <path  d="M14.646,8.59,10.9,12.329,7.151,8.59,6,9.741l4.9,4.9,4.9-4.9Z" transform="translate(-6 -8.59)" fill="currentColor" opacity="0.7"/>
                                    </svg>
                                </a>
                                <div className="dropdown__switcher dropdown__currency">
                                    <ul>
                                        <li className="dropdown__switcher--items"><a className="dropdown__switcher--text" href="#">CAD</a></li>
                                        <li className="dropdown__switcher--items"><a className="dropdown__switcher--text" href="#">CNY</a></li>
                                        <li className="dropdown__switcher--items"><a className="dropdown__switcher--text" href="#">EUR</a></li>
                                        <li className="dropdown__switcher--items"><a className="dropdown__switcher--text" href="#">GBP</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="language__currency--list">
                                <a className="language__currency--link language__switcher" href="javascript:void(0)">
                                    <span>English</span> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="9.797" height="6.05" viewBox="0 0 9.797 6.05">
                                        <path  d="M14.646,8.59,10.9,12.329,7.151,8.59,6,9.741l4.9,4.9,4.9-4.9Z" transform="translate(-6 -8.59)" fill="currentColor" opacity="0.7"/>
                                    </svg>
                                </a>
                                <div className="dropdown__switcher dropdown__language">
                                    <ul>
                                        <li className="dropdown__switcher--items"><a className="dropdown__switcher--text" href="#">France</a></li>
                                        <li className="dropdown__switcher--items"><a className="dropdown__switcher--text" href="#">Russia</a></li>
                                        <li className="dropdown__switcher--items"><a className="dropdown__switcher--text" href="#">Spanish</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        <ul className="header__top--link d-flex align-items-center">
                            <li className="header__link--menu"><a className="header__link--menu__text" href="wishlist.html">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className=" -heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg> Wishlist</a>
                            </li>
                            <li className="header__link--menu"><a className="header__link--menu__text" href="compare.html">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M400 304l48 48-48 48M400 112l48 48-48 48M64 352h85.19a80 80 0 0066.56-35.62L256 256"/><path d="M64 160h85.19a80 80 0 0166.56 35.62l80.5 120.76A80 80 0 00362.81 352H416M416 160h-53.19a80 80 0 00-66.56 35.62L288 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>Compare</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="main__header position__relative header__sticky">
            <div className="container">
                <div className="main__header--inner d-flex justify-content-between align-items-center">
                    <div className="offcanvas__header--menu__open ">
                        <a className="offcanvas__header--menu__open--btn" href="javascript:void(0)" data-offcanvas>
                            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon offcanvas__header--menu__open--svg" viewBox="0 0 512 512"><path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 160h352M80 256h352M80 352h352"/></svg>
                            <span className="visually-hidden">Offcanvas Menu Open</span>
                        </a>
                    </div>
                    <div className="main__logo">
                        <h1 className="main__logo--title"><a className="main__logo--link" href="/">
                            <img className="main__logo--img" src="assets/img/logo/nav-log.webp" alt="logo-img"/>
                        </a></h1>
                    </div>
                    <div className="header__menu d-none d-lg-block">
                        <nav className="header__menu--navigation">
                            <ul className="header__menu--wrapper d-flex">
                                <li className="header__menu--items">
                                    <a className="header__menu--link active" href="/">Home 
                                        <svg className="menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12" height="7.41" viewBox="0 0 12 7.41">
                                        </svg>
                                    </a>
                                </li>
                                <li className="header__menu--items mega__menu--items">
                                    <a className="header__menu--link" href="/shop">Shop 
                                        <svg className="menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12" height="7.41" viewBox="0 0 12 7.41">
                                            <path  d="M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z" transform="translate(-6 -8.59)" fill="currentColor" opacity="0.7"/>
                                        </svg>
                                    </a>
                                    <div className="header__mega--menu__wrapper">
                                        <ul className="header__mega--menu d-flex">
                                            <li className="header__mega--menu__li">
                                                <ul className="header__mega--sub__menu">
                                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="/shop">Shop Left Sidebar</a></li>
                                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="shop-grid.html">Shop Grid</a></li>
                                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="shop-grid-list.html">Shop Grid List</a></li>
                                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="shop-list.html">Shop List</a></li>
                                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="/shop">Vitamins & Health</a></li>
                                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="/shop">Mans Collection</a></li>
                                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="/shop">Beauty products</a></li>
                                                </ul>
                                            </li>
                                            <li className="header__mega--menu__li">
                                                <ul className="header__mega--sub__menu">
                                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="product-details.html">Product Details</a></li>
                                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="product-video.html">Video Product</a></li>
                                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="product-details.html">Variable Product</a></li>
                                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="product-left-sidebar.html">Product Left Sidebar</a></li>
                                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="product-gallery.html">Product Gallery</a></li>
                                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="product-details.html">Trending Product</a></li>
                                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="product-details.html">Tab Product</a></li>
                                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="product-details.html">Horizontal Product</a></li>
                                                </ul>
                                            </li>
                                            <li className="header__mega--menu__li">
                                                <ul className="header__mega--sub__menu">
                                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="/authentication">My Account</a></li>
                                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="/authentication">My Account 2</a></li>
                                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="cart.html">Cart Page</a></li>
                                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="wishlist.html">Wishlist</a></li>
                                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="404.html">404 Page</a></li>
                                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="/authentication">Login Page</a></li>
                                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="faq.html">Faq Page</a></li>
                                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="privacy-policy.html">Privacy Policy</a></li>
                                                </ul>
                                            </li>
                                            <li className="header__mega--menu__li">
                                                <ul className="header__mega--sub__menu">
                                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="about.html">About Us</a></li>
                                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="contact.html">Contact Us</a></li>
                                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="portfolio.html">Portfolio</a></li>
                                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="compare.html">Compare</a></li>
                                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="checkout.html">Checkout</a></li>
                                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="404.html">Error Page</a></li>
                                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="cart.html">View cart</a></li>
                                                </ul>
                                            </li>
                                            <li className="header__mega--menu__li banner__child">
                                                <div className="header__mega--menu__banner">
                                                    <a href="/shop">
                                                        <img className="header__mega--menu__banner--img" src="assets/img/banner/banner-menu.webp" alt="banner"/>
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="header__menu--items">
                                    <a className="header__menu--link" href="/shop">Accesories </a>  
                                </li>
                                <li className="header__menu--items">
                                    <a className="header__menu--link" href="#">Pages 
                                        <svg className="menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12" height="7.41" viewBox="0 0 12 7.41">
                                            <path  d="M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z" transform="translate(-6 -8.59)" fill="currentColor" opacity="0.7"/>
                                        </svg>
                                    </a>
                                    <ul className="header__sub--menu">
                                        <li className="header__sub--menu__items"><a href="about.html" className="header__sub--menu__link">About Us</a></li>
                                        <li className="header__sub--menu__items"><a href="contact.html" className="header__sub--menu__link">Contact Us</a></li>
                                        <li className="header__sub--menu__items"><a href="cart.html" className="header__sub--menu__link">Cart Page</a></li>
                                        <li className="header__sub--menu__items"><a href="portfolio.html" className="header__sub--menu__link">Portfolio Page</a></li>
                                        <li className="header__sub--menu__items"><a href="wishlist.html" className="header__sub--menu__link">Wishlist Page</a></li>
                                        <li className="header__sub--menu__items"><a href="privacy-policy.html" className="header__sub--menu__link">Privacy Policy</a></li>
                                        <li className="header__sub--menu__items"><a href="/authentication" className="header__sub--menu__link">Login Page</a></li>
                                        <li className="header__sub--menu__items"><a href="404.html" className="header__sub--menu__link">Error Page</a></li>
                                    </ul>
                                </li>
                                <li className="header__menu--items">
                                    <a className="header__menu--link" href="contact.html">Contact </a>  
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header__account">
                        <ul className="header__account--wrapper d-flex align-items-center">
                            <li className="header__account--items  header__account--search__items d-none d-lg-block">
                                <a className="header__account--btn search__open--btn" href="#">
                                    <span className="header__account--btn__icon">
                                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 16L11 11M12.6667 6.83333C12.6667 7.59938 12.5158 8.35792 12.2226 9.06565C11.9295 9.77339 11.4998 10.4164 10.9581 10.9581C10.4164 11.4998 9.77339 11.9295 9.06565 12.2226C8.35792 12.5158 7.59938 12.6667 6.83333 12.6667C6.06729 12.6667 5.30875 12.5158 4.60101 12.2226C3.89328 11.9295 3.25022 11.4998 2.70854 10.9581C2.16687 10.4164 1.73719 9.77339 1.44404 9.06565C1.15088 8.35792 1 7.59938 1 6.83333C1 5.28624 1.61458 3.80251 2.70854 2.70854C3.80251 1.61458 5.28624 1 6.83333 1C8.38043 1 9.86416 1.61458 10.9581 2.70854C12.0521 3.80251 12.6667 5.28624 12.6667 6.83333Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </span>
                                    <span className="visually-hidden">Search</span>  
                                </a>
                            </li>
                            <li className="header__account--items">
                                <a className="header__account--btn d-sm-2-none" href="wishlist.html">
                                    <span className="header__account--btn__icon">
                                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.09836 2.28681C1.75014 2.69477 1.47391 3.1791 1.28545 3.71213C1.097 4.24516 1 4.81646 1 5.39341C1 5.97036 1.097 6.54167 1.28545 7.0747C1.47391 7.60773 1.75014 8.09206 2.09836 8.50002L8.50001 16L14.9016 8.50002C15.6049 7.6761 16 6.55862 16 5.39341C16 4.22821 15.6049 3.11073 14.9016 2.28681C14.1984 1.46289 13.2446 1.00001 12.25 1.00001C11.2554 1.00001 10.3016 1.46289 9.59833 2.28681L8.50001 3.57358L7.40168 2.28681C7.05346 1.87884 6.64006 1.55522 6.18509 1.33443C5.73011 1.11364 5.24248 1 4.75002 1C4.25756 1 3.76992 1.11364 3.31495 1.33443C2.85998 1.55522 2.44658 1.87884 2.09836 2.28681V2.28681Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </span>
                                    <span className="visually-hidden">Wishlist</span> 
                                </a>
                            </li>
                            <li className="header__account--items">
                                <a className="header__account--btn d-sm-2-none" href="/authentication">
                                    <span className="header__account--btn__icon">
                                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 16V14.3333C16 13.4493 15.6049 12.6014 14.9016 11.9763C14.1984 11.3512 13.2446 11 12.25 11H4.75C3.75544 11 2.80161 11.3512 2.09835 11.9763C1.39509 12.6014 1 13.4493 1 14.3333V16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M8.5 7.66667C10.5711 7.66667 12.25 6.17428 12.25 4.33333C12.25 2.49238 10.5711 1 8.5 1C6.42893 1 4.75 2.49238 4.75 4.33333C4.75 6.17428 6.42893 7.66667 8.5 7.66667Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </span>
                                    <span className="visually-hidden">My Account</span> 
                                </a>
                            </li>
                            <li className="header__account--items header__minicart--items">
                                <a className="header__account--btn minicart__open--btn" href="javascript:void(0)" data-offcanvas>
                                    <span className="header__account--btn__icon">
                                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.25 7.66667V4.33333C12.25 3.44928 11.8549 2.60143 11.1517 1.97631C10.4484 1.35119 9.49456 1 8.5 1C7.50544 1 6.55161 1.35119 5.84835 1.97631C5.14509 2.60143 4.75 3.44928 4.75 4.33333V7.66667M1.9375 6H15.0625L16 16H1L1.9375 6Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>  
                                    </span>
                                    <span className="items__count">2</span> 
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    

        <div className="offCanvas__minicart">
            <div className="minicart__header ">
                <div className="minicart__header--top d-flex justify-content-between align-items-center">
                    <h3 className="minicart__title"> Shopping Cart</h3>
                    <button className="minicart__close--btn" aria-label="minicart close btn" data-offcanvas>
                        <svg className="minicart__close--icon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"/></svg>
                    </button>
                </div>
                <p className="minicart__header--desc">The Beauty and Cosmetic products are limited</p>
            </div>
            <div className="minicart__product">
                <div className="minicart__product--items d-flex">
                    <div className="minicart__thumb">
                        <a href="product-details.html"><img src="assets/img/product/small-product/product1.webp" alt="prduct-img"/></a>
                    </div>
                    <div className="minicart__text">
                        <h4 className="minicart__subtitle"><a href="product-details.html">Z 7-8mm Button is </a></h4>
                        <span className="color__variant"><b>Color:</b> Beige</span>
                        <div className="minicart__price">
                            <span className="minicart__current--price">$125.00</span>
                            <span className="minicart__old--price">$140.00</span>
                        </div>
                        <div className="minicart__text--footer d-flex align-items-center">
                            <div className="quantity__box minicart__quantity">
                                <button type="button" className="quantity__value decrease" aria-label="quantity value" value="Decrease Value">-</button>
                                <label>
                                    <input type="number" className="quantity__number" value="1" data-counter />
                                </label>
                                <button type="button" className="quantity__value increase" aria-label="quantity value" value="Increase Value">+</button>
                            </div>
                            <button className="minicart__product--remove" type="button">Remove</button>
                        </div>
                    </div>
                </div>
                <div className="minicart__product--items d-flex">
                    <div className="minicart__thumb">
                        <a href="product-details.html"><img src="assets/img/product/small-product/product2.webp" alt="prduct-img"/></a>
                    </div>
                    <div className="minicart__text">
                        <h4 className="minicart__subtitle"><a href="product-details.html">Z 7-8mm Button is
                           </a></h4>
                        <span className="color__variant"><b>Color:</b> Green</span>
                        <div className="minicart__price">
                            <span className="minicart__current--price">$115.00</span>
                            <span className="minicart__old--price">$130.00</span>
                        </div>
                        <div className="minicart__text--footer d-flex align-items-center">
                            <div className="quantity__box minicart__quantity">
                                <button type="button" className="quantity__value decrease" aria-label="quantity value" value="Decrease Value">-</button>
                                <label>
                                    <input type="number" className="quantity__number" value="1" data-counter />
                                </label>
                                <button type="button" className="quantity__value increase" aria-label="quantity value" value="Increase Value">+</button>
                            </div>
                            <button className="minicart__product--remove" type="button">Remove</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="minicart__amount">
                <div className="minicart__amount_list d-flex justify-content-between">
                    <span>Sub Total:</span>
                    <span><b>$240.00</b></span>
                </div>
                <div className="minicart__amount_list d-flex justify-content-between">
                    <span>Total:</span>
                    <span><b>$240.00</b></span>
                </div>
            </div>
            <div className="minicart__conditions text-center">
                <input className="minicart__conditions--input" id="accept" type="checkbox"/>
                <label className="minicart__conditions--label" for="accept">I agree with the <a className="minicart__conditions--link" href="privacy-policy.html">Privacy Policy</a></label>
            </div>
            <div className="minicart__button d-flex justify-content-center">
                <a className="primary__btn minicart__button--link" href="cart.html">View cart</a>
                <a className="primary__btn minicart__button--link" href="checkout.html">Checkout</a>
            </div>
        </div>

        <div className="predictive__search--box ">
            <div className="predictive__search--box__inner">
                <h2 className="predictive__search--title">Search Products</h2>
                <form className="predictive__search--form" action="#">
                    <label>
                        <input className="predictive__search--input" placeholder="Search Here" type="text"/>
                    </label>
                    <button className="predictive__search--button text-white" aria-label="search button"><svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="30.51" height="25.443" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29L448 448"/></svg>  </button>
                </form>
            </div>
            <button className="predictive__search--close__btn" aria-label="search close" data-offcanvas>
                <svg className="predictive__search--close__icon" xmlns="http://www.w3.org/2000/svg" width="40.51" height="30.443"  viewBox="0 0 512 512"><path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"/></svg>
            </button>
        </div>        
    </header>
    )
}

export default Header;