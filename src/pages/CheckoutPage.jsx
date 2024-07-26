import Preloader from "../components/Layout/Preloader";
import Header from "../components/Layout/Header/Header";
import BreadcrumpSection from "../components/Layout/PageTitle/BreadcrumpSection";
import Collection from "../components/Layout/Carousel/Collection";
import CheckoutForm from "../components/Layout/Checkout/CheckoutForm";
import CheckoutSummary from "../components/Layout/Checkout/CheckoutSummary";
import { useState } from "react";

export const CheckoutPage = () => {
  const [provinceId, setProvinceId] = useState(0);
  const [districtId, setDistrictId] = useState(0);
  const [address, setAddress] = useState("");
  return (
    <body>
      <Preloader />
      <Header />
      <main class="main__content_wrapper">
        <BreadcrumpSection name="Checkout" />
        <div class="checkout__page--area section--padding">
          <div class="container">
            <div class="row">
              <div class="col-lg-7 col-md-6">
                <CheckoutForm
                  provinceId={provinceId}
                  setProvinceId={setProvinceId}
                  districtId={districtId}
                  setDistrictId={setDistrictId}
                  address={address}
                  setAddress={setAddress}
                />
              </div>
              <div class="col-lg-5 col-md-6">
                <CheckoutSummary
                  provinceId={provinceId}
                  districtId={districtId}
                  address={address}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
};

export default CheckoutPage;
