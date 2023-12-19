<template>
  <swiper
    :slidesPerView="5"
    :spaceBetween="0"
    :navigation="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide
      ><CardView>
        <template v-slot:discount-percentage>-40%</template>
        <template v-slot:image
          ><img
            src="@/assets/game.png"
            alt="Product Image"
            class="product-image mt-5 ml-4 w-28"
        /></template>
        <template v-slot:product-name>HAVIT HV-G92 Gamepad</template>
        <template v-slot:product-price>$120</template>
        <template v-slot:privious-price>$160</template>
      </CardView></swiper-slide
    >
    <swiper-slide
      ><CardView>
        <template v-slot:discount-percentage>-35%</template>
        <template v-slot:image
          ><img
            src="@/assets/keyboard.png"
            alt="Product Image"
            class="product-image mt-5 -ml-1 w-32"
        /></template>
        <template v-slot:product-name>AK-900 Wired Keyboard</template>
        <template v-slot:product-price>$960</template>
        <template v-slot:privious-price>$1160</template>
      </CardView></swiper-slide
    >
    <swiper-slide
      ><CardView>
        <template v-slot:discount-percentage>-30%</template>
        <template v-slot:image
          ><img
            src="@/assets/desktop.png"
            alt="Product Image"
            class="product-image mt-5 ml-3 w-28"
        /></template>
        <template v-slot:product-name>IPS LCD Gaming Monitor</template>
        <template v-slot:product-price>$370</template>
        <template v-slot:privious-price>$400</template>
      </CardView></swiper-slide
    >
    <swiper-slide
      ><CardView>
        <template v-slot:discount-percentage>-25%</template>
        <template v-slot:image
          ><img
            src="@/assets/chair.png"
            alt="Product Image"
            class="product-image mt-2 ml-8 w-16"
        /></template>
        <template v-slot:product-name>S-Series Comfort Chair </template>
        <template v-slot:product-price>$375</template>
        <template v-slot:privious-price>$400</template>
      </CardView></swiper-slide
    >
    <swiper-slide
      ><CardView>
        <template v-slot:discount-percentage>20%</template>
        <template v-slot:image
          ><img
            src="@/assets/book-table.png"
            alt="Product Image"
            class="product-image mt-2 ml-8 w-20"
        /></template>
        <template v-slot:product-name>Small BookSelf</template>
        <template v-slot:product-price>$370</template>
        <template v-slot:privious-price>$400</template>
      </CardView></swiper-slide
    >
    <swiper-slide
      ><CardView>
        <template v-slot:discount-percentage>-40%</template>
        <template v-slot:image
          ><img
            src="@/assets/game.png"
            alt="Product Image"
            class="product-image mt-5 ml-4 w-28"
        /></template>
        <template v-slot:product-name>HAVIT HV-G92 Gamepad</template>
        <template v-slot:product-price>$120</template>
        <template v-slot:privious-price>$160</template>
      </CardView></swiper-slide
    >
    <swiper-slide
      ><CardView>
        <template v-slot:discount-percentage>-35%</template>
        <template v-slot:image
          ><img
            src="@/assets/keyboard.png"
            alt="Product Image"
            class="product-image mt-5 -ml-1 w-32"
        /></template>
        <template v-slot:product-name>AK-900 Wired Keyboard</template>
        <template v-slot:product-price>$960</template>
        <template v-slot:privious-price>$1160</template>
      </CardView></swiper-slide
    >
    <swiper-slide
      ><CardView>
        <template v-slot:discount-percentage>-30%</template>
        <template v-slot:image
          ><img
            src="@/assets/desktop.png"
            alt="Product Image"
            class="product-image mt-5 ml-3 w-28"
        /></template>
        <template v-slot:product-name>IPS LCD Gaming Monitor</template>
        <template v-slot:product-price>$370</template>
        <template v-slot:privious-price>$400</template>
      </CardView></swiper-slide
    >
    <swiper-slide
      ><CardView>
        <template v-slot:discount-percentage>-25%</template>
        <template v-slot:image
          ><img
            src="@/assets/chair.png"
            alt="Product Image"
            class="product-image mt-2 ml-8 w-16"
        /></template>
        <template v-slot:product-name>S-Series Comfort Chair </template>
        <template v-slot:product-price>$375</template>
        <template v-slot:privious-price>$400</template>
      </CardView></swiper-slide
    >
    <swiper-slide
      ><CardView>
        <template v-slot:discount-percentage>-20%</template>
        <template v-slot:image
          ><img
            src="@/assets/book-table.png"
            alt="Product Image"
            class="product-image mt-2 ml-8 w-20"
        /></template>
        <template v-slot:product-name>Small BookSelf</template>
        <template v-slot:product-price>$380</template>
        <template v-slot:privious-price>$400</template>
      </CardView></swiper-slide
    >
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "@/style/style.css";

// import required componets
import CardView from "@/global/card/card.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    CardView,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>
