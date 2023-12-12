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
          <i class="bx bx-grid-alt"></i>
          <span class="link_name">Dashboard</span>
        </a>
        <span class="tooltip">Dashboard</span>
      </li>
      <li>
        <a href="#">
          <i class="bx bx-grid-alt"></i>
          <span class="link_name">User</span>
        </a>
        <span class="tooltip">user</span>
      </li>
      <li>
        <a href="#">
          <i class="bx bx-grid-alt"></i>
          <span class="link_name">Setting</span>
        </a>
        <span class="tooltip">setting</span>
      </li>
      <li>
        <a href="#">
          <i class="bx bx-grid-alt"></i>
          <span class="link_name">FileManager</span>
        </a>
        <span class="tooltip">file</span>
      </li>
    </ul>
  </div>
  <div class="home_content pb-96">
    <header class="header">
      <nav class="navbar">
        <span><router-link class="nav-link" to="/home">Home</router-link></span>
        <span
          ><router-link class="nav-link" to="/contact"
            >Contact</router-link
          ></span
        >
        <span
          ><router-link class="nav-link" to="/about">About</router-link></span
        >
        <span
          ><router-link class="nav-link" to="/signup">Signup</router-link></span
        >
      </nav>
    </header>
    <router-view />
  </div>
</template>

<script>
import "@/style/sidebar/sidebar.css";

export default {
  name: "SidebarView",
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
