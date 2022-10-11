import {
	AppBar,
	Box,
	Button,
	Container,
	Drawer,
	IconButton,
	Link,
	List,
	ListItemButton,
	ListItemText,
	Stack,
	Toolbar,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const HEADER_MENU_ITEMS = [
	{ id: "aboutme", label: "about", href: "/about" },
	{ id: "artwork", label: "artwork", href: "/artwork" },
	{ id: "bookshelf", label: "bookshelf", href: "/bookshelf" },
	// { id: "publications", label: "publications", href: "/publications" },
	{ id: "resume", label: "resume", href: "/resume" },
];

export const Header = () => {
	return (
		<AppBar color="primary" position="static" sx={{ marginBottom: "2em" }}>
			{/* <Container> */}
			<Toolbar>
				{/* smaller screen */}
				<Box sx={{ display: { xs: "flex", md: "none" } }}>
					<IconButton
						size="large"
						aria-haspopup="true"
						aria-controls="menu-appbar"
						aria-label="Open header menu"
						color="primary"
					>
						<MenuIcon />
					</IconButton>
					<Drawer
						anchor="left"
						aria-label="Header menu"
						ModalProps={{
							keepMounted: true,
						}}
					>
						<Box sx={{ width: 250 }} role="presentation">
							<IconButton
								sx={{ margin: 1 }}
								size="large"
								aria-label="Close header menu"
							>
								<CloseIcon />
							</IconButton>
							<List sx={{ marginLeft: 1 }}>
								{HEADER_MENU_ITEMS.map((link, index) => (
									<ListItemButton
										key={index}
										component={Link}
										href={link.href}
										sx={{
											"&:hover": {
												backgroundColor: "transparent",
											},
										}}
									>
										<ListItemText primary={link.label} color="primary.main" />
									</ListItemButton>
								))}
							</List>
						</Box>
					</Drawer>
				</Box>
				{/* larger screen */}
				<Box
					sx={{
						ml: 2,
						flexGrow: 1,
						display: { xs: "none", md: "flex" },
						textAlign: "center",
					}}
				>
					{HEADER_MENU_ITEMS.map((menuItem, index) => (
						<Button
							key={`${menuItem.id}-${index}`}
							href={menuItem.href}
							sx={{
								my: 2,
								color: "#ffe9ed",
								fontWeight: "bold",
								display: "block",
							}}
						>
							{menuItem.label}
						</Button>
					))}
				</Box>
			</Toolbar>
			{/* </Container> */}
		</AppBar>
	);
};
