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
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "@/style/style.css";

// import required componets
import CardView from "@/global/card/card.vue";
import { flash_sales } from "@/global/data/flash-sale";

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
