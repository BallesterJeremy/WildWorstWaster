import HeaderT from "@components/HeaderT";
import React from "react";

const ContactTrump = () => {
  return (
    <div>
      <HeaderT />
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
        <input type="button" name="Submit" />
      </form>
    </div>
  );
};

export default ContactTrump;
