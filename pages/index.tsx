import { Button, Stack, Typography } from "@mui/material";
import {
  DEFAULT_FACEBOOK_URL,
  DEFAULT_GITHUB_URL,
  DEFAULT_GOOD_READS_URL,
  DEFAULT_INSTAGRAM_URL,
  DEFAULT_LINKEDIN_URL,
} from "../components/constants";
import Header from "../components/Header/Header";

const SOCIAL_MEDIA_ITEMS = [
  {
    id: "insta",
    label: "Instagram",
    href: DEFAULT_INSTAGRAM_URL,
    target: "_blank",
  },
  {
    id: "linkedin",
    label: "Linkedin",
    href: DEFAULT_LINKEDIN_URL,
    target: "_blank",
  },
  {
    id: "facebook",
    label: "Facebook",
    href: DEFAULT_FACEBOOK_URL,
    target: "_blank",
  },
  {
    id: "goodreads",
    label: "Good Reads",
    href: DEFAULT_GOOD_READS_URL,
    target: "_blank",
  },
  {
    id: "github",
    label: "Github",
    href: DEFAULT_GITHUB_URL,
    target: "_blank",
  },
];

export default function AppHome() {
  return (
    <>
      <Header title="Caelin Bryant" />

      <Stack spacing={4} direction="column">
        <Typography sx={{ textAlign: "center" }}>
          。゜゜(´Ｏ`) ゜゜。
        </Typography>
        <Typography variant="body1">
          Hi I&apos;m Caelin/Carl. I&apos;m a fullstack web engineer with a
          focus in frontend. I reside in in Boston, MA. I enjoy working in
          React, Angular, Python, and else comes my way. I spend most of my time
          with my wonderful 7 year old dog named Katie!
        </Typography>
        <Typography variant="body1">
          I train at Esh Circus Arts in Somerville, MA, where I develop my
          contortion, handbalancing, and aerials skills. Currently, I&apos;m
          working on my aerial rope skills.
        </Typography>
        <Typography variant="body1">
          I have my 200 hour Yoga Teacher Training Certification and you can
          find me practicing outside on a beautiful sunny day. Nowadays, I train
          at various studios across South End/Back Bay (Down Under Yoga, The
          Studio, etc).
        </Typography>
      </Stack>

      <Stack
        sx={{ display: "flex" }}
        direction={{ sm: "column", md: "row" }}
        spacing={{ sm: 2 }}
      >
        {SOCIAL_MEDIA_ITEMS.map((social) => (
          <Button
            href={social.href}
            target={social.target}
            variant="outlined"
            key={social.id}
            fullWidth
            sx={{
              backgroundColor: "tomato",
              textAlign: "center",
              border: "double black",
              textDecoration: "none",
              color: "#55171d",
            }}
          >
            {social.label}
          </Button>
        ))}
      </Stack>
    </>
  );
}
