<template>
  <div class="mt-20 ml-20 mr-20">
    <div
      class="grid grid-cols-12 h-96 w-full mb-10 bg-[#ebeaeb7a] pl-10 rounded-sm"
    >
      <div class="flex flex-col justify-center col-span-6 h-full w-full">
        <p class="text-xl mb-3">New Arrival</p>
        <p class="text-4xl font-bold mb-3">
          Find the Best Fashion <br />
          Style for Women
        </p>
        <button
          class="px-4 py-2 bg-[#db4444] text-white text-bold w-40 rounded-lg"
        >
          shop now
        </button>
      </div>
      <div class="col-span-6">
        <img class="h-[400px] pb-10" src="@/assets/wblack.png" alt="no" />
      </div>
    </div>
    <div class="mb-5">
      <p class="text-4xl text-center">New Collection</p>
      <p class="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper
        congue eros
      </p>
    </div>
    <WomenFashion />
  </div>
</template>
<script>
import WomenFashion from "@/global/swiper/women-fashion.vue";
export default {
  name: "WomanFashion",
  components: { WomenFashion },
};
</script>
