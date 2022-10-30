import React from "react";
import "../../styles/pages/Home.scss";
import image from "../../images/homeImg.svg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <header className="home__header">
        <p home__header--title>to do</p>
      </header>
      <main className="home__main">
        <h1 className="home__text--title">
          Manage your time & everything with{" "}
          <span className="text-color">to do</span>
        </h1>
        <figure h>
          <img
            className="home__img"
            src={image}
            alt="multitasking woman"
            title="multitasking woman"
          ></img>
        </figure>

        <h3 className="home__text--subtitle">
          When you are overhelmed by the amount of work you have on your
          plate...<span className="text-color">stop</span> and{" "}
          <span className="text-color">rethink</span>
        </h3>
        <section className="button-container">
          <Link to="/login" className="link">
            <button className="home__buttom main">login </button>
          </Link>

          <Link to="/register" className="link">
            <button className="home__buttom secondary">sign up </button>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Home;
