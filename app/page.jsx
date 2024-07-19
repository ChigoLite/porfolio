import Main from "@/Components/home";
import LandingPage from "@/Components/home/landingpage";
import { Grid, ThemeProvider } from "@mui/material";

import Theme from "@/theme";

function Home() {
  return (
    <main>
      <ThemeProvider theme={Theme}>
        <div className="home">
          <Main />
          <LandingPage />
        </div>
      </ThemeProvider>
    </main>
  );
}

export default Home;
