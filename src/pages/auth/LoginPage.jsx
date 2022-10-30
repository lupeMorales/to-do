import React from "react";
import "../../styles/pages/LoginPage.scss";
/* import LoginFormik from "./components/pures/loginFormik"; */

const LoginPage = () => {
  return (
    <div className="login">
      <header className="login__header">
        <p login__header--title>to do</p>
      </header>
      <main className="login__main">
        <h2 className="login__text">
          welcome back, <span className="text-color">log in!</span>
        </h2>

        <section className="login__form">{/*     <LoginFormik /> */}</section>
      </main>
    </div>
  );
};

export default LoginPage;
