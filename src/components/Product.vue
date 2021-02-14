<template>
     <div class="flex flex-col h-96 justify-between items-center">
         <div class="flex items-center justify-center"><img :src="mySrc"/></div>
         <span class="text-2xl font-black">{{productName}}</span>
         <span class="font-Barlow text-base font-normal flex-wrap text-center">{{descriptiveText}}</span>
     </div>
</template>

<script>


export default {
  name: 'Product',
  components: {
  },props:['mySrc', 'productName', 'descriptiveText'],
}
</script>

<style>

</style>
