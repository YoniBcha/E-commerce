<template>
  <div class="main-header">
    <p class="title">
      Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
      <span>shopNow</span>
    </p>
    <!-- <p class="lan">en</p> -->
  </div>
  <div class="sidebar">
    <div class="logo_content">
      <div class="logo">
        <i class="bx bxl-c-plus-plus"></i>
        <div class="logo_name">Ecommerce</div>
      </div>
      <i class="bx bx-menu" id="btn"></i>
    </div>
    <ul class="navlist">
      <li>
        <i class="bx bx-search"></i>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="search..."
        />
        <span class="tooltip">Search</span>
      </li>
      <li>
        <a href="#">
          <i class="bx bx-female"></i>
          <span class="link_name">Woman’s Fashion</span>
        </a>
        <span class="tooltip">Woman’s Fashion</span>
      </li>
      <li>
        <a href="#">
          <i class="bx bx-male"></i>
          <span class="link_name">Men’s Fashion</span>
        </a>
        <span class="tooltip">Men’s Fashion</span>
      </li>
      <li>
        <a href="#">
          <i class="bx bxs-devices"></i>
          <span class="link_name">Electronics</span>
        </a>
        <span class="tooltip">Electronics</span>
      </li>
      <li>
        <a href="#">
          <i class="bx bxs-home"></i>
          <span class="link_name">Home & Lifestyle</span>
        </a>
        <span class="tooltip">Home & Lifestyle</span>
      </li>
      <li>
        <a href="#">
          <i class="bx bx-plus-medical"></i>
          <span class="link_name">Medicine</span>
        </a>
        <span class="tooltip">Medicine</span>
      </li>
      <li>
        <a href="#">
          <i class="bx bx-cycling"></i>
          <span class="link_name">Sports & Outdoor</span>
        </a>
        <span class="tooltip">Sports & Outdoor</span>
      </li>
      <li>
        <a href="#">
          <i class="bx bxs-baby-carriage"></i>
          <span class="link_name">Baby’s & Toys</span>
        </a>
        <span class="tooltip">Baby’s & Toys</span>
      </li>
      <li>
        <a href="#">
          <i class="bx bxs-coffee"></i>
          <span class="link_name">Groceries & Pets</span>
        </a>
        <span class="tooltip">Groceries & Pets</span>
      </li>
      <li>
        <a href="#">
          <i class="bx bx-health"></i>
          <span class="link_name">Health & Beauty</span>
        </a>
        <span class="tooltip">Health & Beauty</span>
      </li>
    </ul>
  </div>
  <div class="home_content pb-96">
    <NavView />
  </div>
</template>

<script>
import "@/style/sidebar/sidebar.css";

import NavView from "@/global/nav-view.vue";

export default {
  name: "SidebarView",
  components: { NavView },
  mounted() {
    const btn = document.querySelector("#btn");
    const sidebar = document.querySelector(".sidebar");
    const searchBtn = document.querySelector(".bx-search");

    btn.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });

    searchBtn.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });
  },
};
</script>
