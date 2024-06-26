import "./IntroStyle.scss";
import IntroImg from "../assets/intro.jpg";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div className="introContainer">
      <div className="introClass">
        <img className="introImg" src={IntroImg} alt="intro Image" />
      </div>
      <div className="introContent">
        <p>I am Aliakbar Torbati</p>
        <h1>Web Developer</h1>
        <div>
          <Link className="btn" to={"/projects"}>
            Projects
          </Link>
          <Link className="btn btn-light" to={"/contact"}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;
