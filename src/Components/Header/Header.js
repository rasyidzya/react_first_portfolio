import React from "react";
import "./Header.css";
import Typical from "react-typical";
import profileImg from "../../assets/profile.png";

const Header = () => {
  return (
    <div>
      <div className="header-container">
        {/* header content */}
        <div className="header-content">
          <h1>Hi I'am</h1>
          <div className="fullname">Zya Jamaluddin Al Rasyid</div>
          <h2>
            I'm a {""}
            <Typical
              steps={[
                "Full Stack Developer 🚀",
                1000,
                "React Developer 🆒",
                1000,
                "Front End Developer 📺",
                1000,
              ]}
              loop={Infinity}
              wrapper="b"
            />
          </h2>
          <p2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit quos
            distinctio tempora eum harum eligendi sequi obcaecati ea quis
            blanditiis perferendis neque repellat adipisci dolorem modi qui,
            assumenda dolore error.
          </p2>
          {/* payment links */}
          <div className="header-payment-container">
            <button>Hire me</button>
            <i className="fa-brands fa-paypal"></i>
            <i className="fa-brands fa-cc-visa"></i>
            <i className="fa-brands fa-cc-mastercard"></i>
            <i className="fa-brands fa-cc-amex"></i>
          </div>
        </div>
      </div>
      {/* image container */}
      <div className="profile-img-container">
        <img src={profileImg} alt="profile" />
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>
    </div>
  );
};

export default Header;
