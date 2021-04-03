module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight: {
        "12": "4rem",
        "15": "4.5rem",
        "13": "3rem",
        "2r": "2rem",
        "16": "2.25rem",
      },

      fontSize: {
        "10xl": "9.375rem",
        "4": "2rem",
        "175": "1.75rem",
      },
      height: {
        "22-9": "22.937rem",
        "15-6": "16rem",
        "90vh": "90vh",
        "80vh": "80vh",
        "70vh": "70vh",
        "60vh": "60vh",
      },
      width: {
        "32-8": "32.812rem",
        "90vw": "90vw",
        "80vw": "80vw",
        "70vw": "70vw",
      },
      margin: {
        "-9-31": "9.3125rem",
        "-8-37": "8.375rem",
        "-5vw": "5vw",
        "-5vh": "5vh",
        "-10vw": "10vw",
        "-20vh": "20vh",
        "-10vh": "10vh",
        "-15vw": "15vw",
      },
      fontFamily: {
        Barlow: "Barlow",
        Fraunces: "Fraunces",
      },

      textColor: {
        lightGray: "#FEFCF7",
        greyish: "#83888F",
        sweetGreen: "#0E8784",
        darkGreenish: "#2C343E",
        darkCream: "#FDD6BA",
      },
      backgroundColor: {
        dull: "#F4F1EB",
        skin: "#FDD6BA",
        blueish: "#66D2CF",
        darkGreenish: "#2C343E",
        sweetGreen: "#0E8784",
        cream: "#FEFCF7",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
