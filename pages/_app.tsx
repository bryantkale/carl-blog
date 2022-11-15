import { ThemeProvider } from "@mui/material";
import "../styles/global.css";
import { DefaultTheme } from "../components/themes/DefaultTheme";
import DefaultLayout from "../components/DefaultLayout";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ThemeProvider>
  );
}
