import Header from "../components/Layout/Header/Header";
import Preloader from "../components/Layout/Preloader";
import BreadcrumpSection from "../components/Layout/PageTitle/BreadcrumpSection";
import LoginScreen from "../components/Layout/Authentication/LoginScreen";
import SignUpScreen from "../components/Layout/Authentication/SignUpScreen";
import Footer from "../components/Layout/Footer/Footer";
export const Login = () => {

    function login(formData) {
        
    }
    return (
        <body>
            <Preloader/>
            <Header/>
            <BreadcrumpSection name="Login"/>
            <div class="login__section section--padding">
                <div class="container">
                    <div class="login__section--inner">
                        <div class="row row-cols-md-2 row-cols-1">
                            <LoginScreen/>
                            <SignUpScreen/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </body>
    );
}

export default Login;