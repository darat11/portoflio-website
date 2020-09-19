import React from "react";

import Button from "./Button";

import formStyles from "./form.module.css";

export default function Form() {
  return (
    <form>
      <div className={formStyles.section}>
        <label>Email</label>
        <div>
          <input
            className="u-full-width"
            type="email"
            name="email"
            placeholder="name@mail.com"
            required
          />
        </div>
      </div>
      <div className={formStyles.section}>
        <label>Message</label>
        <div>
          <textarea
            className="u-full-width"
            type="text"
            placeholder="Hi Meldin. Could you send me a qoute? Here is the link for the desing => dribble.com"
          />
        </div>
      </div>
      <Button className={formStyles.button} text="Send" type="submit" />
    </form>
  );
}
