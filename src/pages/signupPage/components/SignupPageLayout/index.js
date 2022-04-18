import { useHistory } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import ReactTooltip from "react-tooltip";
import * as Yup from "yup";

import exclamation from "../../../../shared/assets/images/exclamationmark.png";

import styles from "./styles.module.scss";

const SignupPageLayout = ({ handleActivateButton }) => {
  const signupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .max(30, "Password is too long - should be 30 chars maximum.")
      .matches(/[0-9a-zA-Z]/, "Password can only contain Latin letters."),
    confirmPassword: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .max(30, "Password is too long - should be 30 chars maximum.")
      .matches(/[0-9a-zA-Z]/, "Password can only contain Latin letters.")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const history = useHistory();

  return (
    <>
      <div className={styles.SignupPageLayout__loginTitle_active}>
        Registration Page
      </div>
      <div className={styles.SignupPageLayout__form_active}>
        <div className={styles.SignupPageLayout__title_active}>Sign Up</div>
        <Formik
          initialValues={{
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={signupSchema}
          onSubmit={(values) => {
            console.log(values);
            history.push("/");
          }}
        >
          {({ errors, touched }) => (
            <Form noValidate>
              <label>
                <div className={styles.SignupPageLayout__label_active}>
                  Email
                </div>
                <Field
                  className={styles.SignupPageLayout__inputField_selected}
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </label>
              <span
                data-tip="Enter a valid email"
                className={styles.SignupPageLayout__exclamationText}
              >
                {
                  <img
                    src={exclamation}
                    alt={"exclamation"}
                    className={styles.SignupPageLayout__exclamationImage}
                  />
                }
              </span>
              {errors.email && touched.email ? (
                <div className={styles.SignupPageLayout__errorMessage_hidden}>
                  {errors.email}
                </div>
              ) : null}
              <ReactTooltip />
              <label>
                <div className={styles.SignupPageLayout__label_active}>
                  Password
                </div>
                <Field
                  className={styles.SignupPageLayout__inputField_selected}
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                />
              </label>
              <span
                data-tip="Password should be 8-30 chars and can only contain Latin letters and numbers"
                className={styles.SignupPageLayout__exclamationText}
              >
                {
                  <img
                    src={exclamation}
                    alt={"exclamation"}
                    className={styles.SignupPageLayout__exclamationImage}
                  />
                }
              </span>
              {errors.password && touched.password ? (
                <div className={styles.SignupPageLayout__errorMessage_hidden}>
                  {errors.password}
                </div>
              ) : null}
              <label>
                <div className={styles.SignupPageLayout__label_active}>
                  Confirm Password
                </div>
                <Field
                  className={styles.SignupPageLayout__inputField_selected}
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                />
              </label>
              <span
                data-tip="Passwords must match"
                className={styles.SignupPageLayout__exclamationText}
              >
                {
                  <img
                    src={exclamation}
                    alt={"exclamation"}
                    className={styles.SignupPageLayout__exclamationImage}
                  />
                }
              </span>
              {errors.confirmPassword && touched.confirmPassword ? (
                <div className={styles.SignupPageLayout__errorMessage_hidden}>
                  {errors.confirmPassword}
                </div>
              ) : null}
              <div className={styles.SignupPageLayout__signupForm_active}>
                <div className={styles.SignupPageLayout__checkboxContainer}>
                  <input
                    type="checkbox"
                    id="check"
                    className={styles.SignupPageLayout__checkbox}
                    onClick={handleActivateButton}
                  />
                </div>
                <div
                  className={
                    styles.SignupPageLayout__checkbox_description_active
                  }
                >
                  By creating an account you agree to the terms and conditions
                  applicable to our service and acknowledge that your personal
                  data will be used in accordance with our privacy policy and
                  you will receive emails and communications about jobs,
                  industry news, new products and related topics.
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className={styles.SignupPageLayout__confirmButton_disabled}
                  id="submit-button"
                  disabled
                >
                  Sign up
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
export default SignupPageLayout;
