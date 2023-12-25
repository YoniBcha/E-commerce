<template>
  <div
    class="card transition duration-150 ease hover:cursor-pointer hover:bg-[#db4444] hover:text-white"
  >
    <div class="text-4xl">
      <slot name="icon"></slot>
    </div>
    <div class="text-lg font-semibold">
      <slot name="product-name"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "BoxCard",
};
</script>
<style scoped>
.card {
  display: flex;
  width: 170px;
  height: 145px;
  /* padding: 25px 56px 24px 55px; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border: 2px solid rgba(0, 0, 0, 0.411);
}
</style>
