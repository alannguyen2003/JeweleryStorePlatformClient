export const CheckoutForm = () => {
  return (
    <div class="main checkout__mian">
      <form action="#">
          <div class="checkout__content--step section__contact--information">
              <div class="checkout__section--header d-flex align-items-center justify-content-between mb-25">
                  <h2 class="checkout__header--title h3">Contact information</h2>
              </div>
          </div>
          <div class="checkout__content--step section__shipping--address">
              <div class="checkout__section--header mb-25">
                  <h2 class="checkout__header--title h3">Billing Details</h2>
              </div>
              <div class="section__shipping--address__content">
                  <div class="row">
                  <div class="col-lg-6 mb-20">
                          <div class="checkout__input--list">
                              <label class="checkout__input--label mb-10" for="country">Province <span class="checkout__input--label__star">*</span></label>
                              <div class="checkout__input--select select">
                                  <select class="checkout__input--select__field border-radius-5" id="country">
                                      <option value="1">India</option>
                                      <option value="2">United States</option>
                                      <option value="3">Netherlands</option>
                                      <option value="4">Afghanistan</option>
                                      <option value="5">Islands</option>
                                      <option value="6">Albania</option>
                                      <option value="7">Antigua Barbuda</option>
                                  </select>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-6 mb-20">
                          <div class="checkout__input--list">
                              <label class="checkout__input--label mb-10" for="country">District <span class="checkout__input--label__star">*</span></label>
                              <div class="checkout__input--select select">
                                  <select class="checkout__input--select__field border-radius-5" id="country">
                                      <option value="1">India</option>
                                      <option value="2">United States</option>
                                      <option value="3">Netherlands</option>
                                      <option value="4">Afghanistan</option>
                                      <option value="5">Islands</option>
                                      <option value="6">Albania</option>
                                      <option value="7">Antigua Barbuda</option>
                                  </select>
                              </div>
                          </div>
                      </div>
                      <div class="col-12 mb-20">
                          <div class="checkout__input--list">
                              <label class="checkout__input--label mb-10" for="input4">Address <span class="checkout__input--label__star">*</span></label>
                              <input class="checkout__input--field border-radius-5" placeholder="Enter your address..." id="input4" type="text"/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="checkout__content--step__footer d-flex align-items-center">
              <a class="continue__shipping--btn primary__btn border-radius-5" href="index-2.html">Continue To Shipping</a>
              <a class="previous__link--content" href="cart.html">Return to cart</a>
          </div>
      </form>
    </div>
  );
}

export default CheckoutForm;