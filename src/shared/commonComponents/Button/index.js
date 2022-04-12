import Button from "@mui/material/Button";

import styles from "./styles.module.scss";

const FPButton = ({ children, className, variant, ...otherProps }) => {
  return (
    <Button
      color="success"
      variant={variant || "contained"}
      classes={{ root: styles.FPButton__button }}
      {...otherProps}
    >
      {children}
    </Button>
  );
};
export default FPButton;
