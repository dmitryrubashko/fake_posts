import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import FPButton from "../../../../shared/commonComponents/Button";

import styles from "./styles.module.scss";

const LoginPageLayout = ({ handleSubmit, goToSignupPage }) => {
  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .required("No password provided")
      .min(8, "Password is too short - should be 8 chars minimum"),
  });

  return (
    <>
      <div className={styles.LoginPageLayout__loginContainer}>Login Page</div>
      <div>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginSchema}
        >
          {({ errors, touched }) => (
            <Form
              className={styles.LoginPageLayout__form_selected}
              onSubmit={handleSubmit}
              noValidate
            >
              <div>
                <label>
                  <div className={styles.LoginPageLayout__userEmail}>Email</div>
                  <Field
                    className={styles.LoginPageLayout__inputContainer}
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </label>
              </div>
              {errors.email && touched.email ? (
                <div className={styles.LoginPageLayout__errorMessage_hidden}>
                  {errors.email}
                </div>
              ) : null}
              <div>
                <label>
                  <div className={styles.LoginPageLayout__userPassword}>
                    Password
                  </div>
                  <Field
                    className={styles.LoginPageLayout__inputContainer}
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                  />
                </label>
              </div>
              {errors.password && touched.password ? (
                <div className={styles.LoginPageLayout__errorMessage_hidden}>
                  {errors.password}
                </div>
              ) : null}
              <FPButton type="submit">Sign in</FPButton>
              <div className={styles.LoginPageLayout__registrationField}>
                Don't have an account?
              </div>
              <FPButton onClick={() => goToSignupPage()}>
                Create an account
              </FPButton>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
export default LoginPageLayout;
