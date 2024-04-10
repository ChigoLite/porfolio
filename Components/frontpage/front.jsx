import Image from "next/image";
import { FaUser } from "react-icons/fa";
import logo from "./assets/logo.jpeg";
function FrontPage({ display }) {
  return (
    <div className={display ? "App" : "fade"}>
      <header className={display ? "App-header" : "fade2"}>
        <h1>ChigoLite</h1>
        <Image src={logo} alt="Logo" width={250} />
      </header>
    </div>
  );
}

export default FrontPage;
