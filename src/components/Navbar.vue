<template>
  <div class="navbar-container w-90vw -ml-5vw text-3 h-28 flex items-center">
    <div class="logo-container flex ">
      <router-link to="/"
        ><img src="../assets/assets/shared/desktop/logo.svg"
      /></router-link>
    </div>
    <div class="nav-items justify-end justify-around">
      <router-link to="/">HOME</router-link>
      <router-link to="/about">ABOUT</router-link>
      <router-link to="/createYourPlan">CREATE YOUR PLAN</router-link>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
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
