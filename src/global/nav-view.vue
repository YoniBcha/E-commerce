<template>
  <div class="header grid grid-cols-12 bg-[#c8ab7c]">
    <div
      class="logo_content flex justify-between items-center col-start-1 col-span-2"
    >
      <i
        class="bx bx-menu text-4xl ml-[30px]"
        id="btn"
        @click="toggleSidebar"
      ></i>
      <div class="text-2xl font-bold text-[#db4444]">Ecommerce</div>
    </div>
    <div class="navbar col-start-3 col-span-5">
      <span><router-link class="nav-link" to="/home">Home</router-link></span>
      <span
        ><router-link class="nav-link" to="/contact">Contact</router-link></span
      >
      <span><router-link class="nav-link" to="/about">About</router-link></span>
      <span
        ><router-link class="nav-link" to="/signup">Signup</router-link></span
      >
    </div>
    <div class="search-container col-start-8 col-span-3">
      <i class="bx bx-search ml-2 -mt-[2px] text-white"></i>
      <input type="text" placeholder="Search" />
    </div>
    <div class="profile col-start-11 col-span-2 text-2xl">
      <i class="bx bx-heart"></i>
      <i class="bx bx-cart-alt"></i>
      <i
        @click="toggleDropdown"
        class="bx bx-user text-white rounded-full p-2 bg-[#db4444]"
      ></i>
      <div class="dropdown" v-show="showDropdown">
        <ul>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
  <router-view />
</template>
<script>
export default {
  name: "NavView",
  data() {
    return {
      showDropdown: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.$emit("sidebar-toggle");
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
  },
};
</script>
<style scoped>
.header {
  position: fixed;
  background: white;
  align-items: center;
  justify-content: center;
  border-bottom: var(--border);
  width: 100%;
  height: 60px;
  right: 0;
  z-index: 10;
}
.header .navbar {
  display: flex;
  padding-left: 80px;
  justify-content: space-around;
  font-weight: 500;
}
.header .navbar .nav-link {
  margin: 0px;
  color: black;
  font-size: 1.2rem;
  text-decoration: none;
  transition: all 0.3s ease;
}
.header .navbar .nav-link:hover {
  color: #db4444;
  border-bottom: 0.3rem solid #db4444;
  padding-bottom: 0.3rem;
}
.search-container {
  display: flex;
  justify-content: center;
}
.search-container .bx-search {
  position: absolute;
  z-index: 99;
  color: black;
  font-size: 22px;
}
.search-container i {
  position: fixed;
  line-height: 50px;
  text-align: center;
}

input[type="text"] {
  width: 200px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  transition: width 0.3s ease-in-out;
  padding-left: 35px;
  background: #f5f5f5;
}

input[type="text"]:focus {
  width: 300px;
}
.profile {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;
}
.profile img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
}
.dropdown {
  position: absolute;
  top: 50px;
  right: 0;
  background: linear-gradient(to bottom, white, black);
  border: 1px solid rgba(20, 19, 19, 0.644);
  border-radius: 5px;
  padding: 20px;
}
.dropdown ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.dropdown li {
  margin-bottom: 10px;
}
.dropdown li:last-child {
  margin-bottom: 0;
}
.dropdown a {
  text-decoration: none;
  color: white;
}
</style>
