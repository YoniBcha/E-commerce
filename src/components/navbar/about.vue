<template>
  <swiper
    :slidesPerView="5"
    :grid="{
      rows: 4,
    }"
    :spaceBetween="30"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
    <swiper-slide>Slide 1</swiper-slide> <swiper-slide>Slide 2</swiper-slide
    ><swiper-slide>Slide 3</swiper-slide> <swiper-slide>Slide 4</swiper-slide
    ><swiper-slide>Slide 5</swiper-slide> <swiper-slide>Slide 6</swiper-slide
    ><swiper-slide>Slide 7</swiper-slide> <swiper-slide>Slide 8</swiper-slide
    ><swiper-slide>Slide 9</swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/grid";
import "swiper/css/pagination";

import "@/style/style.css";

// import required modules
import { Grid, Pagination } from "swiper/modules";

export default {
  name: "AboutPage",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Grid, Pagination],
    };
  },
};
</script>
