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
          <div className={styles.PostPageLayout__sectionContainer_active}>
            {postsOfSelectedUser.map((post) => {
              const { title, body, id } = post;
              return (
                <div className={styles.PostPageLayout__article_active} key={id}>
                  <div>
                    <span className={styles.PostPageLayout__title_active}>
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
          <div className={styles.PostPageLayout__sectionContainer_active}>
            {commentsOfSelectedUser.map((comment) => {
              const { name, email, body } = comment;
              return (
                <div
                  className={styles.PostPageLayout__article_active}
                  key={name}
                >
                  <div className={styles.PostPageLayout__commentMessage_active}>
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
