import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import formatToVND from "../../../utils/formatPrice";

const CheckoutCard = ({ cartItem }) => {
  const [caseItem, setCaseItem] = useState("");

  const fetchCaseById = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:5130/api/JeweleryCase/${id}`,
        { headers: "accept: text/plain" }
      );
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
        <div class="product__image two  d-flex align-items-center">
          <div class="product__thumbnail border-radius-5">
            <Link to={`/product/${cartItem.id}`}>
              <img
                class="border-radius-5"
                src={cartItem.previewImage}
                alt="cart-product"
              />
            </Link>
            <span class="product__thumbnail--quantity">
              {cartItem.quantity}
            </span>
          </div>
          <div class="product__description">
            <h4 class="product__description--name">
              <Link to={`/product/${cartItem.id}`}>
                Diamonds {cartItem.colorType}
                {"\t"}/{"\t"}
                {cartItem.clarityType}
                {"\t"}/{"\t"}
                {cartItem.cutType}
              </Link>
            </h4>
            <div class="product__description--variant">
              CASE: {caseItem.caseName ? caseItem.caseName : "None"}
            </div>
            <div class="product__description--variant">
              SIZE: {cartItem.size ? cartItem.size : "None"}
            </div>
          </div>
        </div>
      </td>
      <td class="cart__table--body__list">
        <span class="cart__price">{formatToVND(cartItem.price)}</span>
      </td>
    </tr>
  );
};

export default CheckoutCard;
