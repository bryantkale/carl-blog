import StyledComponentsRegistry from "./lib/registry";
import "./styles.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <footer>Page rendered on {new Date().toLocaleString()}</footer>
      </body>
    </html>
  );
}
