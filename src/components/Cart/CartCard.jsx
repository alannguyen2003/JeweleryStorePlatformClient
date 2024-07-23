import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import formatToVND from "../../utils/formatPrice";
import "./CartCard.css";
import { CartContext } from "../../context/cart";
import axios from "axios";
const CartCard = ({ cartItem }) => {
  const { removeFromCart } = useContext(CartContext);
  const [caseItem, setCaseItem] = useState("");

  const fetchCaseById = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:5130/api/JeweleryCase/${id}`,
        { headers: "accept: text/plain" }
      );
      console.log(response.data);
      setCaseItem(response.data);
    } catch (error) {
      console.log("Error Fetching", error);
    }
  };

  useEffect(() => {
    if (cartItem.case) {
      fetchCaseById(Number(cartItem.case));
    }
  }, [cartItem.case]);


  return (
    <tr class="cart__table--body__items">
      <td class="cart__table--body__list">
        <div class="cart__product d-flex align-items-center">
          <button
            class="cart__remove--btn"
            aria-label="search button"
            onClick={() => removeFromCart(cartItem)}
          >
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16px"
              height="16px"
            >
              <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>
            </svg>
          </button>
          <div class="cart__thumbnail">
            <Link to={`/product/${cartItem.id}`}>
              <img
                class="border-radius-5"
                src={cartItem.previewImage}
                alt="cart-product"
              />
            </Link>
          </div>
          <div class="cart__content">
            <h3 class="cart__content--title h4">
              <Link to={`/product/${cartItem.id}`}>
                Diamonds {cartItem.colorType}
                {"\t"}/{"\t"}
                {cartItem.clarityType}
                {"\t"}/{"\t"}
                {cartItem.cutType}
              </Link>
            </h3>
            <span class="cart__content--variant">
              CASE: {caseItem.caseName ? caseItem.caseName : "None"}
            </span>
            <span class="cart__content--variant">
              SIZE: {cartItem.size !== 0 ? cartItem.size : "None"}
            </span>
          </div>
        </div>
      </td>
      <td class="cart__table--body__list">
        <span className="cart-price">{formatToVND(cartItem.price)}</span>
      </td>
      {/* <td class="cart__table--body__list">
        <div class="quantity__box">
          <button
            type="button"
            class="quantity__value quickview__value--quantity decrease"
            aria-label="quantity value"
            value="Decrease Value"
          >
            -
          </button>
          <label>
            <input
              type="number"
              class="quantity__number quickview__value--number"
              value="1"
              data-counter=""
            />
          </label>
          <button
            type="button"
            class="quantity__value quickview__value--quantity increase"
            aria-label="quantity value"
            value="Increase Value"
          >
            +
          </button>
        </div>
      </td> */}
      <td class="cart__table--body__list">
        <span className="total">
          {formatToVND(cartItem.price * cartItem.quantity)}
        </span>
      </td>
    </tr>
  );
};

export default CartCard;
