import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
import {
    DEFAULT_FACEBOOK_URL,
    DEFAULT_GOOD_READS_URL,
    DEFAULT_INSTAGRAM_URL,
} from "components/constants";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {
    faInstagram,
    faFacebookF,
    faGoodreadsG,
    faLinkedinIn,
} from "@fortawesome/fontawesome-free-brands";

const HEADER_MENU_ITEMS = [
    { id: "aboutme", label: "about", href: "/about" },
    { id: "artwork", label: "artwork", href: "/artwork" },
    { id: "shelf", label: "shelf", href: "/shelf" },
    {
        id: "publications",
        label: "publications",
        href: "/publications",
    },
    { id: "resume", label: "resume", href: "/resume" },
];
const SOCIAL_MEDIA_ITEMS = [
    {
        id: "insta",
        label: "Instagram",
        href: DEFAULT_INSTAGRAM_URL,
        icon: faInstagram,
        target: "_blank",
    },
    {
        id: "linkedin",
        label: "Linkedin",
        href: DEFAULT_INSTAGRAM_URL,
        icon: faLinkedinIn,
        target: "_blank",
    },
    {
        id: "facebook",
        label: "Facebook",
        href: DEFAULT_FACEBOOK_URL,
        icon: faFacebookF,
        target: "_blank",
    },
    {
        id: "goodreads",
        label: "good reads",
        href: DEFAULT_GOOD_READS_URL,
        icon: faGoodreadsG,
        target: "_blank",
    },
];

const SocialMediaIcon = ({ href, icon, label }) => (
    <IconButton href={href} target="_blank">
        <FontAwesomeIcon icon={icon} aria-label={label} />
    </IconButton>
);

export const Header = () => {
    return (
        <AppBar sx={{ backgroundColor: "white" }} position="static">
            <Container maxWidth={false}>
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
                                <Stack
                                    direction="row"
                                    sx={{
                                        display: { xs: "flex", md: "none" },
                                        justifyContent: "space-evenly",
                                    }}
                                >
                                    {SOCIAL_MEDIA_ITEMS.map((social) => (
                                        <SocialMediaIcon
                                            key={social.id}
                                            icon={social.icon}
                                            href={social.href}
                                            label={social.label}
                                        />
                                    ))}
                                </Stack>
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
                                    color: "pink",
                                    typography: "subtitle1",
                                    textTransform: "none",
                                    fontWeight: "bold",
                                    display: "block",
                                    "&:hover": {
                                        backgroundColor: "transparent",
                                    },
                                }}
                            >
                                {menuItem.label}
                            </Button>
                        ))}
                    </Box>
                    <Box
                        sx={{
                            ml: 4,
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                            textAlign: "center",
                        }}
                    >
                        {SOCIAL_MEDIA_ITEMS.map((social) => (
                            <SocialMediaIcon
                                key={social.id}
                                icon={social.icon}
                                href={social.href}
                                label={social.label}
                            />
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};