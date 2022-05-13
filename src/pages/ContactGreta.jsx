import HeaderG from "@components/HeaderG";
import React from "react";
import "./Form.css";

const ContactGreta = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Mail Sent!");
  };
  return (
    <div className="contactG">
      <HeaderG />
      <form>
        <label>
          First Name :
          <input type="text" name="name" />
        </label>
        <label>
          Second Name :
          <input type="text" name="name" />
        </label>
        <label>
          Email :
          <input type="text" name="name" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactGreta;
