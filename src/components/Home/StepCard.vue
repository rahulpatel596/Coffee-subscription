<template>
    <div class="stepCard-cont flex flex-col justify-between align-left">
        <span class="text-7xl text-darkCream">{{stepNumber}}</span>
        <span class="stepTitle font-black text-4">{{stepTitle}}</span>
        <span class="text-xs font-Barlow text-base">{{stepDescription}}</span>
  </div>
</template>

<script>


export default {
  name: 'StepCard',
  components: {

  },props:['stepNumber', 'stepTitle', 'stepDescription'],
}
</script>

<style>
.stepCard-cont{
    width:300px;
}
.text-darkCream{
    line-height: 72px;
    font-style: norma
}
.stepTitle{
    line-height: 36px;
}
</style>
