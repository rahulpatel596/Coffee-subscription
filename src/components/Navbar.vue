<template>
<div class="navbar-container">
    <div class="logo-container">
        <LogoIcon />
    </div>
    <div class="nav-items">
        <span>HOME</span>
        <span>ABOUT</span>
        <span>CREATE YOUR PLAN</span>
    </div>
</div>
</template>

<script>
import LogoIcon from '../assets/assets/shared/desktop/logo.svg'
  export default {
    components: {
        LogoIcon
    }
  }
</script>
<style>
.navbar-container{
    font-size:0.75rem;
    height:113px;
    display:flex;
}

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