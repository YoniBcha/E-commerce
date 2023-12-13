<template>
  <div class="shopping-cart">
    <ul class="cart-items">
      <div class="flex justify-between">
        <div>
          <button>-40%</button>
        </div>
        <!-- heart and eye icon -->
        <div class="flex flex-col text-2xl my-2 mx-2">
          <i class="bx bx-heart rounded-full"></i>
          <i class="bx bx-show rounded-full mt-6"></i>
        </div>
      </div>

      <div class="cart-item -mt-[60px]">
        <img
          src="@/assets/game.webp"
          alt="Product Image"
          class="product-image mt-5 ml-4"
        />
      </div>
    </ul>

    <div class="product-info">
      <h3 class="product-name">HAVIT HV-G92 Gamepad</h3>
      <p class="product-price">$120 <span>$160</span></p>
      <p class="text-[#ffad33]">
        <i class="bx bx-star"></i><i class="bx bx-star"></i
        ><i class="bx bx-star"></i><i class="bx bx-star"></i
        ><i class="bx bx-star text-black"></i
        ><span class="text-gray-600 ml-3">(88)</span>
      </p>
      <!-- <input type="number" class="quantity-input" min="1" value="1" /> -->
      <!-- <button class="remove-button">Remove</button> -->
    </div>
    <div class="card-content">
      <button class="remove-button">Add to chart</button>
    </div>
  </div>
</template>
<script>
import "@/style/global_css/card.css";
export default {
  name: "CardView",
};
</script>
