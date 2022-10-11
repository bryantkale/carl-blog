import { ThemeProvider } from "@mui/material";
import "../styles/global.css";
import { DefaultTheme } from "../components/themes/DefaultTheme";
import DefaultLayout from "../components/DefaultLayout";

export default function App({ Component, pageProps }) {
	return (
		<ThemeProvider theme={DefaultTheme}>
			<DefaultLayout home>
				<Component {...pageProps} />
			</DefaultLayout>
		</ThemeProvider>
	);
}
