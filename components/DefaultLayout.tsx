import { Container } from "@mui/material";

export default function DefaultLayout({ children }) {
  return (
    <Container
      fixed
      sx={{
        backgroundColor: "#f6fcf6",
      }}
    >
      <main>{children}</main>
    </Container>
  );
}
