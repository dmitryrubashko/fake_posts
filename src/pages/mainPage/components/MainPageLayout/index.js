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
}) => {
  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && !error && (
        <>
          <h1>Main Page</h1>
          <div className={styles.MainPageLayout__wrapper_active}>
            {posts.map((post) => {
              const { id, title, body } = post;
              return (
                <div
                  className={styles.MainPageLayout__postContainer_active}
                  key={id}
                >
                  <div>
                    <div>
                      <span className={styles.MainPageLayout__title_active}>
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
          <div className={styles.MainPageLayout__pagination_active}>
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
