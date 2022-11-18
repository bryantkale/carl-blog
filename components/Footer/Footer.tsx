import { Container } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
export default function Footer() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FavoriteIcon fontSize="small" />
    </Container>
  );
}
