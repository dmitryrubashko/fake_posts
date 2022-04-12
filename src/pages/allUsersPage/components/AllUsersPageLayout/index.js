import Loader from "../../../../shared/commonComponents/Loader";
import FPButton from "../../../../shared/commonComponents/Button";

import styles from "./styles.module.scss";

const AllUsersPageLayout = ({ users, handleGoToDetails, isLoading, error }) => {
  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && !error && (
        <>
          <h1>Users Page</h1>
          <div className={styles.AllUsersPageLayout__usersContainer_active}>
            {users.map((user) => {
              const { id, name, username } = user;
              return (
                <div
                  className={styles.AllUsersPageLayout__userContainer_active}
                  key={id}
                >
                  <div>
                    <span
                      className={styles.AllUsersPageLayout__userName_active}
                    >
                      Name :{" "}
                    </span>
                    {name}
                  </div>
                  <div>Username : {username}</div>
                  <FPButton onClick={() => handleGoToDetails(id)}>
                    Visit Page
                  </FPButton>
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
