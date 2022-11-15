import { Container } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
export default function Footer() {
  return (
    <Container
      sx={{
        // width: "100%",
        // height: "100px",
        // borderTop: "1px solid #eaeaea",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FavoriteIcon fontSize="small" />
    </Container>
  );
}
