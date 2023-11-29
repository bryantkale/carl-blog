"use client";
import styled from "styled-components";
import React from "react";
import { Instagram, Linkedin, Facebook, Bookmark, GitHub } from "react-feather";
import {
  DEFAULT_FACEBOOK_URL,
  DEFAULT_GITHUB_URL,
  DEFAULT_GOOD_READS_URL,
  DEFAULT_INSTAGRAM_URL,
  DEFAULT_LINKEDIN_URL,
} from "./components/constants";
import Link from "next/link";

const SOCIAL_MEDIA_ITEMS = [
  {
    id: "insta",
    label: "instagram",
    href: DEFAULT_INSTAGRAM_URL,
    target: "_blank",
  },
  {
    id: "linkedin",
    label: "linkedin",
    href: DEFAULT_LINKEDIN_URL,
    target: "_blank",
  },
  {
    id: "facebook",
    label: "facebook",
    href: DEFAULT_FACEBOOK_URL,
    target: "_blank",
  },
  {
    id: "goodreads",
    label: "bookmark",
    href: DEFAULT_GOOD_READS_URL,
    target: "_blank",
  },
  {
    id: "github",
    label: "github",
    href: DEFAULT_GITHUB_URL,
    target: "_blank",
  },
];

// Testing styled components

const Frame = styled.section`
  display: block;
  border: pink dotted 5px;
  font-size: 18;
  margin-left: auto;
  margin-right: auto;
`;

const Wrapper = styled.section`
  margin-left: auto;
  margin-right: auto;
  padding: 5em;
  background: papayawhip;
  max-width: 1000px;
  border: tomato dotted 5px;
`;
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;
const Body = styled.section`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
  margin-bottom: 1em;
`;

const Actions = styled.section`
  background: "#BF4F74";
  color: "white";

  font-size: 1em;
  margin: 1em;
  padding: 1em;
  border: 2px solid #bf4f74;
  border-radius: 50%;
  display: inline-block;
`;

const ActionWrapper = styled.section`
  margin-left: auto;
  margin-right: auto;
  width: 35em;
`;

const ICON_MAP = {
  instagram: Instagram,
  linkedin: Linkedin,
  facebook: Facebook,
  bookmark: Bookmark,
  github: GitHub,
};

function AppHome() {
  return (
    <Wrapper>
      <Title>Caelin Bryant</Title>

      <Frame>
        <Body style={{ textAlign: "center" }}>。゜゜(´Ｏ`) ゜゜。</Body>

        <Body>
          Hi I&apos;m Caelin/Carl. I&apos;m a software engineer with a focus in
          frontend. I reside in in New York, NY. I enjoy working in Python, and
          else comes my way. I spend most of my time with my wonderful 8 year
          old dog named Katie!
        </Body>
        <Body>
          I&apos;ve previously trained at Esh Circus Arts in Somerville, MA,
          where I develop my contortion, handbalancing, and aerials skills.
        </Body>
        <Body>
          I have my 200 hour Yoga Teacher Training Certification and you can
          find me practicing outside on a beautiful sunny day. Nowadays, I train
          at various studios across South End/Back Bay (Down Under Yoga, The
          Studio, etc).
        </Body>
      </Frame>

      <ActionWrapper>
        {SOCIAL_MEDIA_ITEMS.map(({ id, href, label }) => {
          const IconComponent = ICON_MAP[label];
          return (
            <Actions
              key={id}
              style={{
                backgroundColor: "tomato",
                textAlign: "center",
                border: "double black",
                textDecoration: "none",
                color: "#55171d",
                paddingRight: "1em",
                fontSize: "18px",
              }}
            >
              <Link href={href}>
                {IconComponent ? <IconComponent /> : <></>}
              </Link>
            </Actions>
          );
        })}
      </ActionWrapper>
      <Actions>
        <Link href={"/boozeShelf"}>Booze Shelf</Link>
      </Actions>
    </Wrapper>
  );
}

export default React.memo(AppHome);
