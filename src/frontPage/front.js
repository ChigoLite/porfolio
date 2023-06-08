import logo from "../logo.svg";
import "../App.css";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

function FrontPage({ display }) {
  return (
    <div className={display ? "App" : "fade"}>
      <header className={display ? "App-header" : "fade2"}>
        <h1>ChigoLite</h1>
        <AccountBoxIcon sx={{ color: "#00cba9", fontSize: "64px" }} />
      </header>
    </div>
  );
}

export default FrontPage;
