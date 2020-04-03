const defaultTheme = require("tailwindcss/defaultTheme");
const { theme } = require("./config.js");

module.exports = {
  theme: {
    borderWidth: {
      "10": "10px",
      ...defaultTheme.borderWidth
    },
    colors: {
      transparent: "transparent",
      black: "#1f1f20",
      grey: {
        default: "#cccccc",
        darker: "#717171"
      },
      white: "#ffffff",
      salmon: {
        default: theme.brandColor
      }
    },
    container: {
      center: true
    },
    fontFamily: {
      copy: [theme.bodyFont, ...defaultTheme.fontFamily.sans],
      heading: [theme.headingFont, ...defaultTheme.fontFamily.sans]
    },
    fontWeight: {
      normal: 400,
      bold: 700
    },
    screens: {
      xs: "375px", // iPhone 8
      sm: "640px", // Fablet
      md: "768px", // iPad
      lg: "1024px",
      xl: "1280px"
    },
    extend: {
      padding: {
        "14": "3.5rem",
      },
    }
  },
  variants: {
    opacity: ["responsive", "hover", "focus", "disabled"],
    cursor: ["disabled"]
  },
  plugins: []
};
