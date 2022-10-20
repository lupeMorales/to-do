import React from "react";
import "../../styles/pages/Error404.scss";
import image from "../../images/errorImg.svg";

const Error404 = () => {
  return (
    <section className="error">
      <h2 className="error__title">Opss!...</h2>
      <figure error__image>
        <img
          className="error__image--item"
          src={image}
          alt="404 error imag"
          title="404 erro image"
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
