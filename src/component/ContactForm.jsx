import "./ContactFormStyle.scss";

function ContactForm() {
  return (
    <div className="contactform">
        <form className="form">
            <label>Your Name</label>
            <input type="text" />
            <label>Email</label>
            <input type="email" />
            <label>Subject</label>
            <input type="text" />
            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here" />
            <button className="btn">Submit</button>
        </form>
      
    </div>
  )
}

export default ContactForm
