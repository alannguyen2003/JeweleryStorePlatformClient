import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header/Header";
import BreadcrumpSection from "../components/Layout/PageTitle/BreadcrumpSection";
import Preloader from "../components/Layout/Preloader";
import UserDetail from "../components/Layout/User/UserDetail";

export const UserPage = () => {
  return (
    <body>
      <Preloader/>
      <Header/>
      <main class="main__content_wrapper">
        <BreadcrumpSection name="My Account"/>
        <UserDetail/>
      </main>
      <Footer/>
    </body>
  );
}

export default UserPage;