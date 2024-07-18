import { SwiperSlide } from "swiper/react";

export const Accessory = (item) => {

    return (
            <div class="shop__collection--card text-center">
                <a class="shop__collection--link" href="shop.html">
                    <img class="shop__collection--img" src="assets/img/collection/collection10.webp" alt="icon-img"/>
                    <h3 class="shop__collection--title mb-0">{item.name}</h3>
                </a>
            </div>
    );
}

export default Accessory;