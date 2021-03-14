import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      currentMenuIndex: 0,
      isNavOpen: false,
      menuLeft: [
        {
          number: "01",
          name: "Preferences",
        },
        {
          number: "02",
          name: "Bean Type",
        },
        {
          number: "03",
          name: "Quantity",
        },
        {
          number: "04",
          name: "Grind Option",
        },
        {
          number: "05",
          name: "Deliveries",
        },
      ],
      menuRight: [
        {
          title: "How do you drink your coffee?",
          isActive: true,
          options: [
            {
              optionName: "Capsule",
              optionDesc:
                "Compatible with Nespresso systems and similar brewers",
              isSelected: true,
            },
            {
              optionName: "Filter",
              optionDesc:
                "For pour over or drip methods like Aeropress, Chemex, and V60",
              isSelected: false,
            },
            {
              optionName: "Expresso",
              optionDesc:
                "Dense and finely ground beans for an intense, flavorful experience",
              isSelected: false,
            },
          ],
        },
        {
          title: "What type of coffee?",
          isActive: false,
          options: [
            {
              optionName: "Single Origin",
              optionDesc:
                "Distinct, high quality coffee from a specific family-owned farm",
              isSelected: false,
            },
            {
              optionName: "Decaf",
              optionDesc:
                "Just like regular coffee, except the caffeine has been removed",
              isSelected: false,
            },
            {
              optionName: "Blended",
              optionDesc:
                "Combination of two or three dark roasted beans of organic coffees",
              isSelected: false,
            },
          ],
        },
        {
          title: "How much would you like?",
          isActive: false,
          options: [
            {
              optionName: "250g",
              optionDesc:
                "Perfect for the solo drinker. Yields about 12 delicious cups.",
              isSelected: false,
            },
            {
              optionName: "500g",
              optionDesc:
                "Perfect option for a couple. Yields about 40 delectable cups.",
              isSelected: false,
            },
            {
              optionName: "1000g",
              optionDesc:
                "Perfect for offices and events. Yields about 90 delightful cups.",
              isSelected: false,
            },
          ],
        },
        {
          title: "Want us to grind them?",
          isActive: false,
          options: [
            {
              optionName: "Wholebean",
              optionDesc:
                "Best choice if you cherish the full sensory experience",
              isSelected: false,
            },
            {
              optionName: "Filter",
              optionDesc:
                "For drip or pour-over coffee methods such as V60 or Aeropress",
              isSelected: false,
            },
            {
              optionName: "Cafetiére",
              optionDesc:
                "Course ground beans specially suited for french press coffee",
              isSelected: false,
            },
          ],
        },
        {
          title: "How often should we deliver?",
          isActive: false,
          options: [
            {
              optionName: "Every week",
              optionDesc:
                "$7.20 per shipment. Includes free first-class shipping.",
              isSelected: false,
            },
            {
              optionName: "Every 2 weeks",
              optionDesc:
                "$9.60 per shipment. Includes free priority shipping.",
              isSelected: false,
            },
            {
              optionName: "Every month",
              optionDesc:
                "$12.00 per shipment. Includes free priority shipping.",
              isSelected: false,
            },
          ],
        },
      ],
    };
  },
  mutations: {
    setNavState(state) {
      state.isNavOpen = !state.isNavOpen;
    },
    setCurrentIndex(state, payload) {
      state.currentMenuIndex = payload.index;
    },
    setIsActive(state, payload) {
      state.menuRight[payload.index].isActive = !state.menuRight[payload.index]
        .isActive;
    },
    setIsSelected(state, payload) {
      state.menuRight[payload.menuIndex].options.forEach(function(opt, index) {
        if (index != payload.optionIndex) {
          opt.isSelected = false;
        }
        state.menuRight[payload.menuIndex].options[
          payload.optionIndex
        ].isSelected = true;
      });
    },
  },
  actions: {},
  modules: {},
  getters: {
    getMenuLeft: (state) => state.menuLeft,
    isNavOpen: (state) => state.isNavOpen,
    getMenuRight: (state) => state.menuRight,
    getCoffeePreference: (state) =>
      state.menuRight[0].options.filter((opt) => {
        if (opt.isSelected) {
          return opt.optionName;
        }
      }),
    getCoffeeBeanType: (state) => {
      state.menuRight[1].options.filter((opt) => {
        if (opt.isSelected) {
          return opt.optionName;
        }
      });
    },
    getCoffeeQuantity: (state) => {
      state.menuRight[2].options.filter((opt) => {
        if (opt.isSelected) {
          return opt.optionName;
        }
      });
    },
    getCoffeeGrindOption: (state) => {
      state.menuRight[3].options.filter((opt) => {
        if (opt.isSelected) {
          return opt.optionName;
        }
      });
    },
    getCoffeeDeliveries: (state) => {
      state.menuRight[4].options.filter((opt) => {
        if (opt.isSelected) {
          return opt.optionName;
        }
      });
    },
  },
});
