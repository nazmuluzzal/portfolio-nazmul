import React from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dp8k19d",
        "template_wu2qld6",
        e.target,
        "user_4ReygPdgBLZbNhIwziQly"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div
      id="contact"
      className="text-center mt-5"
      style={{ overflowX: "hidden" }}
    >
      <h1>
        <span className="span-txt">Contact</span> With Me
      </h1>
      {/* <h3>Get In Touch</h3> */}
      <h4>Send Your Message</h4>
      <form className="contact-form p-4 mx-auto mt-5" onSubmit={sendEmail}>
        <div className="form-group mt-4">
          <input
            name="name"
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Name"
            required
          />
        </div>
        <div className="form-group mt-4">
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group mt-4">
          <textarea
            name="message"
            className="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Your Message"
            rows="3"
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn submit-btn text-white w-100 mt-3"
          value="Send"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
