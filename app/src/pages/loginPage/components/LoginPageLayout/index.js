import Button from "@mui/material/Button";

import styles from "./styles.module.scss";

const LoginPageLayout = ({ handleSubmit, emailData }) => {
  return (
    <>
      <div className={styles.login}>Login Page</div>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <h1>Welcome back</h1>
        <div>
          <label>
            <div className={styles.word}>Email</div>
            <input
              className={styles.input}
              placeholder="Enter your email"
              name="email"
              type="email"
            />
          </label>
          <dic className={styles.emailData}>{emailData}</dic>
        </div>
        <div>
          <label>
            <div className={styles.word}>Password</div>
            <input
              className={styles.input}
              placeholder="Enter your password"
              name="password"
              type="password"
            />
          </label>
        </div>
        <Button
          variant="contained"
          color="success"
          type="submit"
        >
          Sign in
        </Button>
      </form>
    </>
  );
};
export default LoginPageLayout;
