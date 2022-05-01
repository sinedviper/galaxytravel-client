import React from "react";
import "./form.css";

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="email"></input>
        <label>Subject</label>
        <input type="text"></input>
        <label>Details</label>
        <textarea rows="6" placeholder="Type a shotr meassge here" />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
