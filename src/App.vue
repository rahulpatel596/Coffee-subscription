<template>
  <div id="nav"></div>
  <Navbar class="w-90vw -ml-5vw" />
  <router-view />
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>
<style>
#app {
  font-family: Fraunces;
}
*:focus {
  outline: none !important;
}
</style>
