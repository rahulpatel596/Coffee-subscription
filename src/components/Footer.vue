<template>
  <div class="flex w-90vw h-48 -ml-5vw">
    <div class="w-full h-3/5 bg-darkGreenish flex items-center justify-between">
      <div class=" justify-center items-center pl-24">
        <img src="../assets/assets/shared/desktop/logo.svg" />
      </div>

      <div class="footer-menu text-greyish flex justify-between ">
        <span class="font-Barlow">HOME</span>
        <span class="font-Barlow">ABOUT US</span>
        <span class="font-Barlow ">CREATE YOUR PLAN</span>
      </div>
      <div class="footer-social flex justify-between pr-8">
        <img src="../assets/assets/shared/desktop/icon-facebook.svg" />
        <img src="../assets/assets/shared/desktop/icon-twitter.svg" />
        <img src="../assets/assets/shared/desktop/icon-instagram.svg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  components: {},
};
</script>

<style>
.footer-menu {
  width: 330px;
}
.footer-social {
  width: 150px;
}
</style>
