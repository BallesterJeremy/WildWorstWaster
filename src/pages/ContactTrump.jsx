import HeaderT from "@components/HeaderT";
import React from "react";
import "./Form.css";

const ContactTrump = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Mail Sent!");
  };
  return (
    <div>
      <HeaderT />
      <div className="contactT">
        <form className="contactT">
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
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactTrump;
