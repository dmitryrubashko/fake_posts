import Button from "@mui/material/Button";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import styles from "./styles.module.scss";

const LoginPageLayout = ({ handleSubmit, goToSignupPage }) => {
  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .max(30, "Password is too long - should be 30 chars maximum.")
      .matches(/[0-9a-zA-Z]/, "Password can only contain Latin letters."),
  });

  return (
    <>
      <div className={styles.login}>Login Page</div>
      <div>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className={styles.form} onSubmit={handleSubmit}>
              <div>
                <label>
                  <div className={styles.word}>Email</div>
                  <Field
                    className={styles.input}
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </label>
              </div>
              {errors.email && touched.email ? (
                <div className={styles.error}>{errors.email}</div>
              ) : null}
              <div>
                <label>
                  <div className={styles.word}>Password</div>
                  <Field
                    className={styles.input}
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                  />
                </label>
              </div>
              {errors.password && touched.password ? (
                <div className={styles.error}>{errors.password}</div>
              ) : null}
              <Button variant="contained" color="success" type="submit">
                Sign in
              </Button>
              <div className={styles.newAccount}>Don't have an account?</div>
              <Button
                variant="contained"
                color="success"
                type="button"
                onClick={() => goToSignupPage()}
              >
                Create an account
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
export default LoginPageLayout;
