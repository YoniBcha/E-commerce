<template>
  <div class="flex flex-row h-[230px] ml-10 mt-[100px] mr-[90px] bg-black">
    <div class="basis-1/4 text-white ml-5">
      <div class="flex mt-8 mx-5">
        <i class="bx bxl-apple text-4xl"></i>
        <p class="pt-2 pl-2">iphone 14 Series</p>
      </div>
      <div class="mx-5 pl-2 pt-3 text-4xl font-bold">Up to 10% off Voucher</div>
      <div class="mx-7 mt-3 font-semi underline">
        <span class="-mt-3">shop Now </span
        ><span><i class="bx bx-right-arrow-alt ml-3"></i></span>
      </div>
    </div>
    <div class="flex-initial w-96 ml-30 pl-10 pt-6">
      <img
        class="transition-transform duration-500 ease-in-out hover:scale-125"
        src="@/assets/iphone.jpg"
        alt="no"
      />
    </div>
    <div class="basis-1/2"></div>
  </div>
  <div class="ml-20 mt-20">
    <div class="flex">
      <div class="bg-red-500 w-3 h-16"></div>
      <div class="mt-4 ml-5 text-2xl text-red-700">Today’s</div>
    </div>
    <!-- this part is time and flash seal part -->
    <div class="flex">
      <div class="mt-6 text-4xl font-bold">Flash Sales</div>
      <div class="flex">
        <div class="ml-40">
          <div class="flex justify-between w-[250px]">
            <span>Days</span>
            <span>Hours</span>
            <span>Minutes</span>
            <span>Seconds</span>
          </div>
          <div class="pl-6 text-4xl">{{ countdown }}</div>
        </div>
      </div>
    </div>

    <!-- input part of the start time -->
    <div class="form flex mt-8">
      <div>
        <label>Days:</label>
        <input type="number" v-model="days" min="0" @input="resetCountdown" />
      </div>
      <div>
        <label>Hours:</label>
        <input
          type="number"
          v-model="hours"
          min="0"
          max="23"
          @input="resetCountdown"
        />
      </div>
      <div>
        <label>Minutes:</label>
        <input
          type="number"
          v-model="minutes"
          min="0"
          max="59"
          @input="resetCountdown"
        />
      </div>
      <div>
        <label>Seconds:</label>
        <input
          type="number"
          v-model="seconds"
          min="0"
          max="59"
          @input="resetCountdown"
        />
      </div>
      <button class="-mt-1" @click="startCountdown">Start Countdown</button>
    </div>

    <!-- this part is card slide show -->
    <div class="">
      <swiper
        :slidesPerView="5"
        :spaceBetween="1"
        :loop="true"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide><CardView /></swiper-slide>
        <swiper-slide><CardView /></swiper-slide>
        <swiper-slide><CardView /></swiper-slide>
        <swiper-slide><CardView /></swiper-slide>
        <swiper-slide><CardView /></swiper-slide>
        <swiper-slide><CardView /></swiper-slide>
        <swiper-slide><CardView /></swiper-slide>
        <swiper-slide><CardView /></swiper-slide>
        <swiper-slide><CardView /></swiper-slide>
        <swiper-slide><CardView /></swiper-slide>
        <swiper-slide><CardView /></swiper-slide>
        <swiper-slide><CardView /> </swiper-slide>
      </swiper>
    </div>
    <div class="flex justify-center w-full mb-[50px]">
      <button class="text-white px-2 py-2 text-xl rounded-sm bg-[#db4444]">
        View All Products
      </button>
    </div>
    <hr class="mb-[50px] w-full borde-2 border-black" />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@/style/style.css";

import "@/style/navbar/home.css";

import CardView from "@/global/card.vue";

export default {
  name: "HomePage",
  components: { CardView, Swiper, SwiperSlide },
  setup() {
    // Create a ref for the countdown
    const countdown = ref("");
    // Create refs for the duration values
    const days = ref(0);
    const hours = ref(0);
    const minutes = ref(0);
    const seconds = ref(0);
    // Create a ref for the interval ID
    const intervalId = ref(null);

    // Function to update the countdown
    const updateCountdown = () => {
      if (
        days.value === 0 &&
        hours.value === 0 &&
        minutes.value === 0 &&
        seconds.value === 0
      ) {
        countdown.value = "  0 :  0 : 0 : 0 ";
        clearInterval(intervalId.value);
        return;
      }

      countdown.value = `${days.value}: ${hours.value} : ${minutes.value} : ${seconds.value}`;

      // Decrease the duration values
      if (seconds.value > 0) {
        seconds.value--;
      } else if (minutes.value > 0) {
        minutes.value--;
        seconds.value = 59;
      } else if (hours.value > 0) {
        hours.value--;
        minutes.value = 59;
        seconds.value = 59;
      } else if (days.value > 0) {
        days.value--;
        hours.value = 23;
        minutes.value = 59;
        seconds.value = 59;
      }
    };

    // Function to start the countdown
    const startCountdown = () => {
      clearInterval(intervalId.value);
      intervalId.value = setInterval(updateCountdown, 1000);
    };

    // Function to reset the countdown
    const resetCountdown = () => {
      clearInterval(intervalId.value);
      countdown.value = "";
    };

    // Call the updateCountdown function immediately when the component is mounted
    onMounted(() => {
      updateCountdown();
    });

    return {
      modules: [Pagination, Navigation],

      countdown,
      days,
      hours,
      minutes,
      seconds,
      startCountdown,
      resetCountdown,
    };
  },
};
</script>

<style scoped></style>
