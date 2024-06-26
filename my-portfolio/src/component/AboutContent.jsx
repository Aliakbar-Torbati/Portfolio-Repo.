import { Link } from "react-router-dom";
import mern from "../assets/mern2.png";
import "./AboutContentStyle.scss";

function AboutContent() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>Who am I?</h1>
        <p>
          After completing my bachelor's and master's degrees in Mechanical
          Engineering, I worked in that field for several years. But my passion
          for coding, sparked by exposure to web developing through my
          colleagues during my first job, ignited a deep interest in web
          development, ultimately leading me to switch careers to IT.
        </p>
        <p>
          Recently, I graduated from a Full-Stack web development Bootcamp in
          April 2024. During the program, I learned various technologies like
          JavaScript, React, Node.js, Express.js, MongoDB, Mongoose, JS Unit
          Testing (Jest), HTML, CSS, Git, and GitHub. Now, I feel confident to
          take on new challenges mostly as a junior web developer and start
          contributing right away.
        </p>
        <p>
          With my engineering background and web development skills, I'm eager
          to tackle problems creatively and contribute meaningfully to the tech
          industry. Let's connect on LinkedIn or my email to discuss potential
          collaborations or share ideas! Feel free to drop me a message anytime.
        </p>
        <p>
          <b>skills:</b> JavaScript, reactJS, JQuery, ExpressJS, NodeJS, MongoDB, MySQL, Mongoose, Responsive Design, CSS, SCSS, HTML5, JS Unit Testing(Jest), Rest API, Git, GitHub.
          <br />
          <b>Learning:</b> TypeScript.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="mern-img">
        <img
          src="https://www.solivatech.com/assets/uploads/media-uploader/mern-stack-development1622729001.png"
          alt="mern photo"
        />
      </div>
    </div>
  );
}

export default AboutContent;
