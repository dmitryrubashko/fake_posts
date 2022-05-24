import { useHistory } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import bcrypt from "bcryptjs";
import ReactTooltip from "react-tooltip";
import * as Yup from "yup";

import exclamation from "../../../../shared/assets/images/exclamationmark.png";

import styles from "./styles.module.scss";

const SignupPageLayout = ({ handleActivateButton }) => {
  const signupSchema = Yup.object().shape({
    name: Yup.string()
      .max(50, "Name is too long - should be 50 chars maximum")
      .required("Required"),
    username: Yup.string()
      .max(50, "Username is too long - should be 50 chars maximum")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required").max(100),
    address: Yup.string().required(
      'Use this example to create correct address: {"street":"Kulas Light","suite":"Apt. 556","city":"Gwenborough","zipcode":"92998-3874","geo":{"lat":"-37.3159","lng":"81.1496"}}'
    ),
    phone: Yup.string()
      .max(50, "Phone number is too long - should be 50 chars maximum.")
      .matches(/[0-9]/, "Phone can only contain numbers")
      .required("Required"),
    website: Yup.string().required("Required").max(50),
    companies: Yup.string().required(
      'For example: [{"name": "Romaguera", "catchPhrase": "Multi-layered", "bs": "harness" }, { "name": "Deckow", "catchPhrase": "Proactive", "bs": "synergize scalable" }]'
    ),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum."),
    confirmPassword: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const history = useHistory();

  return (
    <>
      <div className={styles.SignupPageLayout__loginTitle}>
        Registration Page
      </div>
      <div className={styles.SignupPageLayout__form}>
        <div className={styles.SignupPageLayout__title}>Sign Up</div>
        <Formik
          initialValues={{
            name: "",
            username: "",
            email: "",
            address: "",
            phone: "",
            website: "",
            companies: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={signupSchema}
          onSubmit={(values) => {
            fetch(`http://localhost:8080/users`, {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: values.name,
                username: values.username,
                email: values.email,
                phone: values.phone,
                website: values.website,
                address: JSON.parse(values.address),
                password: bcrypt.hashSync(values.password, 12),
                companies: JSON.parse(values.companies),
              }),
            }).then((response) => {
              console.log("response", response);
              if (response.status === 204) {
                return new Promise((resolve) => resolve(null));
              }
              if (!response.ok) {
                throw new Error(response.statusText);
              }
              return response.json();
            });
            history.push("/login");
          }}
        >
          {({ errors, touched }) => (
            <Form noValidate>
              <label>
                <div className={styles.SignupPageLayout__label}>Name</div>
                <Field
                  className={styles.SignupPageLayout__inputField_selected}
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                />
              </label>
              {errors.name && touched.name ? (
                <div className={styles.SignupPageLayout__errorMessage_hidden}>
                  {errors.name}
                </div>
              ) : null}
              <ReactTooltip />
              <label>
                <div className={styles.SignupPageLayout__label}>Username</div>
                <Field
                  className={styles.SignupPageLayout__inputField_selected}
                  name="username"
                  type="text"
                  placeholder="Enter your username"
                />
              </label>
              <span
                data-tip="Enter a unique username"
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
              {errors.username && touched.username ? (
                <div className={styles.SignupPageLayout__errorMessage_hidden}>
                  {errors.username}
                </div>
              ) : null}
              <ReactTooltip />
              <label>
                <div className={styles.SignupPageLayout__label}>Email</div>
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
                <div className={styles.SignupPageLayout__label}>Address</div>
                <Field
                  className={styles.SignupPageLayout__inputField_selected}
                  name="address"
                  type="text"
                  placeholder="Address"
                />
              </label>
              {errors.address && touched.address ? (
                <div className={styles.SignupPageLayout__errorMessage_hidden}>
                  {errors.address}
                </div>
              ) : null}
              <ReactTooltip />
              <label>
                <div className={styles.SignupPageLayout__label}>Phone</div>
                <Field
                  className={styles.SignupPageLayout__inputField_selected}
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone"
                />
              </label>
              {errors.phone && touched.phone ? (
                <div className={styles.SignupPageLayout__errorMessage_hidden}>
                  {errors.phone}
                </div>
              ) : null}
              <ReactTooltip />
              <label>
                <div className={styles.SignupPageLayout__label}>Website</div>
                <Field
                  className={styles.SignupPageLayout__inputField_selected}
                  name="website"
                  type="text"
                  placeholder="Enter your website"
                />
              </label>
              {errors.website && touched.website ? (
                <div className={styles.SignupPageLayout__errorMessage_hidden}>
                  {errors.website}
                </div>
              ) : null}
              <ReactTooltip />
              {/**/}
              <label>
                <div className={styles.SignupPageLayout__label}>Companies</div>
                <Field
                  className={styles.SignupPageLayout__inputField_selected}
                  name="companies"
                  type="text"
                  placeholder="Companies"
                />
              </label>
              {errors.companies && touched.companies ? (
                <div className={styles.SignupPageLayout__errorMessage_hidden}>
                  {errors.companies}
                </div>
              ) : null}
              <ReactTooltip />
              {/**/}
              <label>
                <div className={styles.SignupPageLayout__label}>Password</div>
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
                <div className={styles.SignupPageLayout__label}>
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
              <div className={styles.SignupPageLayout__signupForm}>
                <div className={styles.SignupPageLayout__checkboxContainer}>
                  <input
                    type="checkbox"
                    id="check"
                    className={styles.SignupPageLayout__checkbox}
                    onClick={handleActivateButton}
                  />
                </div>
                <div className={styles.SignupPageLayout__checkbox_description}>
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
