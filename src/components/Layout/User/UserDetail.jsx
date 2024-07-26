import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import formatToVND from "../../../utils/formatPrice";
import formatDateStringToVietnamese from "../../../utils/formateDate";

export const UserDetail = () => {
  const [orderList, setOrderList] = useState([]);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/authentication");
    }
  };
  const token = localStorage.getItem("token");

  const fetchGetOrderById = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5130/api/Order/GetByAccountId",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      console.log(response.data);
      if (response.data.succeeded === true) {
        setOrderList(response.data.data);
      }
    } catch (error) {
      console.log("Error Fetching", error);
    }
  };

  useEffect(() => {
    fetchGetOrderById();
  }, []);

  // console.log(orderList);

  const fetchPayment = async (orderId) => {
    try {
      const response = await axios.get(
        `http://localhost:5130/api/v1/Payment/create-payment-link?orderId=${orderId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.succeeded === true) {
        window.location.href = response.data.data.checkoutUrl;
      }
    } catch (error) {
      console.log("Error Fetching", error);
    }
  };

  const handlePayment = (orderId) => {
    if (orderId) {
      fetchPayment(orderId);
    }
  };
  return (
    <section class="my__account--section section--padding">
      <div class="container">
        <p class="account__welcome--text">Hello, The User</p>
        <div class="my__account--section__inner border-radius-10 d-flex">
          <div class="account__left--sidebar">
            <h2 class="account__content--title mb-20">My Profile</h2>
            <ul class="account__menu">
              <li class="account__menu--list active">
                <a href="my-account.html">Dashboard</a>
              </li>
              <li class="account__menu--list">
                <a href="my-account-2.html">Addresses</a>
              </li>
              <li class="account__menu--list">
                <a href="wishlist.html">Wishlist</a>
              </li>
              <li class="account__menu--list">
                <a onClick={handleLogout}>Log Out</a>
              </li>
            </ul>
          </div>
          <div class="account__wrapper">
            <div class="account__content">
              <h2 class="account__content--title h3 mb-20">Orders History</h2>
              <div class="account__table--area">
                <table class="account__table">
                  <thead class="account__table--header">
                    <tr class="account__table--header__child">
                      <th class="account__table--header__child--items">
                        Order
                      </th>
                      <th class="account__table--header__child--items">Date</th>
                      <th class="account__table--header__child--items">
                        Payment Status
                      </th>
                      <th class="account__table--header__child--items">
                        Fulfillment Status
                      </th>
                      <th class="account__table--header__child--items">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody class="account__table--body mobile__none">
                    {orderList.map((order, index) => {
                      return (
                        <tr class="account__table--body__child">
                          <td class="account__table--body__child--items">
                            #{index + 1}
                          </td>
                          <td class="account__table--body__child--items">
                            {formatDateStringToVietnamese(order.startDateTime)}
                          </td>
                          <td class="account__table--body__child--items">
                            Paid
                          </td>
                          <td class="account__table--body__child--items">
                            {order.status === 1 ? (
                              "Pending"
                            ) : order.status === 2 ? (
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  handlePayment(order.id);
                                }}
                              >
                                Payment
                              </button>
                            ) : order.status === 3 ? (
                              "Paid"
                            ) : order.status === 4 ? (
                              "On Shipping"
                            ) : order.status === 5 ? (
                              "Finished"
                            ) : (
                              "Rejected"
                            )}
                          </td>
                          <td class="account__table--body__child--items">
                            {formatToVND(order.price)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserDetail;
