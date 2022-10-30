import React from "react";
import "../../styles/pages/SingUpPage.scss";
/* import SingUFormik from "./components/pures/loginFormik"; */

const SingUPage = () => {
  return (
    <div className="singup">
      <header className="singup__header">
        <p singup__header--title>to do</p>
      </header>
      <main className="singup__main">
        <h2 className="singup__text">
          hello, <span className="text-color">sing up!</span>
        </h2>

        <section className="singup__form">{/*     <SingUFormik /> */}</section>
      </main>
    </div>
  );
};

export default SingUPage;
