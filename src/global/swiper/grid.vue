<template>
  <swiper
    :slides-per-view="slidesPerView"
    :grid="gridConfig"
    :space-between="0"
    :pagination="{ clickable: true }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="grid_data in grid_datas" :key="grid_data.id">
      <CardView>
        <template v-slot:discount-percentage>
          -{{ grid_data.discount_rate }}%
        </template>
        <template v-slot:image>
          <img
            :src="grid_data.image_url"
            alt="Product Image"
            class="w-[80%] !h-36 object-contain my-auto mx-auto relative mt-2"
          />
        </template>
        <template v-slot:product-name>{{ grid_data.product_name }}</template>
        <template v-slot:product-price>
          ${{ grid_data.product_price }}
        </template>
        <template v-slot:previous-price>
          <span>${{ grid_data.product_price }}</span>
        </template>
      </CardView></swiper-slide
    >
  </swiper>
</template>
<script>
// import required modules
import { Swiper, SwiperSlide } from "swiper/vue";
import { Grid, Pagination } from "swiper/modules";
import { grid_datas } from "@/global/data/grid";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "@/style/style.css";

// Import components
import CardView from "@/global/card/card.vue";

export default {
  name: "GridView",
  components: {
    Swiper,
    SwiperSlide,
    CardView,
  },
  data() {
    return {
      grid_datas: grid_datas,
      modules: [Grid, Pagination],
      slidesPerView: 5,
      gridConfig: {
        rows: 3,
      },
    };
  },
  methods: {
    initSwiper() {
      this.updateSwiperConfig();
      this.$nextTick(() => {
        new Swiper(".mySwiper", {
          slidesPerView: this.slidesPerView,
          grid: this.gridConfig,
          spaceBetween: 0,
          pagination: {
            clickable: true,
          },
          modules: [Grid, Pagination],
          breakpoints: {
            320: {
              slidesPerView: 1,
              grid: {
                rows: 1,
              },
            },
            480: {
              slidesPerView: 3,
              grid: {
                rows: 2,
              },
            },
            768: {
              slidesPerView: 5,
              grid: {
                rows: 4,
              },
            },
            1024: {
              slidesPerView: 6,
              grid: {
                rows: 5,
              },
            },
            1280: {
              slidesPerView: 8,
              grid: {
                rows: 5,
              },
            },
          },
        });
      });
    },
    updateSwiperConfig() {
      // Modify the slidesPerView and gridConfig based on your requirements
      if (window.innerWidth < 320) {
        this.slidesPerView = 1;
        this.gridConfig.rows = 1;
      } else if (window.innerWidth < 480) {
        this.slidesPerView = 3;
        this.gridConfig.rows = 2;
      } else if (window.innerWidth < 768) {
        this.slidesPerView = 5;
        this.gridConfig.rows = 4;
      } else if (window.innerWidth < 1024) {
        this.slidesPerView = 6;
        this.gridConfig.rows = 5;
      } else if (window.innerWidth < 1280) {
        this.slidesPerView = 8;
        this.gridConfig.rows = 5;
      } else {
        this.slidesPerView = 5;
        this.gridConfig.rows = 3;
      }
    },
  },
  mounted() {
    this.initSwiper();
    window.addEventListener("resize", this.updateSwiperConfig);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateSwiperConfig);
  },
};
</script>
