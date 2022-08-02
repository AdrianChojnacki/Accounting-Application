import { withPageWrapper, PageContent } from "../components";

const PageContentWithPageWrapper = withPageWrapper(PageContent);

const PageNotFound = () => {
  return <PageContentWithPageWrapper content="PageNotFound" />;
};

export default PageNotFound;
