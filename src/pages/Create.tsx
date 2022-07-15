import { withPageWrapper, PageContent } from "../components";

const PageContentWithPageWrapper = withPageWrapper(PageContent);

export default function Create() {
  return <PageContentWithPageWrapper content="Create" />;
}
