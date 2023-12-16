<template>
  <div
    class="fotter grid grid-cols-5 gap-3 bg-black w-full h-48 text-white pl-10 pt-5 mb-10 pr-20 pb-10"
  >
    <div class="">
      <p class="font-bold">Exclusive</p>
      <p>Subscribe</p>
      <p>Get 10% off your first order</p>
      <p>
        <input
          type="text"
          placeholder="enter your email"
          class="border border-solid border-white h-10 w-48 p-2 bg-black"
        />
        <i class="bx bxl-telegram text-white -ml-8 text-xl"></i>
      </p>
    </div>
    <div class="">
      <p class="font-bold">Support</p>
      <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
      <p>exclusive@gmail.com</p>
      <p>+88015-88888-9999</p>
    </div>
    <div class="">
      <p class="font-bold">Account</p>
      <p>My Account</p>
      <p>Login / Register</p>
      <p>Cart</p>
      <p>Wishlist</p>
      <p>Shop</p>
    </div>
    <div class="">
      <p class="font-bold">Quick Link</p>
      <p>Privacy Policy</p>
      <p>Terms Of Use</p>
      <p>FAQ</p>
      <p>Contact</p>
    </div>
    <div class="">
      <p class="font-bold">Download App</p>
      <p>Save $3 with App New User Only</p>
      <div class="grid grid-rows-2 grid-cols-2">
        <div class="row-span-2 col-span-1">
          <img src="@/assets/qr.png" class="w-20" alt="no img" />
        </div>
        <div class="row-span-1 col-span-1">
          <img src="@/assets/appstore.png" class="" alt="no img" />
        </div>
        <div class="row-span-1 col-span-1">
          <img src="@/assets/appl.png" class="" alt="no img" />
        </div>
      </div>
      <p class="flex justify-between text-white p-2 w-36">
        <span><i class="bx bxl-facebook-circle"></i></span>
        <span><i class="bx bxl-twitter"></i></span>
        <span><i class="bx bxl-instagram"></i></span>
        <span><i class="bx bxl-linkedin"></i></span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "FooterView",
};
</script>
