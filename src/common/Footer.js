import React from "react";
import "./Footer.css";
function Footer() {
  console.log("from footer");
  return (
    <div className="footer-container">
      <div>
        <a>Copyright</a>{" "}
      </div>
      <div>
        {" "}
        <a href="https://www.facebook.com/Hasan.Leva.8/" target="_blank">
          Facebook
        </a>
      </div>
      <div>
        {" "}
        <a href="https://github.com/hssanbzlm" target="_blank">
          Github
        </a>
      </div>
      <div href="https://www.linkedin.com/in/hssanbouzlima/" target="_blank">
        <a>Linkedin</a>
      </div>
      <div>
        {" "}
        <a href="https://twitter.com/HBouzlima" target="_blank">
          Twitter
        </a>
      </div>
    </div>
  );
}

export default Footer;
