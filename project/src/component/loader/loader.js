import styles from "./Loader.module.scss";
import loaderImg from "../../assets/loading.gif";
import ReactDOM from "react-dom";

const Loader = () => {
  return ReactDOM.createPortal(
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <img className={styles.image} height="100px" width="100px"  src={loaderImg} alt="Loading..." />
      </div>
    </div>,
    document.getElementById("loader")
  );
};

export default Loader;