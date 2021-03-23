<template>
  <div
    class="modal z-50 bg-blue-400"
    v-bind:class="[this.$store.getters.getModalState ? 'block' : 'hidden']"
  >
    <div
      class="modal-content h-3/5 w-4/5 rounded-xl md:w-4/5 lg:h-3/4 lg:w-3/5 lg:h-3/5 xl:w-1/3 xl:h-2/4 flex flex-col lg:justify-center"
    >
      <div name="head" class="h-1/5 w-full bg-darkGreenish flex items-center">
        <span
          class="lg:ml-16 ml-6 md:ml-10 text-white font-black text-2xl lg:text-4xl"
        >
          Order Summary
        </span>
      </div>
      <div
        class="px-6 mt-12 md:px-10  md:text-2xl lg:h-2/4 font-black lg:text-2xl lg:mt-10 lg:px-16 lg:leading-10"
      >
        <span class="lg:leading-10 md:leading-10">
          “I drink my coffee as
          <span class="text-sweetGreen">{{ getPreference }}</span
          >, with a <span class="text-sweetGreen">{{ getBeanType }}</span> type
          of bean. <span class="text-sweetGreen">{{ getQuantity }}</span> ground
          ala <span class="text-sweetGreen">{{ getGrindOption }}</span
          >, sent to me <span class="text-sweetGreen">{{ getDeliveries }}</span
          >.”</span
        >
      </div>
      <div
        class="mt-12 px-6 md:px-10 md:mt-12 lg:text-xl lg:h-1/4 lg:-mt-14 lg:px-16 text-greyish"
      >
        Is this correct? You can proceed to checkout or go back to plan
        selection if something is off. Subscription discount codes can also be
        redeemed at the checkout.
      </div>
      <div name="footer" class="px-6 md:px-10 lg:px-12">
        <!-- Tablet, Desktop Footer-->
        <div class="hidden lg:flex lg:flex-row lg:p-4 md:mt-12">
          <div class="w-2/4 text-3xl text-center align-middle">
            $14.99 / mo
          </div>

          <button
            class="lg:h-16 lg:w-2/4 rounded-lg text-white bg-sweetGreen"
            v-on:click="setModalState"
          >
            Checkout
          </button>
        </div>
        <!-- Mobile footer -->
        <button
          v-on:click="setModalState"
          class="h-12 mt-12 xs:mt-2 md:mt-10 w-full text-white rounded-lg bg-sweetGreen block lg:hidden"
        >
          $14.99 Checkout
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
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
    setModalState: function() {
      this.$store.commit({
        type: "setModalState",
      });
    },
    coffeePreference() {
      let preference = "_____";
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
};
</script>
<style>
.modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */

  border: 1px solid #888;
}
</style>
