import React from "react";
import "../../styles/pages/Error404.scss";
import image from "../../images/undraw_taken_re_yn20.svg";

const Error404 = () => {
  return (
    <section className="error">
      <h2 className="error__title">Opss!...</h2>
      <figure error__image>
        <img
          className="error__image--item"
          src={image}
          alt="dsff"
          title="dfds"
        ></img>
      </figure>

      <h3 className="error__subtitle">
        Page not found. Sorry, we can't find the page you are looking for...
      </h3>
      <button className="error__button">go home</button>
    </section>
  );
};

export default Error404;
