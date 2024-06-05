import { Link } from "react-router-dom";
import mern from '../assets/mern2.png'
import './AboutContentStyle.scss'

function AboutContent() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>Who am I?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio id
          consequuntur autem quibusdam ab obcaecati eaque nisi delectus repellat
          quod? Porro labore illo excepturi facere aperiam, error nam mollitia.
          Modi?
        </p>
        <Link to="/contact">
            <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="mern-img">
        <img src="https://www.solivatech.com/assets/uploads/media-uploader/mern-stack-development1622729001.png" alt="mern photo" />
      </div>
    </div>
  );
}

export default AboutContent;
