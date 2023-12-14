<template>
  <div class="card"><i class="bx bx-mobile-alt text-4xl"></i></div>
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
