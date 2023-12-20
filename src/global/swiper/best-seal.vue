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
    <swiper-slide v-for="best_sale in best_sales" :key="best_sale.id">
      <CardView>
        <template v-slot:discount-percentage>
          -{{ best_sale.discount_rate }}%
        </template>
        <template v-slot:image>
          <img
            :src="best_sale.image_url"
            alt="Product Image"
            class="w-[80%] !h-36 object-contain my-auto mx-auto relative mt-2"
          />
        </template>
        <template v-slot:product-name>{{ best_sale.product_name }}</template>
        <template v-slot:product-price>
          ${{ best_sale.product_price }}
        </template>
        <template v-slot:previous-price>
          <span>${{ best_sale.product_price }}</span>
        </template>
      </CardView>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";
import { best_sales } from "@/global/data/best-sale";

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
      best_sales: best_sales,
    };
  },
};
</script>
