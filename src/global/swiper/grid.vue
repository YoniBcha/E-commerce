<template>
  <swiper
    :slidesPerView="5"
    :grid="{
      rows: 3,
    }"
    :spaceBetween="0"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
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
        <template v-slot:product-price>$160</template>
        <template v-slot:privious-price>$400</template>
      </CardView></swiper-slide
    >
    <swiper-slide
      ><CardView>
        <template v-slot:discount-percentage>-40%</template>
        <template v-slot:image
          ><img
            src="@/assets/jacket.png"
            alt="Product Image"
            class="product-image w-28 mt-1 ml-2"
        /></template>
        <template v-slot:product-name>The north coat</template>
        <template v-slot:product-price>$120</template>
        <template v-slot:privious-price>$160</template>
      </CardView></swiper-slide
    >
    <swiper-slide
      ><CardView>
        <template v-slot:discount-percentage>-35%</template>
        <template v-slot:image
          ><img
            src="@/assets/bag.png"
            alt="Product Image"
            class="product-image mt-3 ml-2 w-32"
        /></template>
        <template v-slot:product-name>Gucci duffle bag</template>
        <template v-slot:product-price>$960</template>
        <template v-slot:privious-price>$1160</template>
      </CardView></swiper-slide
    >
    <swiper-slide
      ><CardView>
        <template v-slot:discount-percentage>-30%</template>
        <template v-slot:image
          ><img
            src="@/assets/amp.png"
            alt="Product Image"
            class="product-image mt-7 ml-3 w-36"
        /></template>
        <template v-slot:product-name>RGB liquid CPU Cooler</template>
        <template v-slot:product-price>$370</template>
        <template v-slot:privious-price>$400</template>
      </CardView></swiper-slide
    >
    <swiper-slide
      ><CardView>
        <template v-slot:discount-percentage>-25%</template>
        <template v-slot:image
          ><img
            src="@/assets/fog.png"
            alt="Product Image"
            class="product-image mt-4 ml-4 w-24"
        /></template>
        <template v-slot:product-name>Curology Product Set</template>
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
// import required modules
import { Swiper, SwiperSlide } from "swiper/vue";
import { Grid, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "@/style/style.css";

// Import components
import CardView from "@/global/card/card.vue";

export default {
  name: "AboutPage",
  components: {
    Swiper,
    SwiperSlide,
    CardView,
  },
  setup() {
    return {
      modules: [Grid, Pagination],
    };
  },
};
</script>
