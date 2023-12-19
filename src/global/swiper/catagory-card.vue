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
      ><BoxCard
        ><template v-slot:icon><i class="bx bx-mobile-alt"></i></template>
        <template v-slot:product-name>Phone</template></BoxCard
      ></swiper-slide
    >
    <swiper-slide
      ><BoxCard
        ><template v-slot:icon><i class="bx bx-desktop"></i></template>
        <template v-slot:product-name>Computer</template></BoxCard
      ></swiper-slide
    >
    <swiper-slide
      ><BoxCard
        ><template v-slot:icon><i class="bx bxs-watch-alt"></i></template>
        <template v-slot:product-name>SmartWatch</template></BoxCard
      ></swiper-slide
    >
    <swiper-slide
      ><BoxCard
        ><template v-slot:icon><i class="bx bx-camera"></i></template>
        <template v-slot:product-name>Camera </template></BoxCard
      ></swiper-slide
    >
    <swiper-slide
      ><BoxCard
        ><template v-slot:icon><i class="bx bx-headphone"></i></template>
        <template v-slot:product-name>HeadPhones </template></BoxCard
      ></swiper-slide
    ><swiper-slide
      ><BoxCard
        ><template v-slot:icon><i class="bx bx-game"></i></template>
        <template v-slot:product-name>Gaming </template></BoxCard
      ></swiper-slide
    >
    <swiper-slide
      ><BoxCard
        ><template v-slot:icon><i class="bx bx-mobile-alt"></i></template>
        <template v-slot:product-name>Phone</template></BoxCard
      ></swiper-slide
    >
    <swiper-slide
      ><BoxCard
        ><template v-slot:icon><i class="bx bx-desktop"></i></template>
        <template v-slot:product-name>Computer</template></BoxCard
      ></swiper-slide
    >
    <swiper-slide
      ><BoxCard
        ><template v-slot:icon><i class="bx bxs-watch-alt"></i></template>
        <template v-slot:product-name>SmartWatch</template></BoxCard
      ></swiper-slide
    >
    <swiper-slide
      ><BoxCard
        ><template v-slot:icon><i class="bx bx-camera"></i></template>
        <template v-slot:product-name>Camera </template></BoxCard
      ></swiper-slide
    >
    <swiper-slide
      ><BoxCard
        ><template v-slot:icon><i class="bx bx-headphone"></i></template>
        <template v-slot:product-name>HeadPhones </template></BoxCard
      ></swiper-slide
    ><swiper-slide
      ><BoxCard
        ><template v-slot:icon><i class="bx bx-game"></i></template>
        <template v-slot:product-name>Gaming </template></BoxCard
      ></swiper-slide
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
import BoxCard from "@/global/card/box-card.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    BoxCard,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>
