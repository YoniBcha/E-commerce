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
    <swiper-slide v-for="flashSeal in flash_sales" :key="flashSeal.id">
      <CardView>
        <template v-slot:discount-percentage>
          -{{ flashSeal.discount_rate }}%
        </template>
        <template v-slot:image>
          <img
            :src="flashSeal.image_url"
            alt="Product Image"
            class="w-[80%] !h-36 object-contain my-auto mx-auto relative mt-2"
          />
        </template>
        <template v-slot:product-name>{{ flashSeal.product_name }}</template>
        <template v-slot:product-price>
          ${{ flashSeal.product_price }}
        </template>
        <template v-slot:previous-price>
          <span>${{ flashSeal.product_price }}</span>
        </template>
      </CardView>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";
import { flash_sales } from "@/global/data/flash-sale";

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
      flash_sales: flash_sales,
    };
  },
};
</script>
