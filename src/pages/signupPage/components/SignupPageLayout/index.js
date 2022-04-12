import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import TextField from "@material-ui/core/TextField";
import { useFormik } from "formik";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import ReactTooltip from "react-tooltip";

import FPButton from "../../../../shared/commonComponents/Button";
import exclamation from "../../../../shared/assets/images/exclamationmark.png";

import styles from "./styles.module.scss";

const SignupPageLayout = () => {
  const sighupSchema = Yup.object({
    email: Yup.string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
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
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: sighupSchema,
    onSubmit: (values, event) => {
      console.log({
        Email: values.email,
        Password: values.password,
        ConfirmPassword: values.confirmPassword,
      });
      history.push("/");
    },
  });

  return (
    <>
      <div className={styles.SignupPageLayout__loginTitle_active}>
        Registration Page
      </div>
      <div>
        <form
          className={styles.SignupPageLayout__form_active}
          onSubmit={formik.handleSubmit}
        >
          <div>
            <InputLabel>
              Email
              <div className={styles.SignupPageLayout__inputContainer_active}>
                <FormControl>
                  <TextField
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </FormControl>
              </div>
              <span data-tip="Enter a valid email">
                {<img src={exclamation} alt={"exclamation"} />}
              </span>
              <ReactTooltip />
            </InputLabel>
          </div>
          <div>
            <InputLabel>
              Password
              <span>
                <FormControl variant="standard">
                  <TextField
                    id="password"
                    name="password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                  />
                </FormControl>
              </span>
              <span data-tip="Password should be 8-30 chars and can only contain Latin letters and numbers">
                {<img src={exclamation} alt={"exclamation"} />}
              </span>
              <ReactTooltip />
            </InputLabel>
          </div>
          <div>
            <InputLabel>
              Confirm Password
              <span>
                <FormControl variant="standard">
                  <TextField
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.confirmPassword &&
                      Boolean(formik.errors.confirmPassword)
                    }
                    helperText={
                      formik.touched.confirmPassword &&
                      formik.errors.confirmPassword
                    }
                  />
                </FormControl>
              </span>
              <span data-tip="Passwords must match">
                {<img src={exclamation} alt={"exclamation"} />}
              </span>
            </InputLabel>
          </div>
          <FPButton type="submit">Submit</FPButton>
        </form>
      </div>
    </>
  );
};
export default SignupPageLayout;
