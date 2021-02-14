module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight: {
        "12": "4rem",
      },
      fontSize: {
        "10xl": "9.375rem",
        "4": "2rem",
      },
      height: {
        "22-9": "22.937rem",
        "90vh": "90vh",
      },
      width: {
        "32-8": "32.812rem",
        "90vw": "90vw",
      },
      margin: {
        "-9-31": "9.3125rem",
        "-8-37": "8.375rem",
        "-5vw": "5vw",
        "-10vw": "10vw",
      },
      fontFamily: {
        Barlow: "Barlow",
        Fraunces: "Fraunces",
      },

      textColor: {
        lightGray: "#FEFCF7",
        darkCream: "#FDD6BA",
      },
      backgroundColor: (theme) => ({
        blueish: "#66D2CF",
        darkGreenish: "#2C343E",
        sweetGreen: "#0E8784",
        cream: "#FEFCF7",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
