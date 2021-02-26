<template>
  <footer class="md:mt-12 md:w-90vw md:h-48 md:-ml-5vw">
    <div
      class="md:w-full md:h-3/5 bg-darkGreenish flex md:flex-row lg:flex-row xl:flex-row flex-col items-center justify-between"
    >
      <div class=" justify-center items-center md:pl-24">
        <img src="../assets/assets/shared/desktop/logo.svg" />
      </div>

      <div class="footer-menu text-greyish flex justify-between ">
        <span class="font-Barlow">HOME</span>
        <span class="font-Barlow">ABOUT US</span>
        <span class="font-Barlow ">CREATE YOUR PLAN</span>
      </div>
      <div class="footer-social flex justify-between md:pr-8">
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
