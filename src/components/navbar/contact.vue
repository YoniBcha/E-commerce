<template>
  <div class="mx-[80px] mt-[100px] text-2xl font-semibold">Contact</div>
  <div class="grid grid-rows-4 grid-flow-col grid-cols-12 mx-20">
    <div class="row-span-2 row-start-1 col-span-5 px-10 pt-10">
      <div class="mb-5 border-b-2 pb-7">
        <div class="flex items-center mb-4 pt-5">
          <i
            class="bx bxs-phone text-3xl p-2 rounded-full text-white bg-[#db4444]"
          ></i>
          <div class="text-2xl font-semibold ml-8">Call To Us</div>
        </div>
        <div class="">
          <p class="text-xl mb-1">We are available 24/7, 7 days a week.</p>
          <p class="text-xl">Phone: +8801611112222</p>
        </div>
      </div>
      <div class="">
        <div class="flex items-center mb-5 pt-5">
          <i
            class="bx bx-envelope text-3xl p-2 rounded-full text-white bg-[#db4444]"
          ></i>
          <div class="text-2xl font-semibold ml-8">Write To US</div>
        </div>
        <div class="">
          <p class="text-xl mb-1">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p class="text-xl">Emails: customer@exclusive.com</p>
        </div>
      </div>
    </div>
    <div class="row-span-2 row-start-3 col-span-5 p-10"></div>
    <div class="col-span-7">
      <div class="input flex justify-between px-1 py-16">
        <input type="text" placeholder="your name" />
        <input type="email" placeholder="your email" />
        <input type="tel" placeholder="your phone" />
      </div>
      <div class="">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="type your message here "
        ></textarea>
        <button
          class="text-white px-2 py-2 text-xl float-right rounded-lg bg-[#db4444]"
        >
          Send Massage
        </button>
      </div>
    </div>
    <div class="col-span-7 row-span-2">
      <div class="flex justify-end w-full"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ContactView",
};
</script>
<style scoped>
.input input {
  height: 40px;
  background: rgba(202, 196, 196, 0.24);
}
input {
  padding: 3px 6px;
}
textarea {
  background: rgba(202, 196, 196, 0.24);
  padding: 10px 10px;
  width: 100%;
  margin: 0px 5px;
  outline: none;
}
</style>
