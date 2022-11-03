import Head from "next/head";
import { siteTitle } from "../components/DefaultLayout";
import utilStyles from "../styles/utils.module.css";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import {
  DEFAULT_FACEBOOK_URL,
  DEFAULT_GOOD_READS_URL,
  DEFAULT_INSTAGRAM_URL,
  DEFAULT_LINKEDIN_URL,
} from "../components/constants";
import {
  faFacebookF,
  faGoodreadsG,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

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
    href: DEFAULT_LINKEDIN_URL,
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
export default function About() {
  return (
    <Container>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Stack direction={"row"}>
        <Box
          sx={{ border: 2, borderRadius: "16px", borderColor: "primary.main" }}
        >
          <Stack
            direction="column"
            spacing={2}
            className={utilStyles.headingMd}
            mt={10}
            ml={2}
            mr={2}
            sx={{ textAlign: "left" }}
          >
            <IconButton>
              <AutoAwesomeIcon />
            </IconButton>
            <Typography variant="subtitle1">
              Hi I&apos;m Caelin/Carl. I&apos;m a fullstack web engineer
              residing in in Boston, MA. I enjoy working in React, Angular,
              Python, and else comes my way. I also have a wonderful 7 year old
              dog named Katie!
            </Typography>
            <Typography variant="subtitle1">
              I train at Esh Circus Arts in Somerville, MA, where I develop my
              contortion, handbalancing skills, and aerials. This coming season,
              I&apos;ll be working on my aerial rope skills.
            </Typography>
            <Typography variant="subtitle1">
              I have my 200 hour Yoga Teacher Training Certification and you can
              find me practicing outside on a beautiful sunny day. Nowadays, I
              train at various studios across South End/Back Bay.
            </Typography>
          </Stack>
        </Box>
        <Image width={900} height={1200} src="/images/IMG_0054.JPG" />
      </Stack>
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

      <Stack
        direction="row"
        sx={{
          justifyContent: "space-evenly",
          ml: 4,
          mt: 10,
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
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
    </Container>
  );
}
