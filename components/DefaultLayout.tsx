import { Container } from "@mui/material";

export const siteTitle = "CNB";

export default function DefaultLayout({ children }) {
  return (
    <Container
      sx={{
        backgroundColor: "#f6fcf6",
      }}
    >
      <main>{children}</main>
    </Container>
  );
}
