import loading from "../../assets/images/loading.gif";

import styles from "./styles.module.scss";

const Loader = () => {
  return (
    <div className={styles.Loader__loaderContainer}>
      {<img src={loading} alt={"loading"} />}
    </div>
  );
};

export default Loader;
