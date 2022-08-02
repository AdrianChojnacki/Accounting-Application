import { withPageWrapper, PageContent } from "../components";

const PageContentWithPageWrapper = withPageWrapper(PageContent);

const Create = () => {
  return <PageContentWithPageWrapper content="Create" />;
};

export default Create;
