<template>
  <div class="flex flex-row h-[230px] bg-black w-[99%] mt-10">
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
    <div class="flex-initial w-[317px] ml-30 pl-10 pt-6">
      <img
        class="transition-transform duration-500 ease-in-out hover:scale-125"
        src="@/assets/iphone.png"
        alt="no"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeMenu.vue",
};
</script>
