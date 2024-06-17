import "./FooterStyle.scss";
import { FaHome, FaPhone, FaLinkedin, FaGithub, FaRegAddressCard } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <div className="footer">
      <div className="contact-footer">
        <div className="location">
          <FaHome size={22} style={{ color: "#fff" }} />
          <p>Duisburg, Germany</p>
        </div>
        <div className="location">
          <FaPhone size={18} style={{ color: "#fff" }} />
          <p>+4915732273024</p>
        </div>
      </div>
      <div className="gmail-footer">
        <div className="location">
          <MdEmail size={20} style={{ color: "#fff" }} />
          <p>alitorbati1368@gmail.com</p>
        </div>
        <div className="contact-icons">
        <a href="https://www.linkedin.com/in/aliakbar-torbati-juniordeveloper" target="_blank"><FaLinkedin size={35} style={{ color: "#fff" }} /></a>   
        <a href="../../public/AliakbarTorbatiCV.pdf" download="My-CV.pdf"><FaRegAddressCard  size={36} style={{ color: "#fff" }} /></a>  
        <a href="https://github.com/Aliakbar-Torbati?tab=repositories" target="_blank"><FaGithub size={35} style={{ color: "#fff" }} /></a>          
        
       
          
        </div>
      </div>
    </div>
  );
}

export default Footer;
