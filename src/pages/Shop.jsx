import BreadcrumpSection from "../components/Layout/PageTitle/BreadcrumpSection";
import Header from "../components/Layout/Header/Header";
import Collection from "../components/Layout/Carousel/Collection";
import ProductSidebar from "../components/Layout/Sidebar/ProductSidebar";
import ProductContent from "../components/Product/ProductContent";
import Preloader from "../components/Layout/Preloader";
import { useEffect, useState } from "react";
import axios from "axios";
export const Shop = () => {
  const [diamondList, setDiamondList] = useState([]);

  const fetchDiamondList = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5130/api/Diamond/AllDiamonds",
        { headers: { "Content-Type": "text/plain" } }
      );

      if (response.data.succeeded === true) {
        setDiamondList(response.data.data.items);
        console.log(response.data.data);
      }
    } catch (error) {
      console.log("Error fetching: ", error);
    }
  };

  useEffect(() => {
    fetchDiamondList();
  }, []);

  console.log(diamondList);
  return (
    <body>
      <Preloader />
      <Header />
      <main class="main__content_wrapper">
        <BreadcrumpSection name="Products" />
        {/* <Collection /> */}
        <div class="shop__section section--padding pt-0">
          <div class="container">
            <div class="row">
              <div class="col-xl-3 col-lg-4 shop-col-width-lg-4">
                <ProductSidebar />
              </div>
              <ProductContent diamondList={diamondList} />
            </div>
          </div>
        </div>
      </main>
    </body>
  );
};

export default Shop;
