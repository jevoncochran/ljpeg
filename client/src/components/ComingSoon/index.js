import React, { useState } from "react";
import "./ComingSoon.scss";
import ljpegPlaceHolder from "../../assets/images/home/ljpeg_placeholder.jpg";
import { sendRequest } from "./sendRequest";

const ComingSoon = () => {
  const [inputActive, setInputActive] = useState(false);

  const [request, setRequest] = useState({
    email: "",
  });

  const handleInputChange = (e) => {
    setRequest({
      ...request,
      email: e.target.value,
    });
  };

  return (
    <div className="cs">
      <div
        className="cs-img"
        style={{ backgroundImage: `url(${ljpegPlaceHolder})` }}
      ></div>
      <p className="cs-site-title">l.jpeg</p>
      <div className="cs-cta-container">
        <p className="cs-cta-txt">SITE COMING SOON</p>
        <button
          className={inputActive ? "cs-cta-btn-hide" : "cs-cta-btn"}
          onClick={() => setInputActive(true)}
        >
          DROP IT LIKE IT'S HOT
        </button>
        <br />
        <form onSubmit={sendRequest}>
          <input
            className={inputActive ? "cs-cta-input" : "cs-cta-input-hide"}
            type="text"
            name="email"
            placeholder="Please enter your email..."
            onChange={handleInputChange}
          />
        </form>
      </div>
    </div>
  );
};

export default ComingSoon;
