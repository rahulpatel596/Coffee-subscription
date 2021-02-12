<template>
  <div id="app" class="bg-blue-500">
    <Navbar />
    <div class="image-container">
      <div class="image-content bg-black">
      <span class="content-headline ">
        Great coffee made simple.
      </span>
      <span class="content-subline">
        Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.
      </span>
    </div>
      <img src="../src/assets/assets/home/desktop/image-hero-coffeepress.jpg">
    </div>
    
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Home from './components/Home';
// import About from './components/About.vue';
import Navbar from './components/Navbar.vue'
// import CreateYourPlan from './components/CreateYourPlan.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Home,
    // About,
    // CreateYourPlan,
    Navbar
  }
}
</script>

<style>
#app {

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

.image-container{
  position:relative;
 height:600px;
  width:1280px;
  margin-left: 80px;
}

.image-content{
 width: 493px;
height: 367px;
left: 165px;
top: 230px;
  color: white;
  position: absolute;
  text-align: left;

}
.content-headline{

height: 145px;
left: 0%;
right: 0%;
top: calc(50% - 145px/2 - 55px);

font-family: Fraunces;
font-style: normal;
font-weight: 900;
font-size: 72px;
line-height: 72px;

color: #FEFCF7;
}

.content-subline{

left: 0%;
right: 9.74%;
top: 69.41%;
bottom: 0%;
text-align: left;
font-family: Barlow;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 26px;

color: #FEFCF7;
mix-blend-mode: normal;
opacity: 0.8;
}
.image-container img{
  height:100%;
  width:100%;
  border-radius:10px;
 
}
</style>
