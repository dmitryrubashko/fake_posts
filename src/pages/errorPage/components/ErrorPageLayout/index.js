import { ROUTES } from "../../../../shared/routes/routesNames";

import FPButton from "../../../../shared/commonComponents/Button";
import { Link } from "react-router-dom";

const ErrorPageLayout = () => {
  return (
    <>
      <div>404</div>
      <div>Something is wrong. try to reload page</div>
      <Link to={ROUTES.USERS_PAGE}>
        <div>
          <FPButton>Go To Main Page</FPButton>
        </div>
      </Link>
    </>
  );
};

export default ErrorPageLayout;
