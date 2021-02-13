<template>
    <div id="app" >
    <Navbar class="w-90vw -ml-10vw" />
   <ContentHeader />
   <Collection/> 
  </div>
</template>

<script>
import Navbar from '../src/components/Navbar.vue'
import ContentHeader from './components/ContentHeader.vue'
import Collection from './components/Collection.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    ContentHeader,
    Collection
  }
}
</script>

<style>
#app{
font-family: 'Fraunces', serif;
}
</style>
