import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { UserClass } from "../../models/userClass";
import { ROLE } from "../../models/role.enum";

const RegisterFormik = () => {
  /*  let user = new UserClass(); */

  const initialCredential = {
    userName: "",
    email: "",
    password: "",
    confirm: "",
    role: ROLE.USER,
  };

  const registerSchema = Yup.object().shape({
    userName: Yup.string()
      .min(6, "Username too Short!")
      .max(12, "Username too Long!")
      .required("User Name is required"),

    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),

    password: Yup.string()
      .min(8, "Password too Short!")
      .required("Password is required"),

    confirm: Yup.string()
      .when("password", {
        is: (value) => (value && value.lenght > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Password does not match! "
        ),
      })
      .required("Confirm your password"),
  });

  const submit = (values) => {
    alert("register user");
  };

  return (
    <div>
      <Formik
        initialValues={{ initialCredential }}
        validationSchema={registerSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
        }}
      >
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
          <Form>
            <label htmlFor="userName">Username</label>
            <Field id="userName" name="userName" placeholder="user name" />
            {errors.userName && touched.userName && (
              <div>
                <ErrorMessage name="userName" />
              </div>
            )}

            <label htmlFor="email">Email</label>
            <Field id="email" name="email" placeholder="yourmail@mail.com" />
            {errors.email && touched.email && (
              <div>
                <ErrorMessage name="email" />
              </div>
            )}

            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              placeholder="your password"
              type="password"
            />
            {errors.password && touched.password && (
              <div>
                <ErrorMessage name="password" />
              </div>
            )}

            <label htmlFor="confirmPass">Confrim Password</label>
            <Field
              id="confirmPass"
              name="confirmPass"
              placeholder="Confirm your password"
              type="password"
            />
            {errors.confirm && touched.confirm && (
              <div>
                <ErrorMessage name="confirm" />
              </div>
            )}

            <button type="submit" onClick={submit}>
              Sign Up!
            </button>
            {isSubmitting ? <p>Sending your credentials...</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterFormik;
