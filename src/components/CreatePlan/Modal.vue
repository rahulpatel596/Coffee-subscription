<template>
  <div
    class="modal z-50 bg-blue-400"
    v-bind:class="[this.$store.getters.getModalState ? 'block' : 'hidden']"
  >
    <div
      class="modal-content justify-between md:justify-between lg:justify-between h-4/5 md:h-4/5 lg:h-4/5 pb-4 w-4/5 rounded-xl md:w-/5  lg:w-2/5 xl:h-3/4 flex flex-col lg:flex"
    >
      <div
        name="head"
        class="h-1/5 rounded-t-xl w-full bg-darkGreenish flex items-center text-white font-black text-2xl md:text-3xl lg:text-4xl pl-4 md:pl-6 lg:pl-10 xl:pl-16"
      >
        Order Summary
      </div>
      <div class="flex justify-between flex-col">
        <div
          class="px-6 md:px-10 text-xl  md:text-2xl lg:h-2/4 font-black lg:text-2xl  lg:px-16 lg:leading-10 md:leading-10"
        >
          “I drink my coffee as
          <span class="text-sweetGreen">{{ getPreference }}</span
          >, with a <span class="text-sweetGreen">{{ getBeanType }}</span> type
          of bean. <span class="text-sweetGreen">{{ getQuantity }}</span> ground
          ala <span class="text-sweetGreen">{{ getGrindOption }}</span
          >, sent to me <span class="text-sweetGreen">{{ getDeliveries }}</span
          >.”
        </div>
        <div
          class="mt-6 px-6 md:px-10 text-sm lg:text-xl  lg:px-16 text-greyish"
        >
          Is this correct? You can proceed to checkout or go back to plan
          selection if something is off. Subscription discount codes can also be
          redeemed at the checkout.
        </div>
      </div>
      <div name="footer" class="px-6 md:px-10  lg:px-12">
        <!-- Tablet, Desktop Footer-->
        <div class="hidden lg:flex lg:flex-row lg:p-4">
          <div class="w-2/4 text-3xl text-center align-middle">
            $14.99 / mo
          </div>

          <button
            class=" lg:w-2/4 rounded-lg text-white bg-sweetGreen"
            v-on:click="setModalState"
          >
            Checkout
          </button>
        </div>
        <!-- Mobile footer -->
        <button
          v-on:click="setModalState"
          class="h-12 w-full text-white rounded-lg bg-sweetGreen block lg:hidden"
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
  margin: 5% auto; /* 15% from the top and centered */

  border: 1px solid #888;
}
</style>
