<template>
  <header class="header">
    <div class="navbar">
      <span><router-link class="nav-link" to="/home">Home</router-link></span>
      <span
        ><router-link class="nav-link" to="/contact">Contact</router-link></span
      >
      <span><router-link class="nav-link" to="/about">About</router-link></span>
      <span
        ><router-link class="nav-link" to="/signup">Signup</router-link></span
      >
    </div>
    <div class="flex">
      <div class="search-container">
        <i class="bx bx-search ml-2 -mt-[2px] text-white"></i>
        <input type="text" placeholder="Search" />
      </div>
      <div class="flex flex-col text-2xl my-2 ml-28">
        <i class="bx bx-heart"></i>
      </div>
      <div class="flex flex-col text-2xl my-2 ml-10">
        <i class="bx bx-cart-alt"></i>
      </div>
    </div>
    <div class="profile flex flex-col text-2xl my-2 ml-10">
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
  </header>
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
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
  },
};
</script>
<style scoped>
.header {
  padding: 10px 0;
  position: fixed;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: var(--border);
  width: 100%;
  right: 0;
  z-index: 10;
}
.header .navbar {
  display: flex;
  width: 350px;
  justify-content: space-between;
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
  position: relative;
  margin-left: 50px;
}
.search-container .bx-search {
  position: absolute;
  z-index: 99;
  color: black;
  font-size: 22px;
}
.search-container i {
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
  display: inline-block;
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
  /* display: none; */
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
