<template>
  <div class="ml-20 mt-20 mr-32 mb-32">
    <div class="container rounded-lg" ref="container">
      <div class="forms-container">
        <div class="signin-signup">
          <form action="" class="sign-in-form">
            <h2 class="title">Log in to Exclusive</h2>
            <div class="inbox-box mt-5">
              <span class="icon"> <i class="bx bx-envelope"></i> </span>
              <input type="email" required v-model="email" />
              <label for="">Email</label>
            </div>
            <div class="inbox-box">
              <span class="icon"> <i class="bx bx-show"></i> </span>
              <input type="password" required v-model="password" />
              <label for="">Password</label>
            </div>
            <div class="flex justify-between mt-10 w-72">
              <div class="bg-[#db4444] text-white px-6 py-2 rounded-sm">
                <button>Log In</button>
              </div>
              <div class="text-[#db4444] pt-2">Forget Password?</div>
            </div>
            <button
              class="flex justify-around text-white px-6 py-2 rounded-sm mt-5 w-[300px] border-2"
            >
              <img src="@/assets/google.png" alt="" />
              <span class="text-black">Signin with Google</span>
            </button>
            <!-- signup form -->
          </form>
          <form action="#" class="sign-up-form -mt-20">
            <h2 class="title">Create an account</h2>
            <p class="-ml-[125px]">Enter your details below</p>
            <div class="inbox-box">
              <input type="text" required v-model="username" />
              <label for="">username</label>
            </div>
            <div class="inbox-box">
              <input type="emial" required v-model="email" />
              <label for="">email</label>
            </div>
            <div class="inbox-box">
              <input type="text" required v-model="email" />
              <label for="">password</label>
            </div>
            <div class="inbox-box">
              <input type="text" required v-model="confirm_password" />
              <label for="">confirm password</label>
            </div>
            <div
              class="bg-[#db4444] text-center text-white px-6 py-2 rounded-sm mt-5 w-[300px]"
            >
              <button>create account</button>
            </div>
            <button
              class="flex justify-around text-white px-6 py-2 rounded-sm mt-5 w-[300px] border-2"
            >
              <img src="@/assets/google.png" alt="" />
              <span class="text-black">Sign up with Google</span>
            </button>
          </form>
        </div>
      </div>

      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem reprehenderit laboriosam, deserunt quia at doloribus
              quod, dolorum porro voluptatibus impedit iure reiciendis ratione
              tempore commodi exercitationem nostrum optio. Quisquam, repellat!
            </p>
            <button class="btn transparent" id="sign-up-btn">Sign up</button>
          </div>
          <img src="@/assets/shop.jpg" class="image -ml-10" alt="no img" />
        </div>

        <div class="panel right-panel">
          <div class="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem reprehenderit laboriosam, deserunt quia at doloribus
              quod, dolorum porro voluptatibus impedit iure reiciendis ratione
              tempore commodi exercitationem nostrum optio. Quisquam, repellat!
            </p>
            <button class="btn transparent" id="sign-in-btn">Sign in</button>
          </div>
          <img src="@/assets/shop.jpg" class="image -mr-20" alt="no img" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "@/style/navbar/sign_up.css";
export default {
  name: "SignupView",
  mounted() {
    const container = this.$refs.container;
    const panelsContainer = container.querySelector(".panels-container");
    const sign_in_btn = panelsContainer.querySelector("#sign-in-btn");
    const sign_up_btn = panelsContainer.querySelector("#sign-up-btn");

    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });
  },
};
</script>
<style scoped></style>
