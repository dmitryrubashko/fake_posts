import Pagination from "@mui/material/Pagination";

import Loader from "../../../../shared/commonComponents/Loader";
import FPButton from "../../../../shared/commonComponents/Button";

import styles from "./styles.module.scss";

const MainPageLayout = ({
  handleGoToPost,
  isLoading,
  error,
  posts,
  paginate,
  allPosts,
}) => {
  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && !error && (
        <>
          <h1>Main Page</h1>
          <div className={styles.MainPageLayout__wrapper}>
            {posts.map((post) => {
              const { id, title, body } = post;
              return (
                <div className={styles.MainPageLayout__postContainer} key={id}>
                  <div>
                    <div>
                      <span className={styles.MainPageLayout__title}>
                        Title :{" "}
                      </span>
                      {title}
                    </div>
                    <div>Post : {body}</div>
                  </div>
                  <FPButton onClick={() => handleGoToPost(id)}>
                    Go To Comments
                  </FPButton>
                </div>
              );
            })}
          </div>
          <div className={styles.MainPageLayout__pagination}>
            <Pagination
              count={Math.ceil(allPosts.length / 10)}
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
