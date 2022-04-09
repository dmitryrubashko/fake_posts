import styles from "./styles.module.scss";
import loading from "../../assets/images/loading.gif";

const Loader = () => {
  return (
    <div className={styles.loader}>{<img src={loading} alt={"loading"} />}</div>
  );
};

export default Loader;
