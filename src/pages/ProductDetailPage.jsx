import { useParams } from "react-router-dom";
import Header from "../components/Layout/Header/Header";
import Preloader from "../components/Layout/Preloader";
import ProductDetail from "../components/Product/ProductDetail";
import "../assets/css/style.css"

export const ProductDetailPage = () => {
  const {diamondId} = useParams();
  return (
    <body>
      <Preloader/>
      <Header/>
      <main class="main__content_wrapper">
        <ProductDetail id={diamondId}/>
      </main>
    </body>
  );
}

export default ProductDetailPage;