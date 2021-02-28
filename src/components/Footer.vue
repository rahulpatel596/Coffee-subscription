<template>
  <footer class="lg:mt-12 lg:w-90vw lg:h-48 lg:-ml-5vw">
    <div
      class="lg:w-full lg:h-3/5 bg-darkGreenish flex lg:flex-row lg:flex-row xl:flex-row flex-col items-center justify-between"
    >
      <div class=" justify-center items-center lg:pl-24">
        <img src="../assets/assets/shared/desktop/logo.svg" />
      </div>

      <div class="footer-menu text-greyish flex justify-between ">
        <span class="font-Barlow">HOME</span>
        <span class="font-Barlow">ABOUT US</span>
        <span class="font-Barlow ">CREATE YOUR PLAN</span>
      </div>
      <div class="footer-social flex justify-between lg:pr-8">
        <img src="../assets/assets/shared/desktop/icon-facebook.svg" />
        <img src="../assets/assets/shared/desktop/icon-twitter.svg" />
        <img src="../assets/assets/shared/desktop/icon-instagram.svg" />
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  components: {},
};
</script>

<style>
footer {
  width: 100%;
}
</style>
