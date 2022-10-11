import createTheme from "@mui/material/styles/createTheme";
import { VarelaRound } from "./VarelaRound-Regular.ttf";

// /**
//  * The default theme.
//  */
// export const DefaultTheme = createTheme({
// 	typography: {
// 		h1: {
// 			fontFamily: ["Arial", "serif"].join(", "),
// 			fontWeight: "bold",
// 			color: "#151515",
// 		},
// 		h2: {
// 			fontFamily: ["Arial", "serif"].join(", "),
// 			fontWeight: "bold",
// 			color: "#151515",
// 		},
// 		h3: {
// 			fontFamily: ["Arial", "serif"].join(", "),
// 			fontWeight: "bold",
// 			color: "#151515",
// 		},
// 		h4: {
// 			fontSize: "34px",
// 			fontFamily: ["Arial", "serif"].join(", "),
// 			fontWeight: 600,
// 			lineHeight: "42px",
// 			color: "#151515",
// 		},
// 		h5: {
// 			fontFamily: ["Arial", "serif"].join(", "),
// 			fontWeight: "bold",
// 			color: "#151515",
// 		},
// 		h6: {
// 			fontFamily: ["Arial", "serif"].join(", "),
// 			fontSize: "20px",
// 			fontWeight: 400,
// 			lineHeight: "32px",
// 			color: "#151515",
// 		},
// 		subtitle2: {
// 			fontFamily: ["Arial", "serif"].join(", "),
// 		},
// 		body1: {
// 			fontFamily: ["Arial", "serif"].join(", "),
// 			fontWeight: 400,
// 		},
// 		button: {
// 			fontSize: "16px",
// 			fontWeight: 700,
// 			lineHeight: "26px",
// 		},
// 		caption: {
// 			fontSize: "12px",
// 			fontWeight: "bold",
// 			lineHeight: "20px",
// 			color: "#9A9A9A",
// 		},
// 		allVariants: {
// 			fontFamily: ["Arial", "serif"].join(", "),
// 		},
// 	},
// 	palette: {
// 		primary: {
// 			main: "#000000",
// 		},
// 		secondary: {
// 			main: "#FFFFFF",
// 		},
// 		error: {
// 			main: "#F44336",
// 		},
// 		warning: {
// 			main: "#ED6C02",
// 		},
// 		info: {
// 			main: "#2196F3",
// 		},
// 		success: {
// 			main: "#5CA968",
// 		},
// 		text: {
// 			primary: "#000000",
// 		},
// 	},
// 	components: {
// 		MuiButtonBase: {
// 			defaultProps: {
// 				disableRipple: true,
// 			},
// 		},
// 		MuiButton: {
// 			defaultProps: {
// 				disableElevation: true,
// 			},
// 			styleOverrides: {
// 				root: {
// 					borderRadius: 24,
// 				},
// 			},
// 		},
// 		MuiChip: {
// 			styleOverrides: {
// 				root: ({ theme }) => ({
// 					fontWeight: 800,
// 					color: theme.palette.common.white,
// 					textTransform: "uppercase",
// 					fontFamily: ["Arial", "serif"].join(", "),
// 				}),
// 			},
// 		},
// 		MuiAppBar: {
// 			defaultProps: {
// 				elevation: 0,
// 			},
// 		},
// 	},
// });

// import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

export const DefaultTheme = createTheme({
	typography: {
		h1: {
			fontFamily: ["Arial", "serif"].join(", "),
			fontWeight: "bold",
			color: "#151515",
		},
		h2: {
			fontFamily: ["Arial", "serif"].join(", "),
			fontWeight: "bold",
			color: "#151515",
		},
		h3: {
			fontFamily: ["Arial", "serif"].join(", "),
			fontWeight: "bold",
			color: "#151515",
		},
		h4: {
			fontSize: "34px",
			fontFamily: ["Arial", "serif"].join(", "),
			fontWeight: 600,
			lineHeight: "42px",
			color: "#151515",
		},
		h5: {
			fontFamily: ["Arial", "serif"].join(", "),
			fontWeight: "bold",
			color: "#151515",
		},
		h6: {
			fontFamily: ["Arial", "serif"].join(", "),
			fontSize: "20px",
			fontWeight: 400,
			lineHeight: "32px",
			color: "#151515",
		},
		subtitle2: {
			fontFamily: ["Arial", "serif"].join(", "),
		},
		body1: {
			fontFamily: ["Arial", "serif"].join(", "),
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
			fontFamily: ["Arial", "serif"].join(", "),
		},
	},
	palette: {
		// type: 'light',
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
