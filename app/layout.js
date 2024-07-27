import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Context from "@/Components/context";
import { ThemeProvider } from "@mui/material";
import Theme from "@/theme";
import Footer from "../Components/home/footer";
import Navbar from "../Components/home/navbar";

export const metadata = {
  title: "ChigoLite",
  description: "software enginner portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={Theme}>
          <div className="home">
            <Navbar />
            <Context>{children}</Context>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
