export const CheckoutSummary = () => {
  return (
    <aside class="checkout__sidebar sidebar border-radius-10">
      <h2 class="checkout__order--summary__title text-center mb-15">Your Order Summary</h2>
      <div class="cart__table checkout__product--table">
          <table class="cart__table--inner">
              <tbody class="cart__table--body">
                  <tr class="cart__table--body__items">
                      <td class="cart__table--body__list">
                          <div class="product__image two  d-flex align-items-center">
                              <div class="product__thumbnail border-radius-5">
                                  <a class="display-block" href="product-details.html"><img class="display-block border-radius-5" src="assets/img/product/small-product/product1.webp" alt="cart-product"/></a>
                                  <span class="product__thumbnail--quantity">1</span>
                              </div>
                              <div class="product__description">
                                  <h4 class="product__description--name"><a href="product-details.html">Fluids & Chemicals</a></h4>
                                  <span class="product__description--variant">COLOR: Blue</span>
                              </div>
                          </div>
                      </td>
                      <td class="cart__table--body__list">
                          <span class="cart__price">£65.00</span>
                      </td>
                  </tr>
                  <tr class="cart__table--body__items">
                      <td class="cart__table--body__list">
                          <div class="cart__product d-flex align-items-center">
                              <div class="product__thumbnail border-radius-5">
                                  <a class="display-block" href="product-details.html"><img class="display-block border-radius-5" src="assets/img/product/small-product/product2.webp" alt="cart-product"/></a>
                                  <span class="product__thumbnail--quantity">1</span>
                              </div>
                              <div class="product__description">
                                  <h4 class="product__description--name"><a href="product-details.html">Cargo Accessories</a></h4>
                                  <span class="product__description--variant">COLOR: Green</span>
                              </div>
                          </div>
                      </td>
                      <td class="cart__table--body__list">
                          <span class="cart__price">£82.00</span>
                      </td>
                  </tr>
                  <tr class="cart__table--body__items">
                      <td class="cart__table--body__list">
                          <div class="cart__product d-flex align-items-center">
                              <div class="product__thumbnail border-radius-5">
                                  <a class="display-block" href="product-details.html"><img class="display-block border-radius-5" src="assets/img/product/small-product/product3.webp" alt="cart-product"/></a>
                                  <span class="product__thumbnail--quantity">1</span>
                              </div>
                              <div class="product__description">
                                  <h4 class="product__description--name"><a href="product-details.html">Motorbike Care</a></h4>
                                  <span class="product__description--variant">COLOR: White</span>
                              </div>
                          </div>
                      </td>
                      <td class="cart__table--body__list">
                          <span class="cart__price">£78.00</span>
                      </td>
                  </tr>
              </tbody>
          </table> 
      </div>
      <div class="checkout__total">
          <table class="checkout__total--table">
              <tbody class="checkout__total--body">
                  <tr class="checkout__total--items">
                      <td class="checkout__total--title text-left">Subtotal </td>
                      <td class="checkout__total--amount text-right">$860.00</td>
                  </tr>
                  <tr class="checkout__total--items">
                      <td class="checkout__total--title text-left">Shipping</td>
                      <td class="checkout__total--calculated__text text-right">Free shipping</td>
                  </tr>
              </tbody>
              <tfoot class="checkout__total--footer">
                  <tr class="checkout__total--footer__items">
                      <td class="checkout__total--footer__title checkout__total--footer__list text-left">Total </td>
                      <td class="checkout__total--footer__amount checkout__total--footer__list text-right">$860.00</td>
                  </tr>
              </tfoot>
          </table>
      </div>
      <div class="payment__history mb-30">
          <h3 class="payment__history--title mb-20">Payment</h3>
          <ul class="payment__history--inner d-flex">
              <li class="payment__history--list"><button class="payment__history--link primary__btn" type="submit">Bank Transfer</button></li>
          </ul>
      </div>
      <button class="checkout__now--btn primary__btn" type="submit">Checkout Now</button>
    </aside>
  );
}

export default CheckoutSummary;