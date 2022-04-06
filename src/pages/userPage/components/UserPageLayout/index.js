import Button from "@mui/material/Button";

import styles from "./styles.module.scss";
import loading from "../../../../shared/assets/images/loading.gif";

const UserPageLayout = ({
  id,
  postsOfSelectedUser,
  handleGoToPost,
  isLoadingUserInfo,
  isLoadingPosts,
  usersError,
  postsError,
  user,
  flatObj,
}) => {
  return (
    <>
      {(usersError || postsError) && (
        <div className={styles.error}>Not Found</div>
      )}
      {(isLoadingUserInfo || isLoadingPosts) && (
        <div className={styles.loader}>
          {<img src={loading} alt={"loading"} />}
        </div>
      )}
      {!isLoadingUserInfo && !isLoadingPosts && (
        <>
          <h1>{user?.name}'s Info</h1>
          <div className={styles.user}>
            <div className={styles.userInfo}>{flatObj(user)}</div>
          </div>
          <h2>Posts</h2>
          <div className={styles.posts}>
            {postsOfSelectedUser.map((post) => {
              const { title, body, id } = post;
              return (
                <div className={styles.post} key={id}>
                  <div className={styles.article}>
                    <div>
                      <span className={styles.title}>Title :</span> {title}
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
        </>
      )}
    </>
  );
};
export default UserPageLayout;
