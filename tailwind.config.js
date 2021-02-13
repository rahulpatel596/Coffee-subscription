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
      },
      height: {
        "22-9": "22.937rem",
      },
      width: {
        "32-8": "32.812rem",
        "90vw": "90vw",
      },
      margin: {
        "-9-31": "9.3125rem",
        "-8-37": "8.375rem",
        "-10vw": "10vw",
      },
      backgroundColor: (theme) => ({
        blueish: "#66D2CF",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
