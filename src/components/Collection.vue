<template>
     <div class="w-screen h-screen ">
         <div class="flex h-4/5 flex-col justify-center items-center">
                <div class=" font-black  text-10xl my-collection">
                    <span class="">our collections</span>
                </div>
            <div class="flex z-50 justify-center items-center w-4/5">
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
         </div>
    </div>
</template>

<script>
import Product from './Product.vue'

export default {
  name: 'Collection',
  components: {
      Product
  }
}
</script>

<style>
.my-collection{
    background: linear-gradient(180deg, rgba(254, 252, 247, 0.0001) 0%, #FEFCF7 100%);
}
.my-collection span {
height: 72px;
left: 1.71%;
top: 5%;
right: 1.8%;
top: calc(50% - 72px/2 + 24px);

}
</style>
