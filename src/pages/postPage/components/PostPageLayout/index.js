import Loader from "../../../../shared/commonComponents/Loader";

import styles from "./styles.module.scss";

const PostPageLayout = ({
  postsOfSelectedUser,
  commentsOfSelectedUser,
  isLoadingPosts,
  isLoadingComments,
  postsError,
  commentsError,
}) => {
  return (
    <>
      {(isLoadingPosts || isLoadingComments) && <Loader />}
      {!isLoadingPosts && !isLoadingComments && !postsError && !commentsError && (
        <>
          <h1>Post</h1>
          <div className={styles.PostPageLayout__sectionContainer}>
            {postsOfSelectedUser.map((post) => {
              const { title, body, id } = post;
              return (
                <div className={styles.PostPageLayout__article} key={id}>
                  <div>
                    <span className={styles.PostPageLayout__title}>
                      Title :{" "}
                    </span>
                    {title}
                  </div>
                  <article>Post : {body}</article>
                </div>
              );
            })}
          </div>
          <h2>Comments :</h2>
          <div className={styles.PostPageLayout__sectionContainer}>
            {commentsOfSelectedUser.map((comment) => {
              const { name, email, body } = comment;
              return (
                <div className={styles.PostPageLayout__article} key={name}>
                  <div className={styles.PostPageLayout__commentMessage}>
                    Comment : {body}
                  </div>
                  <div>Name : {name}</div>
                  <div>Email : {email}</div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};
export default PostPageLayout;
