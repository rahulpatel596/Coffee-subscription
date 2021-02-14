<template>
    <div id="app" class="bg-cream">
    <Navbar class="w-90vw -ml-10vw" />
   <ContentHeader />
   <Collection/>
   <Reason />
   <HowItWorks />
   <Footer />
  </div>
</template>

<script>
import Navbar from '../src/components/Navbar.vue'
import ContentHeader from './components/ContentHeader.vue'
import Collection from './components/Collection.vue'
import Reason from './components/Reason.vue'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    ContentHeader,
    Collection,
    Reason,
    HowItWorks,
    Footer
  }
}
</script>

<style>
#app{
font-family: 'Fraunces', serif;
}
</style>
