<template>
  <div class="ml-20 mb-20 mt-20 mr-16">
    <h1 class="text-2xl font-bold mb-5">About</h1>
    <div class="grid grid-cols-12 mb-20">
      <div class="col-span-6 p-28">
        <h1 class="text-2xl font-semibold mb-2">Our Story</h1>
        <p class="mb-2">
          Launced in 2015, Exclusive is South Asia’s premier online shopping
          makterplace with an active presense in Bangladesh. Supported by wide
          range of tailored marketing, data and service solutions, Exclusive has
          10,500 sallers and 300 brands and serves 3 millioons customers across
          the region.
        </p>
        <p class="">
          Exclusive has more than 1 Million products to offer, growing at a very
          fast. Exclusive offers a diverse assotment in categories ranging from
          consumer.
        </p>
      </div>
      <div
        class="col-span-6 bg-[url('@/assets/about.png')] bg-center bg-cover"
      ></div>
    </div>

    <div class="flex justify-around mb-20">
      <div
        class="flex flex-col items-center justify-center transition duration-150 ease hover:cursor-pointer hover:bg-[#db4444] hover:text-white border-2 h-44 w-44"
      >
        <div class="text-4xl mb-2">
          <i
            class="bx bx-building-house border-2 p-2 rounded-full bg-black text-white hover:bg-white hover:text-black"
          ></i>
        </div>
        <div class="text-lg font-semibold">10.5k</div>
        <div class="text-sm">Sallers active our site</div>
      </div>

      <div
        class="flex flex-col items-center justify-center transition duration-150 ease hover:cursor-pointer hover:bg-[#db4444] hover:text-white border-2 h-44 w-44"
      >
        <div class="text-4xl mb-2">
          <i
            class="bx bx-dollar-circle border-2 p-2 rounded-full bg-black text-white hover:bg-white hover:text-black"
          ></i>
        </div>
        <div class="text-lg font-semibold">33k</div>
        <div class="text-sm">Mopnthly Produduct Sale</div>
      </div>
      <div
        class="flex flex-col items-center justify-center transition duration-150 ease hover:cursor-pointer hover:bg-[#db4444] hover:text-white border-2 h-44 w-44"
      >
        <div class="text-4xl mb-2">
          <i
            class="bx bx-shopping-bag border-2 p-2 rounded-full bg-black text-white hover:bg-white hover:text-black"
          ></i>
        </div>
        <div class="text-lg font-semibold">45.5k</div>
        <div class="text-sm">Customer active in our site</div>
      </div>
      <div
        class="flex flex-col items-center justify-center transition duration-150 ease hover:cursor-pointer hover:bg-[#db4444] hover:text-white border-2 h-44 w-44"
      >
        <div class="text-4xl mb-2">
          <i
            class="bx bxs-dollar-circle border-2 p-2 rounded-full bg-black text-white hover:bg-white hover:text-black"
          ></i>
        </div>
        <div class="text-lg font-semibold">25k</div>
        <div class="text-sm">Anual gross sale in our site</div>
      </div>
    </div>

    <div class="grid grid-cols-12 gap-4 h-96 mb-40">
      <div class="col-span-4">
        <img src="@/assets/boy.png" class="flex justify-center" />
        <h1 class="text-2xl font-bold mt-2 ml-5">Tom Cruise</h1>
        <p class="ml-5">Founder & Chairman</p>
        <div class="flex ml-5">
          <span><i class="bx bxl-twitter text-2xl"></i></span>
          <span><i class="bx bxl-instagram ml-2 text-2xl"></i></span>
          <span><i class="bx bxl-linkedin ml-2 text-2xl"></i></span>
        </div>
      </div>
      <div class="col-span-4">
        <img src="@/assets/girl1.png" class="flex justify-center" />
        <h1 class="text-2xl font-bold mt-2 ml-5">Emma Watson</h1>
        <p class="ml-5">Managing Director</p>
        <div class="flex ml-5">
          <span><i class="bx bxl-twitter text-2xl"></i></span>
          <span><i class="bx bxl-instagram ml-2 text-2xl"></i></span>
          <span><i class="bx bxl-linkedin ml-2 text-2xl"></i></span>
        </div>
      </div>
      <div class="col-span-4">
        <img src="@/assets/boss.png" class="flex justify-center" />
        <h1 class="text-2xl font-bold mt-2 ml-5">Will Smith</h1>
        <p class="ml-5">Product Designer</p>
        <div class="flex ml-5">
          <span><i class="bx bxl-twitter text-2xl"></i></span>
          <span><i class="bx bxl-instagram ml-2 text-2xl"></i></span>
          <span><i class="bx bxl-linkedin ml-2 text-2xl"></i></span>
        </div>
      </div>
    </div>

    <hr class="border mb-10" />
    <div class="grid grid-cols-3 gap-4 mb-20 w-[1000px] mx-auto">
      <div class="mx-auto text-center">
        <div class="">
          <i
            class="transition duration-300 bx bxs-car text-4xl border-2 rounded-full p-3 hover:bg-[#db4444] hover:text-white hover:cursor-pointer"
          ></i>
        </div>
        <div class="text-xl font-bold">FREE AND FAST DELIVERY</div>
        <div class="">Free delivery for all orders over $140</div>
      </div>
      <div class="mx-auto text-center">
        <div class="">
          <i
            class="transition duration-300 bx bx-headphone text-4xl border-2 rounded-full p-3 hover:bg-[#db4444] hover:text-white hover:cursor-pointer"
          ></i>
        </div>
        <div class="text-xl font-bold">24/7 CUSTOMER SERVICE</div>
        <div class="">Friendly 24/7 customer support</div>
      </div>
      <div class="mx-auto text-center">
        <div class="">
          <i
            class="transition duration-300 bx bxs-shield-minus text-4xl border-2 rounded-full p-3 hover:bg-[#db4444] hover:text-white hover:cursor-pointer"
          ></i>
        </div>
        <div class="text-xl font-bold">MONEY BACK GUARANTEE</div>
        <div class="">We reurn money within 30 days</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AboutPage",
  components: {},
  setup() {
    return {};
  },
};
</script>
