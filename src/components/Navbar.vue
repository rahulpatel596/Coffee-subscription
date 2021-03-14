<template>
  <div class="navbar-container w-90vw -ml-5vw text-3 h-28 flex items-center">
    <div class="logo-container flex ">
      <router-link to="/"
        ><img src="../assets/assets/shared/desktop/logo.svg"
      /></router-link>
    </div>
    <div
      class="nav-items font-Barlow justify-end justify-around hidden md:block"
    >
      <router-link to="/">HOME</router-link>
      <router-link to="/about">ABOUT</router-link>
      <router-link to="/createYourPlan">CREATE YOUR PLAN</router-link>
    </div>
    <button class="ml-72 md:hidden" v-on:click="setNavState">
      <img
        v-bind:class="[isNavOpen ? 'hidden' : 'block']"
        src="../assets/assets/shared/mobile/icon-hamburger.svg"
      />
      <img
        v-bind:class="[isNavOpen ? 'block' : 'hidden']"
        src="../assets/assets/shared/mobile/icon-close.svg"
      />
    </button>
    <div
      v-bind:class="[isNavOpen ? 'block' : 'hidden']"
      style="background: rgb(255,255,255); background: linear-gradient(180deg, #fff 20%, rgba(254, 252, 247, 0.9) 80%);"
      class="absolute h-2/4 font-black text-darkGreenish text-2xl flex flex-col left-0 top-16 w-screen h-screen items-center pt-20 z-50 md:hidden"
    >
      <router-link v-on:click="setNavState" class="pb-12 opacity-60" to="/"
        >Home</router-link
      >
      <router-link v-on:click="setNavState" class="pb-12 opacity-60" to="/about"
        >About</router-link
      >
      <router-link
        v-on:click="setNavState"
        class="pb-12 opacity-60"
        to="/createYourPlan"
        >Create Your Plan</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    setNavState: function() {
      this.$store.commit({
        type: "setNavState",
      });
      // console.log(this.$store.getters.isNavOpen);
      // this.$store.isNavOpen = !this.$store.getters.isNavOpen;
    },
  },
  computed: {
    isNavOpen() {
      return this.$store.getters.isNavOpen;
    },
  },
};
</script>
<style>
.logo-container {
  flex: 1;
}

.nav-items {
  width: 283px;
  font-size: 12px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>
