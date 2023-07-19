import { Fragment } from "react";
import "./App.css";
import { Signup } from "./components/Signup";
import bgimg from "./flat-lay.jpg";

function App() {
  return (
    <Fragment>
    <img src={bgimg} alt="" width="100%" height="100%" style={{position:"absolute", overflow:"hidden"}} />
    <div className="col-md-5">
    <Signup />
  </div>
    </Fragment>
  );
}

export default App;
