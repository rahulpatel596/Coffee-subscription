<template>
  <div>
    <span class="font-Barlow">ORDER SUMMARY</span>
    {{ coffeePreference }}
    {{ coffeeBeanType }}
    <span
      >`I drink my coffee as {{ coffeePreference }} ,with a
      {{ coffeeBeanType }} type of bean. {{ coffeeQuantity }} ground ala
      {{ coffeeGrindOption }} , sent to me {{ coffeeDeliveries }}</span
    >
  </div>
</template>
<script>
export default {
  computed: {
    coffeePreference() {
      if (
        this.$store.getters.getCoffeePreference &&
        this.$store.getters.getCoffeePreference
      ) {
        return this.$store.getters.getCoffeePreference[0].optionName;
      } else {
        return "__";
      }
    },
    coffeeBeanType() {
      if (this.$store.getters.getCoffeeBeanType) {
        return this.$store.getters.getCoffeeBeanType[0].optionName;
      } else {
        return "__";
      }
    },
    coffeeQuantity() {
      if (this.$store.getters.getCoffeeQuantity) {
        return this.$store.getters.getCoffeeQuantity[0].optionName;
      } else {
        return "__";
      }
    },
    coffeeGrindOption() {
      if (this.$store.getters.getCoffeeGrindOption) {
        return this.$store.getters.getCoffeeGrindOption[0].optionName;
      } else {
        return "__";
      }
    },
    coffeeDeliveries() {
      if (this.$store.getters.getCoffeeDeliveries) {
        return this.$store.getters.getCoffeeDeliveries[0].optionName;
      } else {
        return "__";
      }
    },
  },
  data() {
    return {};
  },
};
</script>
<style></style>
