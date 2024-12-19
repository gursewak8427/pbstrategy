import withMT from "@material-tailwind/html/utils/withMT";
import { mainTheme } from "./src/utils/theme";

const config = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include your source files
  ],
  theme: {
    extend: {
      keyframes: {
        openWithBottomSlide: {
          "0%": { height: "0px" },
          "100%": { height: "400px" },
        },
      },
      animation: {
        openWithBottomSlide: "openWithBottomSlide 0.2s linear forwards",
      },
      colors: {
        primary: mainTheme.palette.primary.main,
        "primary-dark": mainTheme.palette.primary.dark,
        "primary-light": mainTheme.palette.primary.light,
        "primary-contrast": mainTheme.palette.primary.contrast,
      },
    },
  },
  plugins: [],
});
export default config;
