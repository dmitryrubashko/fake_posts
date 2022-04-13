import { useHistory } from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import { useFormik } from "formik";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import ReactTooltip from "react-tooltip";

import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import FPButton from "../../../../shared/commonComponents/Button";
import exclamation from "../../../../shared/assets/images/exclamationmark.png";

import styles from "./styles.module.scss";

const SignupPageLayout = () => {
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

  return (
    <>
      {/*<div className={styles.SignupPageLayout__loginTitle_active}>*/}
      {/*  Registration Page*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  <form*/}
      {/*    className={styles.SignupPageLayout__form_active}*/}
      {/*    onSubmit={formik.handleSubmit}*/}
      {/*  >*/}
      {/*    <div>*/}
      {/*      <InputLabel>*/}
      {/*        Email*/}
      {/*        <div className={styles.SignupPageLayout__inputContainer_active}>*/}
      {/*          <div>*/}
      {/*            <TextField*/}
      {/*              id="email"*/}
      {/*              name="email"*/}
      {/*              value={formik.values.email}*/}
      {/*              onChange={formik.handleChange}*/}
      {/*              error={formik.touched.email && Boolean(formik.errors.email)}*/}
      {/*              helperText={formik.touched.email && formik.errors.email}*/}
      {/*            />*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*        <span data-tip="Enter a valid email">*/}
      {/*          {<img src={exclamation} alt={"exclamation"} />}*/}
      {/*        </span>*/}
      {/*        <ReactTooltip />*/}
      {/*      </InputLabel>*/}
      {/*    </div>*/}
      {/*    <div>*/}
      {/*      <InputLabel>*/}
      {/*        Password*/}
      {/*        <span>*/}
      {/*          <FormControl variant="standard">*/}
      {/*            <TextField*/}
      {/*              id="password"*/}
      {/*              name="password"*/}
      {/*              type="password"*/}
      {/*              value={formik.values.password}*/}
      {/*              onChange={formik.handleChange}*/}
      {/*              error={*/}
      {/*                formik.touched.password && Boolean(formik.errors.password)*/}
      {/*              }*/}
      {/*              helperText={*/}
      {/*                formik.touched.password && formik.errors.password*/}
      {/*              }*/}
      {/*            />*/}
      {/*          </FormControl>*/}
      {/*        </span>*/}
      {/*        <span data-tip="Password should be 8-30 chars and can only contain Latin letters and numbers">*/}
      {/*          {<img src={exclamation} alt={"exclamation"} />}*/}
      {/*        </span>*/}
      {/*        <ReactTooltip />*/}
      {/*      </InputLabel>*/}
      {/*    </div>*/}
      {/*    <div>*/}
      {/*      <InputLabel>*/}
      {/*        Confirm Password*/}
      {/*        <span>*/}
      {/*          <FormControl variant="standard">*/}
      {/*            <TextField*/}
      {/*              id="confirmPassword"*/}
      {/*              name="confirmPassword"*/}
      {/*              type="password"*/}
      {/*              value={formik.values.confirmPassword}*/}
      {/*              onChange={formik.handleChange}*/}
      {/*              error={*/}
      {/*                formik.touched.confirmPassword &&*/}
      {/*                Boolean(formik.errors.confirmPassword)*/}
      {/*              }*/}
      {/*              helperText={*/}
      {/*                formik.touched.confirmPassword &&*/}
      {/*                formik.errors.confirmPassword*/}
      {/*              }*/}
      {/*            />*/}
      {/*          </FormControl>*/}
      {/*        </span>*/}
      {/*        <span data-tip="Passwords must match">*/}
      {/*          {<img src={exclamation} alt={"exclamation"} />}*/}
      {/*        </span>*/}
      {/*      </InputLabel>*/}
      {/*    </div>*/}
      {/*    <FPButton type="submit">Sing Up</FPButton>*/}
      {/*  </form>*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*</div>*/}
      <div className={styles.SignupPageLayout__form_active}>
        <div className={styles.signup}>Sign Up</div>
        <Formik
          initialValues={{
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={signupSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form
              className={styles.LoginPageLayout__form_selected}
              // onSubmit={handleSubmit}
              noValidate
            >
              <div>
                <label>
                  <div className={styles.word}>Email</div>
                  <Field
                    className={styles.field}
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
                    className={styles.field}
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                  />
                </label>
              </div>
              {errors.password && touched.password ? (
                <div className={styles.error}>{errors.password}</div>
              ) : null}
              <div>
                <label>
                  <div className={styles.word}>Confirm Password</div>
                  <Field
                    className={styles.field}
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                  />
                </label>
              </div>
              {errors.confirmPassword && touched.confirmPassword ? (
                <div className={styles.error}>{errors.confirmPassword}</div>
              ) : null}
              <input type="checkbox" className={styles.checkbox} />
              <div className={styles.text}>
                By creating an account you agree to the terms and conditions
                applicable to our service and acknowledge that your personal
                data will be used in accordance with our privacy policy and you
                will receive emails and communications about jobs, industry
                news, new products and related topics.
              </div>
              <div>
                <button type="submit">Sign up</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
export default SignupPageLayout;
