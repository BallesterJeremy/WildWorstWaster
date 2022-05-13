import HeaderG from "../components/HeaderG";
import React from "react";
import "./contactG.css";

const ContactGreta = () => {
  return (
    <div>
      <HeaderG />
      <h1>contact G</h1>
    </div>
  );
};

export default ContactGreta;

/*export default function Contact() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  return (
    <div>
    <HeaderG />
    <h1>contact G</h1>
  </div>
    <form className="my-form">
      <input type="hidden" name="form-name" value="contact" />
      <h1 className="my-title">Lets us improve the cat fight experience</h1>
      <label htmlFor="name" className="my-label-name">
        Name :
      </label>
      <input
        name="name"
        className="input-contact-name"
        placeholder="Your name"
        id="fullName"
        type="text"
        value={fullName}
        onChange={handleFullNameChange}
        required
      />
      <label htmlFor="email" className="my-label-email">
        Email :
      </label>
      <input
        name="email"
        placeholder="Your email adress"
        className="input-contact-email"
        id="email"
        type="email"
        value={email}
        onChange={handleEmailChange}
        required
      />
      <label htmlFor="message " className="my-label-message">
        Message :
      </label>
      <textarea
        name="message"
        className="textarea-contact"
        id="message"
        type="message"
        placeholder="Write your message here..."
        value={message}
        onChange={handleMessageChange}
        required
      />
      <button id="btn" type="submit">
        SUBMIT
      </button>
      <img className="img-contact" src={image} alt="griffe" />
      <Footer />
    </form>
  );
}*/
