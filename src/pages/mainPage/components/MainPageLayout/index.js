import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";

import Loader from "../../../../shared/commonComponents/Loader";

import styles from "./styles.module.scss";

const MainPageLayout = ({
  handleGoToPost,
  isLoading,
  error,
  posts,
  paginate,
}) => {
  return (
    <>
      {error && <div className={styles.error}>Not Found</div>}
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <h1>Main Page</h1>
          <div className={styles.wrapper}>
            {posts.map((post) => {
              const { id, title, body } = post;
              return (
                <div className={styles.post} key={id}>
                  <div>
                    <div>
                      <span className={styles.title}>Title : </span>
                      {title}
                    </div>
                    <div>Post : {body}</div>
                  </div>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => handleGoToPost(id)}
                  >
                    Go To Comments
                  </Button>
                </div>
              );
            })}
          </div>
          <div className={styles.pagination}>
            <Pagination
              count={10}
              shape="rounded"
              onChange={(event, page) => paginate(page)}
            />
          </div>
        </>
      )}
    </>
  );
};
export default MainPageLayout;
