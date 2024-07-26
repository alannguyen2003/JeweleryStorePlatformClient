import axios from "axios";
import { useEffect, useState } from "react";

export const CheckoutForm = ({
  provinceId,
  setProvinceId,
  districtId,
  setDistrictId,
  address,
  setAddress,
}) => {
  const [provinceList, setProvinceList] = useState([]);
  const [districtList, setDistrictList] = useState([]);

  const fetchProvinceList = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5130/api/v1/Address/get-all-provinces"
      );
      if (response.data.succeeded === true) {
        setProvinceList(response.data.data);
      }
    } catch (error) {
      console.log("Error fetching provinces:", error);
    }
  };

  const fetchDistrictList = async (provinceId) => {
    try {
      const response = await axios.get(
        `http://localhost:5130/api/v1/Address/get-districts-by-province?provinceId=${provinceId}`
      );
      if (response.data.succeeded === true) {
        setDistrictList(response.data.data);
      } else {
        setDistrictList([]);
      }
    } catch (error) {
      setDistrictList([]);
      console.log("Error fetching districts:", error);
    }
  };

  useEffect(() => {
    fetchProvinceList();
  }, []);

  useEffect(() => {
    if (provinceId) {
      fetchDistrictList(provinceId);
    }
  }, [provinceId]);

  const handleGetProvince = (e) => {
    e.preventDefault();
    const selectedProvinceId = e.target.value;
    setProvinceId(selectedProvinceId);
    setDistrictId(""); // Reset districtId when a new province is selected
  };

  const handleGetDistrict = (e) => {
    e.preventDefault();
    setDistrictId(e.target.value);
  };

  const handleChangeAddress = (e) => {
    e.preventDefault();
    setAddress(e.target.value);
  };

  return (
    <div className="main checkout__main">
      <form action="#">
        <div className="checkout__content--step section__contact--information">
          <div className="checkout__section--header d-flex align-items-center justify-content-between mb-25">
            <h2 className="checkout__header--title h3">Contact information</h2>
          </div>
        </div>
        <div className="checkout__content--step section__shipping--address">
          <div className="checkout__section--header mb-25">
            <h2 className="checkout__header--title h3">Billing Details</h2>
          </div>
          <div className="section__shipping--address__content">
            <div className="row">
              <div className="col-lg-6 mb-20">
                <div className="checkout__input--list">
                  <label
                    className="checkout__input--label mb-10"
                    htmlFor="province"
                  >
                    Province{" "}
                    <span className="checkout__input--label__star">*</span>
                  </label>
                  <div className="checkout__input--select select">
                    <select
                      className="checkout__input--select__field border-radius-5"
                      id="province"
                      onChange={handleGetProvince}
                      value={provinceId}
                    >
                      <option value="">Select a province</option>
                      {provinceList.map((province, index) => (
                        <option key={index} value={province.id}>
                          {province.cityName}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-20">
                <div className="checkout__input--list">
                  <label
                    className="checkout__input--label mb-10"
                    htmlFor="district"
                  >
                    District{" "}
                    <span className="checkout__input--label__star">*</span>
                  </label>
                  <div className="checkout__input--select select">
                    <select
                      className="checkout__input--select__field border-radius-5"
                      id="district"
                      onChange={handleGetDistrict}
                      value={districtId}
                      disabled={!provinceId} // Disable the district dropdown if no province is selected
                    >
                      <option value="">Select a district</option>
                      {districtList.length > 0 ? (
                        districtList.map((district, index) => (
                          <option key={index} value={district.id}>
                            {district.districtName}
                          </option>
                        ))
                      ) : (
                        <option value="0">None</option>
                      )}
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-12 mb-20">
                <div className="checkout__input--list">
                  <label
                    className="checkout__input--label mb-10"
                    htmlFor="address"
                  >
                    Address{" "}
                    <span className="checkout__input--label__star">*</span>
                  </label>
                  <input
                    className="checkout__input--field border-radius-5"
                    placeholder="Enter your address..."
                    id="address"
                    type="text"
                    onChange={handleChangeAddress}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="checkout__content--step__footer d-flex align-items-center">
          <a
            className="continue__shipping--btn primary__btn border-radius-5"
            href="/shop"
          >
            Continue To Shipping
          </a>
          <a className="previous__link--content" href="/cart">
            Return to cart
          </a>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
