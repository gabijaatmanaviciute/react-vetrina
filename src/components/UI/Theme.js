import { createTheme } from "@material-ui/core/styles";

const white = "#FFFFFF";
const black = "#0A2540";
const blue = "#21B8F9";
const purple = "#6979F8";
const lila = "#BE52F2";
const red = "#F33451";
const orange = "#FFA26B";
const sunflower = "#FFCF5C";
const green = "#00C48C";
const lightBlue = "#E9F8FE";
const lightGrey = "#E5E5E5";
const hoverGrey = "background: #F7F7F7";

export default createTheme({
  props: {
    // Name of the component
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  palette: {
    common: {
      white: `${white}`,
      black: `${black}`,
      blue: `${blue}`,
      purple: `${purple}`,
      lila: `${lila}`,
      red: `${red}`,
      orange: `${orange}`,
      sunflower: `${sunflower}`,
      green: `${green}`,
    },
    primary: {
      main: `${blue}`,
    },
    secondary: {
      main: `${red}`,
    },
    text: {
      primary: "#103B66",
    },
    background: {
      paper: `${white}`,
      default: `${white}`,
      secondaryList: `${lightBlue}`,
      lightGrey: `${lightGrey}`,
      hoverGrey: `${hoverGrey}`,
    },
    divider: "rgba(0, 0, 0, 0.32)",
  },
  shape: {
    borderRadius: 5,
  },
  mixins: {
    toolbar: {
      minHeight: "3.74rem",
      "@media (min-width:600px)": {
        minHeight: "3.75rem",
      },
    },
  },
  typography: {
    fontFamily: "Noto Sans HK",
    fontSize: 16,
    h1: {
      fontFamily: "Noto Sans HK",
      fontSize: "2.125rem",
      fontWeight: 500,
      lineHeight: "2.4375rem",

    },
    h2: {
      fontFamily: "Noto Sans HK",
      fontWeight: 500,
      fontSize: "1.75rem",
      lineHeight: "2rem",

    },
    h3: {
      fontFamily: "Noto Sans HK",
      fontWeight: 500,
      fontSize: "1.375rem",
      lineHeight: "1.6875rem",

    },
    h4: {
      fontFamily: "Noto Sans HK",
      fontWeight: 500,
      fontSize: "1.25rem",
      lineHeight: "1.5625rem",

    },
    h5: {
      fontFamily: "Noto Sans HK",
      fontWeight: 500,
      fontSize: "1.0625rem",
      lineHeight: "1.375rem",

    },
    h6: {
      fontFamily: "Noto Sans HK",
      fontWeight: 500,
      fontSize: "0.9375rem",
      lineHeight: "1.25rem",

    },
    bodyMedium: {
      fontWeight: 500,
      fontSize: "1.0625rem",
      lineHeight: "1.5rem",
    },
    bodySmall: {
      fontWeight: 400,
      fontSize: "0.9375rem",
      lineHeight: "1.5rem",
    },
    button: {
      fontFamily: "Source Sans Pro",
      fontWeight: 600,
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
    },
    input: {
      fontFamily: "Source Sans Pro",
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: "1.125rem",

    },
    label: {
      fontFamily: "Source Sans Pro",
      fontWeight: 500,
      fontSize: "0.9375rem",
      lineHeight: "1.25rem",

    },
  },
});
