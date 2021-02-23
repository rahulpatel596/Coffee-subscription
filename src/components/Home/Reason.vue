<template>
  <div
    class="hidden  md:w-screen md:h-screen md:flex md:items-center md:justify-center "
  >
    <div
      class="relative md:w-90vw md:h-90vh flex justify-center align-text-top"
    >
      <div
        class="rounded-lg bg-darkGreenish font-white md:h-4/5 md:w-full flex md:p-28 justify-center"
      >
        <div
          class="text-box flex flex-col justify-between align-top justify-center flex-center"
        >
          <span
            class="font-Fraunces text-white text-center text-center font-black"
            >Why choose us?</span
          >
          <span
            class="font-Barlow text-greyish opacity-80 md:leading-7 text-base text-center"
          >
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </span>
        </div>
      </div>
      <div
        class="md:w-4/5 flex flex-col md:flex-row md:justify-between md:absolute justify-center card-box bottom-0 "
      >
        <Card
          class="text-white rounded-md myCard bg-sweetGreen"
          v-bind:myIcon="beanIcon"
        />
        <Card
          class="text-white rounded-md myCard bg-sweetGreen"
          v-bind:myIcon="giftIcon"
        />
        <Card
          class="text-white rounded-md myCard bg-sweetGreen"
          v-bind:myIcon="truckIcon"
        />
      </div>
    </div>
  </div>
</template>

<script>
import beanIcon from "../../assets/assets/home/desktop/icon-coffee-bean.svg";
import giftIcon from "../../assets/assets/home/desktop/icon-gift.svg";
import truckIcon from "../../assets/assets/home/desktop/icon-truck.svg";
import Card from "./Card";

export default {
  name: "Reason",
  components: {
    Card,
  },
  data() {
    return {
      beanIcon: beanIcon,
      giftIcon: giftIcon,
      truckIcon: truckIcon,
    };
  },
};
</script>

<style>
@media (min-width: 768px) {
  .text-box {
    width: 540px;
    height: 160px;
    font-size: 40px;
  }
  .card-box {
    height: 382px;
  }
  .myCard {
    width: 30%;
    height: 382px;
  }
}
</style>
