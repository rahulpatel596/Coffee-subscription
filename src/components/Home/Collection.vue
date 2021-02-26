<template>
  <div class="w-screen md:h-screen mt-28 md:mt-0">
    <div class="flex  md:h-4/5 flex-col justify-center items-center">
      <div class="font-black relative text-4xl md:text-10xl my-collection">
        <span class="">our collections</span>
      </div>
      <div
        class="flex flex-col block md:flex-row z-50 justify-center items-center md:w-4/5"
      >
        <Product
          v-for="(product, index) in products"
          v-bind:key="index"
          v-bind:productName="product.productName"
          v-bind:mySrc="product.productImage"
          v-bind:descriptiveText="product.desc"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Product from "./Product.vue";
import productImage1 from "../../assets/assets/home/desktop/image-gran-espresso.png";
import productImage2 from "../../assets/assets/home/desktop/image-planalto.png";
import productImage3 from "../../assets/assets/home/desktop/image-piccollo.png";
import productImage4 from "../../assets/assets/home/desktop/image-danche.png";
export default {
  name: "Collection",
  components: {
    Product,
  },
  data() {
    return {
      products: [
        {
          productName: "Gran Espresso",
          productImage: productImage1,
          desc:
            "Light and flavorful blend with cocoa and black pepper for an intense experience.",
        },
        {
          productName: "Planalto",
          productImage: productImage2,
          desc:
            "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.",
        },
        {
          productName: "Piccollo",
          productImage: productImage3,
          desc:
            "Mild and smooth blend featuring notes of toasted almond and dried cherry.",
        },
        {
          productName: "Danche",
          productImage: productImage4,
          desc:
            "Ethiopian hand-harvested blend densely packed with vibrant fruit notes.",
        },
      ],
    };
  },
};
</script>

<style>
@media (min-width: 768px) {
  .my-collection {
    top: 80px;
  }
  .my-collection span {
    height: 72px;
    left: 1.71%;
    right: 1.8%;
    top: calc(50% - 72px / 2 + 24px);
    font-family: Fraunces 9pt;
    font-style: normal;
    font-weight: 900;
    font-size: 150px;
    mix-blend-mode: normal;
    opacity: 0.5;
    line-height: 72px;
    /* identical to box height, or 48% */
    text-align: center;
    color: linear-gradient(
      180deg,
      rgba(254, 252, 247, 0.0001) 0%,
      #fefcf7 100%
    );
  }
}
</style>
