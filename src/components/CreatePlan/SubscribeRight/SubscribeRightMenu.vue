<template>
  <div class="w-full h-full">
    <div class="w-full h-full ">
      <div>
        <OptionMenu
          v-bind:key="index"
          v-for="(menuItem, index) in menu"
          v-bind:title="menuItem.title"
          v-bind:ind="index"
          v-bind:options="menuItem.options"
          v-bind:isActive="menuItem.isActive"
        />
      </div>
      <div class="w-4/5 bg-darkGreenish flex flex-col rounded-lg">
        <span class="pl-16 pt-10 text-greyish text-Barlow"> ORDER SUMMARY</span>
        <span
          class="pl-16 pb-4 text-white leading-10 pt-6 pr-16 font-black text-2xl text-Fraunces"
          >"I drink my coffee as
          <span class="text-sweetGreen">{{ getPreference }}</span> , with a
          <span class="text-sweetGreen">{{ getBeanType }}</span> type of bean.
          <span class="text-sweetGreen">{{ getQuantity }}</span> ground ala
          <span class="text-sweetGreen">{{ getGrindOption }}</span
          >, sent to me <span class="text-sweetGreen">{{ getDeliveries }}</span
          >."</span
        >
      </div>
      <div class="flex w-4/5 justify-end">
        <button
          class="cr-button mt-6 flex-3 rounded-md text-white bg-sweetGreen"
        >
          Create your plan
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import OptionMenu from "./OptionMenu";

export default {
  data() {},

  computed: {
    menu() {
      return this.$store.getters.getMenuRight;
    },
    getPreference() {
      return this.coffeePreference();
    },
    getBeanType() {
      return this.beanType();
    },
    getQuantity() {
      return this.quantity();
    },
    getGrindOption() {
      return this.grindOption();
    },
    getDeliveries() {
      return this.deliveries();
    },
  },
  methods: {
    coffeePreference() {
      let preference = "______";
      if (this.$store.getters.getMenuRight[0]) {
        this.$store.getters.getMenuRight[0].options.forEach((opt) => {
          if (opt.isSelected) {
            preference = opt.optionName;
          }
        });
      }
      return preference;
    },
    beanType() {
      let beanType = "______";
      if (this.$store.getters.getMenuRight[1]) {
        this.$store.getters.getMenuRight[1].options.forEach((opt) => {
          if (opt.isSelected) {
            beanType = opt.optionName;
          }
        });
      }
      return beanType;
    },
    quantity() {
      let quantity = "______";
      if (this.$store.getters.getMenuRight[2]) {
        this.$store.getters.getMenuRight[2].options.forEach((opt) => {
          if (opt.isSelected) {
            quantity = opt.optionName;
          }
        });
      }
      return quantity;
    },
    grindOption() {
      let grindOption = "______";
      if (this.$store.getters.getMenuRight[3]) {
        this.$store.getters.getMenuRight[3].options.forEach((opt) => {
          if (opt.isSelected) {
            grindOption = opt.optionName;
          }
        });
      }
      return grindOption;
    },
    deliveries() {
      let deliveries = "______";
      if (this.$store.getters.getMenuRight[4]) {
        this.$store.getters.getMenuRight[4].options.forEach((opt) => {
          if (opt.isSelected) {
            deliveries = opt.optionName;
          }
        });
      }
      return deliveries;
    },
  },
  components: {
    OptionMenu,
  },
};
</script>
<style></style>
