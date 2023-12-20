<template>
  <div class="ml-5 mr-20">
    <SwiperMain />
  </div>
  <div class="mr-20 ml-20 mt-10">
    <!-- this part is time and flash seal part -->
    <div class="grid grid-cols-5 mt-2 items-center">
      <div class="flex">
        <div class="bg-red-500 w-3 h-16"></div>
        <div class="mt-4 ml-5 text-2xl text-red-700">Today’s</div>
      </div>
      <div class="cols-span-2 col-start-1 cold-end-2 text-4xl font-bold">
        Flash Sales
      </div>
      <div class="col-span-3 col-start-3 col-end-5">
        <TimeTable />
      </div>
    </div>

    <!-- this part is flashseal card show -->
    <FlashSeal />
    <div class="flex justify-center w-full mb-10">
      <button
        class="text-white px-2 py-2 text-xl rounded-sm bg-[#db4444e0] hover:bg-[#db4444] font-semibold transition duration-300 hover:scale-110"
      >
        View All Products
      </button>
    </div>
    <hr class="mb-[50px] w-full border" />

    <!-- Categories of items and box-card section -->
    <div class="mb-[60px]">
      <div class="flex">
        <div class="bg-red-500 w-3 h-16"></div>
        <div class="mt-4 ml-5 text-2xl text-red-700">Categories</div>
      </div>
      <div class="text-3xl mt-5 font-bold">Browse By Category</div>
      <CatagoryCard />
      <div class="flex justify-center w-full mb-[50px]">
        <button
          class="text-white px-2 py-2 text-xl rounded-sm bg-[#db4444e0] hover:bg-[#db4444] font-semibold transition duration-300 hover:scale-110"
        >
          View All Products
        </button>
      </div>
      <hr class="w-full border" />
    </div>

    <!-- Best Selling Products -->
    <div class="">
      <div class="flex justify-between">
        <div class="">
          <div class="bg-red-500 w-3 h-16"></div>
          <div class="-mt-12 ml-5 text-2xl text-red-700">This Month</div>
        </div>
        <div class="pt-10">
          <button
            class="text-white px-2 py-1 text-lg rounded-sm bg-[#db4444e0] hover:bg-[#db4444] font-semibold transition duration-300 hover:scale-110"
          >
            View all
          </button>
        </div>
      </div>
      <div class="text-3xl font-bold">Best Selling Products</div>
      <BestSeal />
    </div>

    <div
      class="grid grid-cols-4 gap-4 bg-black h-76 w-full text-white px-14 py-10 mb-10 rounded-sm"
    >
      <div class="col-span-2">
        <div class="text-[#00cf53] mb-1 text-xl">Categories</div>
        <div class="text-4xl font-bold mb-2">
          <p>Enhance Your Music Experience</p>
        </div>
        <div class="flex">
          <div
            class="bg-white rounded-full w-16 h-16 text-black pl-3 font-bold ml-1"
          >
            <span class="pl-2">23</span> <span class="text-sm"> Days</span>
          </div>
          <div
            class="bg-white rounded-full w-16 h-16 text-black pl-3 font-bold ml-1"
          >
            <span class="pl-2">05</span> <span class="text-sm"> Hours</span>
          </div>
          <div
            class="bg-white rounded-full w-16 h-16 text-black pl-3 font-bold ml-1"
          >
            <span class="pl-2">59</span>
            <span class="text-sm pr-1"> Minute</span>
          </div>
          <div
            class="bg-white rounded-full w-16 h-16 text-black pl-3 font-bold ml-1 mb-4"
          >
            <span class="pl-3">35</span>
            <span class="text-sm pr-1"> Second</span>
          </div>
        </div>
        <button
          class="text-white font-semibold ml-1 bg-[#00ff66] px-5 py-2 rounded-sm"
        >
          Buy Now!
        </button>
      </div>
      <div class="col-span-2 pl-6">
        <img src="@/assets/radio.png" class="w-[400px]" alt="no-img" />
      </div>
    </div>

    <div class="">
      <div class="flex">
        <div class="bg-red-500 w-3 h-16"></div>
        <div class="mt-4 ml-5 text-2xl text-red-700">Our Products</div>
      </div>
      <div class="text-3xl mt-7 font-bold">Explore Our Products</div>
      <div class="h-[1064px] w-full">
        <GridCard />
      </div>
      <div class="flex justify-center w-full mb-[50px]">
        <button
          class="text-white px-2 py-2 text-xl rounded-sm bg-[#db4444e0] hover:bg-[#db4444] font-semibold transition duration-300 hover:scale-110"
        >
          View All Products
        </button>
      </div>
    </div>

    <div class="">
      <div class="flex">
        <div class="bg-red-500 w-3 h-16"></div>
        <div class="mt-4 ml-5 text-2xl text-red-700">Featured</div>
      </div>
      <div class="text-3xl mt-7 font-bold">New Arrival</div>
      <div class="grid grid-rows-4 grid-flow-col grid-cols-4 mt-10">
        <div
          class="row-span-4 col-span-2 row-satrt-1 row-end-4 col-start-1 col-end-2 bg-black h-[350px]"
        >
          <img src="@/assets/system.png" width="300" class="pt-10" alt="" />
          <div class="-mt-36 p-5 text-white">
            <p class="text-2xl font-bold mb-2">PlayStation 5</p>
            <p>Black and White version of the PS5 coming out on sale.</p>
            <p class="pt-2 underline font-semibold">Shop Now</p>
          </div>
        </div>

        <div
          class="flex flex-row row-span-2 col-span-2 row-start-1 row-end-3 col-start-2 col-end-4 h-[168px] bg-[#0d0d0d] ml-5"
        >
          <div class="p-7 text-white">
            <p class="text-2xl font-bold mb-2">Women’s Collections</p>
            <p>Featured woman collections that give you another vibe.</p>
            <p class="pt-2 underline font-semibold">Shop Now</p>
          </div>
          <div class="mt-5">
            <img src="@/assets/women.png" class="" width="300" alt="" />
          </div>
        </div>

        <div
          class="row-span-2 row-start-2 row-end-4 col-span-2 col-start-2 col-end-3 ml-5 mt-14 bg-black"
        >
          <img src="@/assets/speaker.png" class="ml-20" width="150" alt="" />
          <div class="-mt-28 pl-3 text-white">
            <p class="text-2xl font-bold mb-2">Speakers</p>
            <p>Amazon wireless speakers</p>
            <p class="pt-1 underline font-semibold">Shop Now</p>
          </div>
        </div>
        <div
          class="row-span-2 row-start-2 row-end-4 col-span-2 col-start-3 col-end-4 ml-5 mt-14 bg-black"
        >
          <img src="@/assets/shto.png" class="ml-20 mt-2" width="150" alt="" />
          <div class="-mt-20 pl-3 text-white">
            <p class="text-2xl font-bold mb-2">Perfume</p>
            <p>GUCCI INTENSE OUD EDP</p>
            <p class="pt-1 underline font-semibold">Shop Now</p>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-4 mb-20 ml-8">
      <div class="">
        <div class="ml-24">
          <i class="bx bxs-car text-4xl border-2 rounded-full p-3"></i>
        </div>
        <div class="text-xl font-bold">FREE AND FAST DELIVERY</div>
        <div class="">Free delivery for all orders over $140</div>
      </div>
      <div class="">
        <div class="ml-20">
          <i class="bx bx-headphone text-4xl border-2 rounded-full p-3"></i>
        </div>
        <div class="text-xl font-bold">24/7 CUSTOMER SERVICE</div>
        <div class="">Friendly 24/7 customer support</div>
      </div>
      <div class="">
        <div class="ml-20">
          <i class="bx bxs-shield-minus text-4xl border-2 rounded-full p-3"></i>
        </div>
        <div class="text-xl font-bold">MONEY BACK GUARANTEE</div>
        <div class="">We reurn money within 30 days</div>
      </div>
    </div>
  </div>
</template>
S-Series Comfort Chair
<script>
// import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";
import { Grid } from "swiper/modules";

// import wiper css
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@/style/style.css";

// import custom css file

// import componts
import SwiperMain from "@/global/swiper/swiper-main.vue";
import CatagoryCard from "@/global/swiper/catagory-card.vue";
import FlashSeal from "@/global/swiper/flash-seal.vue";
import BestSeal from "@/global/swiper/best-seal.vue";
import GridCard from "@/global/swiper/grid.vue";
import TimeTable from "@/global/time-table/time.vue";

export default {
  name: "HomePage",
  components: {
    SwiperMain,
    FlashSeal,
    BestSeal,
    CatagoryCard,
    TimeTable,
    GridCard,
    // SwiperSlide,
    // BestCellCardView,
  },
  data() {
    return {
      modules: [Pagination, Navigation],
      modulese: [Grid, Pagination],
      modul: [Pagination],
    };
  },
};
</script>

<style scoped></style>
