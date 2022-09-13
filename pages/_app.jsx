import { ThemeProvider } from '@mui/material';
import '../styles/global.css';
import { DefaultTheme } from '../components/themes/DefaultTheme';

export default function App({ Component, pageProps }) {
    return <ThemeProvider theme={DefaultTheme}><Component {...pageProps} /></ThemeProvider>;
}