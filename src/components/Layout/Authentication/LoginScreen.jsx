import { useState } from "react";
import { Link } from "react-router-dom";


export const LoginScreen = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailEvent = (e) => {
        e.preventDefault();
        setEmail(e.target.value)
        console.log(email + " " + password)
    }

    const handlePasswordEvent = (e) => {
        e.preventDefault();
        setPassword(e.target.value)
    }

    const handleSubmitEvent = (e) => {
        e.preventDefault();
        console.log(email + " " + password);
    }

    return ( 
        <div class="col">
                                <form class="account__login" onSubmit={handleSubmitEvent}>
                                    <div class="account__login--header mb-25">
                                        <h2 class="account__login--header__title mb-15">Login</h2>
                                        <p class="account__login--header__desc">Login if you area a returning customer.</p>
                                    </div>
                                    <div class="account__login--inner">
                                        <label>
                                            <input onChange={handleEmailEvent} name="email" value={email} class="account__login--input" placeholder="Email Addres" type="email"/>
                                        </label>
                                        <label>
                                            <input onChange={handlePasswordEvent} name="password" value={password} class="account__login--input" placeholder="Password" type="password"/>
                                        </label>
                                        <div class="account__login--remember__forgot mb-15 d-flex justify-content-between align-items-center">
                                            <div class="account__login--remember position__relative">
                                                <input class="checkout__checkbox--input" id="check1" type="checkbox"/>
                                                <span class="checkout__checkbox--checkmark"></span>
                                                <label class="checkout__checkbox--label login__remember--label" for="check1">
                                                    Remember me</label>
                                            </div>
                                            <button class="account__login--forgot">Forgot Your Password?</button>
                                        </div>
                                        <button class="account__login--btn primary__btn" type="submit">Login</button>
                                        <div class="account__login--divide">
                                            <span class="account__login--divide__text">OR</span>
                                        </div>
                                        <div class="account__social d-flex justify-content-center mb-15">
                                            <Link class="account__social--link facebook" target="_blank" href="#">Facebook</Link>
                                            <Link class="account__social--link google" target="_blank" href="#">Google</Link>
                                            <Link class="account__social--link twitter" target="_blank" href="#">Twitter</Link>
                                        </div>
                                        <p class="account__login--signup__text">Don,t Have an Account? <button type="submit">Sign up now</button></p>
                                    </div>
                                </form>
                            </div>
    );
}

export default LoginScreen;