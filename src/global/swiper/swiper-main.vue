<template>
  <swiper
    :autoplay="{
      delay: 4000,
      disableOnInteraction: false,
    }"
    :pagination="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide><HomeMenu /></swiper-slide>
    <swiper-slide><HomeMenu /></swiper-slide
    ><swiper-slide><HomeMenu /></swiper-slide>
    <swiper-slide><HomeMenu /></swiper-slide
    ><swiper-slide><HomeMenu /></swiper-slide>
    <swiper-slide><HomeMenu /></swiper-slide
    ><swiper-slide><HomeMenu /></swiper-slide>
    <swiper-slide><HomeMenu /></swiper-slide
    ><swiper-slide><HomeMenu /></swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "@/style/style.css";

// import componets
import HomeMenu from "@/global/home-menu.vue";

export default {
  name: "SwiperMain",
  components: {
    Swiper,
    SwiperSlide,
    HomeMenu,
  },
  setup() {
    return {
      modules: [Pagination, Autoplay],
    };
  },
};
</script>
