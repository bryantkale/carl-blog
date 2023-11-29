import createTheme from "@mui/material/styles/createTheme";
export const DefaultTheme = createTheme({
  typography: {
    h1: {
      fontFamily: ["'EB Garamond', serif;"].join(", "),
      fontWeight: "bold",
      color: "#151515",
    },
    h2: {
      fontFamily: ["'EB Garamond', serif;"].join(", "),
      fontWeight: "bold",
      color: "#151515",
    },
    h3: {
      fontFamily: ["'EB Garamond', serif;"].join(", "),
      fontWeight: "bold",
      color: "#151515",
    },
    h4: {
      fontSize: "34px",
      fontFamily: ["'EB Garamond', serif;"].join(", "),
      fontWeight: 600,
      lineHeight: "42px",
      color: "#151515",
    },
    h5: {
      fontFamily: ["'EB Garamond', serif;"].join(", "),
      fontWeight: "bold",
      color: "#151515",
    },
    h6: {
      fontFamily: ["'EB Garamond', serif;"].join(", "),
      fontSize: "20px",
      fontWeight: 400,
      lineHeight: "32px",
      color: "#151515",
    },
    subtitle2: {
      fontFamily: ["'EB Garamond', serif;"].join(", "),
    },
    body1: {
      fontFamily: ["'EB Garamond', serif;"].join(", "),
      fontWeight: 400,
    },
    button: {
      fontSize: "16px",
      fontWeight: 700,
      lineHeight: "26px",
    },
    caption: {
      fontSize: "12px",
      fontWeight: "bold",
      lineHeight: "20px",
      color: "#9A9A9A",
    },
    allVariants: {
      fontFamily: ["'EB Garamond', serif;"].join(", "),
    },
  },
  palette: {
    primary: {
      main: "#ff9090",
    },
    secondary: {
      main: "#9a1b00",
    },
    background: {
      default: "#fff2e4",
      paper: "rgba(255,255,229,0.49)",
    },
    text: {
      primary: "#000000",
    },
  },
});
