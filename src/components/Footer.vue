<template>
  <footer class="lg:mt-12 lg:w-90vw lg:h-48 lg:-ml-5vw">
    <div
      class="lg:w-full lg:h-3/5 bg-darkGreenish flex lg:flex-row lg:flex-row xl:flex-row flex-col items-center justify-between"
    >
      <div class=" justify-center items-center lg:pl-24 pt-6 md:pt-0">
        <img src="../assets/assets/shared/desktop/logo.svg" />
      </div>

      <div
        class="text-greyish flex md:flex-row flex-col items-center justify-evenly"
      >
        <router-link class="font-Barlow md:p-4 pt-4" to="/">HOME</router-link>
        <router-link class="font-Barlow md:p-4 pt-4" to="/about"
          >ABOUT</router-link
        >
        <router-link class="font-Barlow md:p-4 pt-4 pb-4" to="/createYourPlan"
          >CREATE YOUR PLAN</router-link
        >
      </div>
      <div class="footer-social flex justify-between lg:pr-8">
        <img
          class="p-2"
          src="../assets/assets/shared/desktop/icon-facebook.svg"
        />
        <img
          class="p-2"
          src="../assets/assets/shared/desktop/icon-twitter.svg"
        />
        <img
          class="p-2"
          src="../assets/assets/shared/desktop/icon-instagram.svg"
        />
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
