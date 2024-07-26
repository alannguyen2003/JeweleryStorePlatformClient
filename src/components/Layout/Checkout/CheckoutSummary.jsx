import { useContext, useEffect, useState } from "react";
import CheckoutCard from "./CheckoutCard";
import { CartContext } from "../../../context/cart";
import formatToVND from "../../../utils/formatPrice";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const CheckoutSummary = ({ districtId, address }) => {
  const { cartItems, getCartTotal, clearCart } = useContext(CartContext);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const checkoutList = () => {
    let checkoutList = [];
    if (cartItems.length > 0) {
      const list = cartItems.map((items) => {
        return {
          caseId: items.case,
          size: items.size,
          diamondId: items.id,
        };
      });
      return (checkoutList = [...list]);
    }
  };

  const [checkout, setCheckout] = useState({
    districtId: Number(districtId ? districtId : 0),
    address: address,
    promotionCode: "string",
    price: getCartTotal(),
    orderItems: checkoutList(),
  });

  useEffect(() => {
    setCheckout((prevCheckout) => ({
      ...prevCheckout,
      districtId: Number(districtId || 0),
      address: address || "",
      price: getCartTotal(),
      orderItems: checkoutList(cartItems),
    }));
  }, [districtId, address, cartItems, getCartTotal]);

  // console.log(checkout);

  const fetchOrder = async (checkout) => {
    try {
      const response = await axios.post(
        "http://localhost:5130/api/Order/Create",
        checkout,
        {
          headers: {
            Authorization: `Bearer ${token} `,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data.message);
      if (response.data.succeeded === true) {
        Swal.fire({
          position: "top-end",
          icon: `${response.data.succeeded ? "success" : "error"}`,
          title: `${
            response.data.succeeded
              ? "Order Successfully"
              : "There is somthing wrong. Please try again!!!"
          }`,
          showConfirmButton: false,
          timer: 1500,
        });
        clearCart();
        navigate("/my-account");
      }
    } catch (error) {
      console.log("Error fetching", error);
    }
  };

  const handleCreateOrder = async (checkout) => {
    if (
      checkout.address !== "" &&
      checkout.orderItems.length > 0 &&
      checkout.price > 0
    ) {
      await fetchOrder(checkout);
    }
  };
  return (
    <aside class="checkout__sidebar sidebar border-radius-10">
      <h2 class="checkout__order--summary__title text-center mb-15">
        Your Order Summary
      </h2>
      <div class="cart__table checkout__product--table">
        <table class="cart__table--inner">
          <tbody class="cart__table--body">
            {cartItems.map((item, index) => {
              return <CheckoutCard key={index} cartItem={item} />;
            })}
          </tbody>
        </table>
      </div>
      <div class="checkout__total">
        <table class="checkout__total--table">
          <tbody class="checkout__total--body">
            <tr class="checkout__total--items">
              <td class="checkout__total--title text-left">Subtotal </td>
              <td class="checkout__total--amount text-right">
                {formatToVND(getCartTotal())}
              </td>
            </tr>
            <tr class="checkout__total--items">
              <td class="checkout__total--title text-left">Shipping</td>
              <td class="checkout__total--calculated__text text-right">
                Free shipping
              </td>
            </tr>
          </tbody>
          <tfoot class="checkout__total--footer">
            <tr class="checkout__total--footer__items">
              <td class="checkout__total--footer__title checkout__total--footer__list text-left">
                Total{" "}
              </td>
              <td class="checkout__total--footer__amount checkout__total--footer__list text-right">
                {formatToVND(getCartTotal())}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div class="payment__history mb-30">
        <h3 class="payment__history--title mb-20">Payment</h3>
        <ul class="payment__history--inner d-flex">
          <li class="payment__history--list">
            <button class="payment__history--link primary__btn" type="submit">
              Bank Transfer
            </button>
          </li>
        </ul>
      </div>
      <button
        class="checkout__now--btn primary__btn"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          handleCreateOrder(checkout);
        }}
      >
        Checkout Now
      </button>
    </aside>
  );
};

export default CheckoutSummary;
