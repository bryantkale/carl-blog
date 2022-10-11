import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";

const gallery = [
  {
    // img: "/art_2017/Bryant_Cast_03.jpg",
    img: "",
    title: "",
    year: "2017",
  },
];
export default function Artwork() {
  return (
    <>
      <Box>
        <Typography variant="h5">Artist Statement</Typography>
        <Typography variant="body1">
          Having concrete meaning in a work of art doesn&apos;t intrigue me.
          Sitting in the audience, overhearing whispered comments in the crowd
          allows me to interact with art in a nuanced way that perplexes the
          thought. Why do I see an egg, when someone might see a chicken?
          Difference is what I yearn for. My association with art comes from my
          childhood bedroom in which I would create in solace instead of doing
          schoolwork. Attending Grinnell College gave me the opportunity to
          rediscover creativity by forcing me to see a new perspective. Instead
          of a pen and paper, I was giving goggles and wire cutters. Forced into
          a new environment with unknown tools to build. I became surrounded by
          inspiration; whether it be campus, or a professor&apos;s teaching
          style. My art revolves around perspective, body, and my own definition
          of interesting. I don&apos;t make for an audience per se, but I
          don&apos;t mind if you stop by and take a look.
        </Typography>
        <Stack direction="row">
          <Button>2015</Button>
          <Button>2016</Button>
          <Button>2017</Button>
          <Button>2018</Button>
          <Button>2019</Button>
        </Stack>
        {/*  */}
        <Stack direction="row">
          <Typography>2015</Typography>
          {gallery.map((value, index) => (
            <Image
              key={index}
              priority
              height={1600}
              width={2400}
              src={value.img}
            />
          ))}
        </Stack>
        <Stack>
          <Typography>2016</Typography>
        </Stack>
        <Stack>
          <Typography>2017</Typography>
        </Stack>
        <Stack>
          <Typography>2018</Typography>
        </Stack>
        <Stack>
          <Typography>2019</Typography>
        </Stack>
        <div>my artowkr</div>
      </Box>
    </>
  );
}
