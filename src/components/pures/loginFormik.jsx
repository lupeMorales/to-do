import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password too Short!")
    .required("Password is required"),
});

const LoginFormik = () => {
  const initialCredential = {
    email: "",
    password: "",
  };
  return (
    <div>
      <Formik
        initialValues={{ initialCredential }}
        //*****yup validation schema****** */
        validationSchema={loginSchema}
        //simula una petición http
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
          //****we sabe data in localStorage*** */
          localStorage.setItem("credentials", values);
        }}
      >
        {/* we obtain porps. from formik */}
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
          <Form>
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
            <button type="submit">Login</button>
            {isSubmitting ? <p>Login your credentials...</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginFormik;
