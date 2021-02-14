<template>
<div class="navbar-container text-3 h-28 flex items-center">
    <div class="logo-container flex ">
        <img src="../assets/assets/shared/desktop/logo.svg">
    </div>
    <div class="nav-items">
        <span>HOME</span>
        <span>ABOUT</span>
        <span>CREATE YOUR PLAN</span>
    </div>
</div>
</template>

<script>

  export default {
    components: {

    }
  }
</script>
<style>

.logo-container{
    flex:1;
}

.nav-items{
    flex:1;
    display:flex;
    justify-content: space-evenly;
    align-items: center;
}
</style>