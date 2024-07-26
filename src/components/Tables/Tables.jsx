import React, { useEffect, useState } from "react";
import { Form, Input, InputNumber, Popconfirm, Table, Typography } from "antd";
import "./Tables.css";
import axios from "axios";
import formatToVND from "../../utils/formatPrice";
import formatDateStringToVietnamese from "../../utils/formateDate";
import Swal from "sweetalert2";

const Tables = () => {
  const [orderList, setOrderList] = useState([]);

  const fetchGetAllOrderList = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5130/api/Order/GetAll",
        {
          headers: {
            Accept: "text/plain",
          },
        }
      );
      setOrderList(response.data);
    } catch (error) {
      console.log("Error fetching", error);
    }
  };

  useEffect(() => {
    fetchGetAllOrderList();
  }, []);

  const fetchChangeStatus = async (orderId, status) => {
    try {
      const response = await axios.put(
        `http://localhost:5130/api/Order/ChangStatus${orderId}?status=${status}`,
        {},
        {
          headers: {
            Accept: "text/plain",
          },
        }
      );
      console.log(response.data);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Update Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Please try again!!!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleChangeStatus = (orderId) => (event) => {
    const newStatus = event.target.value;
    fetchChangeStatus(orderId, newStatus);
  };

  return (
    <table class="account__table">
      <thead class="account__table--header">
        <tr class="account__table--header__child">
          <th class="account__table--header__child--items">Order</th>
          <th class="account__table--header__child--items">Date</th>
          <th class="account__table--header__child--items">Account ID</th>
          <th class="account__table--header__child--items">
            Fulfillment Status
          </th>
          <th class="account__table--header__child--items">Total</th>
        </tr>
      </thead>
      <tbody class="account__table--body mobile__none">
        {orderList.map((order, index) => {
          return (
            <tr class="account__table--body__child">
              <td class="account__table--body__child--items">#{index + 1}</td>
              <td class="account__table--body__child--items">
                {formatDateStringToVietnamese(order.startDateTime)}
              </td>
              <td class="account__table--body__child--items">
                {order.accountId}
              </td>
              <td class="account__table--body__child--items">
                <select
                  onChange={handleChangeStatus(order.id)}
                  defaultValue={order.status}
                >
                  <option value={1}>Pending</option>
                  <option value={2}>Accepted</option>
                  {/* <option value={3}>Paid</option> */}
                  <option value={4}>On Shipping</option>
                  <option value={5}>Finish</option>
                </select>
              </td>
              <td class="account__table--body__child--items">
                {formatToVND(order.price)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Tables;
