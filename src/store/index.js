import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      currentMenuIndex: 0,
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
                "Compatible with Nespresso systems and similar brewers",
              isSelected: false,
            },
            {
              optionName: "Expresso",
              optionDesc:
                "Compatible with Nespresso systems and similar brewers",
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
                "Compatible with Nespresso systems and similar brewers",
              isSelected: false,
            },
            {
              optionName: "Decaf",
              optionDesc:
                "Compatible with Nespresso systems and similar brewers",
              isSelected: false,
            },
            {
              optionName: "Blended",
              optionDesc:
                "Compatible with Nespresso systems and similar brewers",
              isSelected: false,
            },
          ],
        },
        {
          title: "How much would you like?",
          isActive: false,
          options: [
            {
              optionName: "Single Origin",
              optionDesc:
                "Compatible with Nespresso systems and similar brewers",
              isSelected: false,
            },
            {
              optionName: "Decaf",
              optionDesc:
                "Compatible with Nespresso systems and similar brewers",
              isSelected: false,
            },
            {
              optionName: "Blended",
              optionDesc:
                "Compatible with Nespresso systems and similar brewers",
              isSelected: false,
            },
          ],
        },
        {
          title: "Want us to grind them?",
          isActive: false,
          options: [
            {
              optionName: "Single Origin",
              optionDesc:
                "Compatible with Nespresso systems and similar brewers",
              isSelected: false,
            },
            {
              optionName: "Decaf",
              optionDesc:
                "Compatible with Nespresso systems and similar brewers",
              isSelected: false,
            },
            {
              optionName: "Blended",
              optionDesc:
                "Compatible with Nespresso systems and similar brewers",
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
                "Compatible with Nespresso systems and similar brewers",
              isSelected: false,
            },
            {
              optionName: "Every 2 weeks",
              optionDesc:
                "Compatible with Nespresso systems and similar brewers",
              isSelected: false,
            },
            {
              optionName: "Every month",
              optionDesc:
                "Compatible with Nespresso systems and similar brewers",
              isSelected: false,
            },
          ],
        },
      ],
    };
  },
  mutations: {
    setCurrentIndex(state, payload) {
      state.currentMenuIndex = payload.index;
    },
    setIsActive(state, payload) {
      state.menuRight[payload.index].isActive = !state.menuRight[payload.index]
        .isActive;
    },
  },
  actions: {},
  modules: {},
  getters: {
    getMenuLeft: (state) => state.menuLeft,
    getMenuRight: (state) => state.menuRight,
    getCurrentIndex: (state) => state.currentMenuIndex,
  },
});
