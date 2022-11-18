import { Typography } from "@mui/material";

export default function Header({ title }) {
  return (
    <Typography sx={{ textAlign: "center" }} variant="h2">
      {title}
    </Typography>
  );
}
