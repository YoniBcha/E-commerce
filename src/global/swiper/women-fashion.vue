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
    <swiper-slide v-for="women_fashon in women_fashons" :key="women_fashon.id">
      <CardView>
        <template v-slot:discount-percentage>
          -{{ women_fashon.discount_rate }}%
        </template>
        <template v-slot:image>
          <img
            :src="women_fashon.image_url"
            alt="Product Image"
            class="w-[80%] !h-36 object-contain my-auto mx-auto relative mt-2"
          />
        </template>
        <template v-slot:product-name>{{ women_fashon.product_name }}</template>
        <template v-slot:product-price>
          ${{ women_fashon.product_price }}
        </template>
        <template v-slot:previous-price>
          <span>${{ women_fashon.product_price }}</span>
        </template>
      </CardView>
    </swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "@/style/style.css";

// import required componets
import CardView from "@/global/card/sidebar-card.vue";
import { women_fashons } from "@/global/data/women_fashon";

export default {
  components: {
    Swiper,
    SwiperSlide,
    CardView,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
      women_fashons: women_fashons,
    };
  },
};
</script>
