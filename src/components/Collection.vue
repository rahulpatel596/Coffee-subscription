<template>
     <div class="w-screen h-screen ">
         <div class="flex h-4/5 flex-col justify-center items-center">
                <div class=" font-black  text-10xl my-collection">
                    <span class="">our collections</span>
                </div>
            <div class="flex z-50 justify-center items-center w-4/5">
                <Product productName="Gran Espresso" v-bind:mySrc="productImage1" v-bind:descriptiveText="desc1"/>
                <Product productName="Planalto" v-bind:mySrc="productImage2" v-bind:descriptiveText="desc2"/>
                <Product productName="Piccollo" v-bind:mySrc="productImage3" v-bind:descriptiveText="desc3"/>
                <Product productName="Danche" v-bind:mySrc="productImage4" v-bind:descriptiveText="desc4"/>
            </div>
         </div>
    </div>
</template>

<script>
import Product from './Product.vue'
import productImage1 from  '../assets/assets/home/desktop/image-gran-espresso.png'
import productImage2 from '../assets/assets/home/desktop/image-planalto.png'
import productImage3 from '../assets/assets/home/desktop/image-piccollo.png'
import productImage4 from '../assets/assets/home/desktop/image-danche.png'
export default {
  name: 'Collection',
  components: {
      Product
  },
  data(){
      return{
          productImage1 : productImage1,
          productImage2 : productImage2,
          productImage3 : productImage3,
          productImage4 : productImage4,
          desc1: "Light and flavorful blend with cocoa and black pepper for an intense experience.",
          desc2: "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.",
          desc3: "Mild and smooth blend featuring notes of toasted almond and dried cherry.",
          desc4: "Ethiopian hand-harvested blend densely packed with vibrant fruit notes."
      }
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
