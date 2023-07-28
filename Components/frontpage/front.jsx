import {FaUser} from 'react-icons/fa'
function FrontPage({ display }) {
  return (
    <div className={display ? "App" : "fade"}>
      <header className={display ? "App-header" : "fade2"}>
        <h1>ChigoLite</h1>
        <FaUser style={{ color: "#00cba9", fontSize: "64px" }} />
      </header>
    </div>
  );
}

export default FrontPage;