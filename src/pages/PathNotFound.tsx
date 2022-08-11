/* eslint-disable @typescript-eslint/no-unused-vars */
import { useLocation, useParams } from "react-router-dom";
import { withPageWrapper, NotFound } from "../components";

const NotFoundWithPageWrapper = withPageWrapper(NotFound);

const PathNotFound = () => {
  const { pathname } = useLocation();

  return <NotFoundWithPageWrapper text={pathname} />;
};

export default PathNotFound;
