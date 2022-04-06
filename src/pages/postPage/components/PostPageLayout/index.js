import styles from "./styles.module.scss";
import loading from "../../../../shared/assets/images/loading.gif";

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
      {(postsError || commentsError) && <div className={styles.error}>Not Found</div>}
      {(isLoadingPosts || isLoadingComments) && (
        <div className={styles.loader}>{<img src={loading} alt={"loading"} />}</div>
      )}
      {!isLoadingPosts && !isLoadingComments && (
        <>
          <h1>Post</h1>
          <div className={styles.section}>
            {postsOfSelectedUser.map((post) => {
              const { title, body, id } = post;
              return (
                <div className={styles.article} key={id}>
                  <div>
                    <span className={styles.title}>Title : </span>
                    {title}
                  </div>
                  <article>Post : {body}</article>
                </div>
              );
            })}
          </div>
          <h2>Comments :</h2>
          <div className={styles.section}>
            {commentsOfSelectedUser.map((comment) => {
              const { name, email, body } = comment;
              return (
                <div className={styles.article} key={name}>
                  <div className={styles.comment}>Comment : {body}</div>
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
