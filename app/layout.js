import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Context from "@/Components/context";
import Footer from "../Components/home/footer";
export const metadata = {
  title: "ChigoLite",
  description:
    "Explore a collection of software samples work, showcasing expertise in software development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Context>{children}</Context>
        <Footer />
      </body>
    </html>
  );
}
