import Head from "next/head";
import { siteTitle } from "../components/DefaultLayout";
import utilStyles from "../styles/utils.module.css";

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
      <Box>
        <Stack direction="column" spacing={2} className={utilStyles.headingMd}>
          <Typography variant="body1">
            Hi I&apos;m Carl. I&apos;m a fullstack web engineer residing in
            Boston, MA. I enjoy working in React, Angular, Python, and whatever
            else comes my way.
          </Typography>
          <Typography variant="body1">
            I train at Esh Circus Arts in Somerville, MA, where I develop my
            contortion and handbalancing skills.
          </Typography>
          <Typography variant="body1">
            I have my 200 hour Yoga Teacher Training Certification and you can
            find me practicing outside on a beautiful sunny day. Nowadays, I
            train at The Studio in the SouthEnd/Back Bay.
          </Typography>
        </Stack>
      </Box>
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
