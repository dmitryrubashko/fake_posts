import Button from "@mui/material/Button";
import * as Yup from "yup";
import TextField from "@material-ui/core/TextField";
import { useFormik } from "formik";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import FormControl from "@mui/material/FormControl";

import styles from "./styles.module.scss";

const SignupPageLayout = ({ handleSubmit }) => {
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

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: sighupSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(2.5),
    },
    "& .MuiInputBase-input": {
      borderRadius: 8,
      border: "1px solid #ced4da",
      fontSize: 16,
      width: "400px",
      padding: "10px 12px",
    },
  }));

  return (
    <>
      <div className={styles.login}>Registration Page</div>
      <div>
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <div>
            <FormControl variant="standard">
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </FormControl>
          </div>
          <div>
            <FormControl variant="standard">
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </FormControl>
          </div>
          <div>
            <FormControl variant="standard">
              <TextField
                fullWidth
                id="confirmPassword"
                name="confirmPassword"
                label="confirmPassword"
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
          </div>
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </form>
        {/*<Formik*/}
        {/*  initialValues={{*/}
        {/*    email: "",*/}
        {/*    password: "",*/}
        {/*    confirmPassword: "",*/}
        {/*  }}*/}
        {/*  validationSchema={sighupSchema}*/}
        {/*  onSubmit={(values) => {*/}
        {/*    console.log(values);*/}
        {/*  }}*/}
        {/*>*/}
        {/*  {({ errors, touched }) => (*/}
        {/*    <Form className={styles.form} onSubmit={handleSubmit}>*/}
        {/*      <div>*/}
        {/*        <label>*/}
        {/*          <div>Email</div>*/}
        {/*          <TextField*/}
        {/*            variant="outlined"*/}
        {/*            name="email"*/}
        {/*            type="email"*/}
        {/*            placeholder="Enter your email"*/}
        {/*          />*/}
        {/*        </label>*/}
        {/*      </div>*/}
        {/*      {errors.email && touched.email ? (*/}
        {/*        <div className={styles.error}>{errors.email}</div>*/}
        {/*      ) : null}*/}
        {/*      <div>*/}
        {/*        <label>*/}
        {/*          <div>Password</div>*/}
        {/*          <TextField*/}
        {/*            variant="outlined"*/}
        {/*            name="password"*/}
        {/*            type="password"*/}
        {/*            placeholder="Enter your password"*/}
        {/*          />*/}
        {/*        </label>*/}
        {/*      </div>*/}
        {/*      {errors.password && touched.password ? (*/}
        {/*        <div className={styles.error}>{errors.password}</div>*/}
        {/*      ) : null}*/}
        {/*      <div>*/}
        {/*        <label>*/}
        {/*          <div>Confirm Password</div>*/}
        {/*          <TextField*/}
        {/*            variant="outlined"*/}
        {/*            name="confirmPassword"*/}
        {/*            type="password"*/}
        {/*            placeholder="Confirm password"*/}
        {/*          />*/}
        {/*        </label>*/}
        {/*      </div>*/}
        {/*      {errors.confirmPassword && touched.confirmPassword ? (*/}
        {/*        <div className={styles.error}>{errors.confirmPassword}</div>*/}
        {/*      ) : null}*/}
        {/*      <Button variant="contained" color="success" type="submit">*/}
        {/*        Sign up*/}
        {/*      </Button>*/}
        {/*    </Form>*/}
        {/*  )}*/}
        {/*</Formik>*/}
      </div>
    </>
  );
};
export default SignupPageLayout;
