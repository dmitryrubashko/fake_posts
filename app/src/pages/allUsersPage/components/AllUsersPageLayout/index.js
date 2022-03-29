import Button from "@mui/material/Button";

import styles from "./styles.module.scss";
import loading from "../../../../shared/assets/images/loading.gif";

const AllUsersPageLayout = ({ users, handleGoToDetails, isLoading, error }) => {
  return (
    <>
      {error && <div className={styles.error}>Not Found</div>}
      {isLoading && (
        <div className={styles.loader}>
          {<img src={loading} alt={"loading"} />}
        </div>
      )}
      {!isLoading && (
        <>
          <h1>Users Page</h1>
          <div className={styles.users}>
            {users.map((user) => {
              const { id, name, username } = user;
              return (
                <div className={styles.user} key={id}>
                  <div>
                    <span className={styles.name}>Name : </span>
                    {name}
                  </div>
                  <div>Username : {username}</div>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => handleGoToDetails(id)}
                  >
                    Visit Page
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
export default AllUsersPageLayout;
