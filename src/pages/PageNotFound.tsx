import { withPageWrapper, PageContent } from "../components";

const PageContentWithPageWrapper = withPageWrapper(PageContent);

export default function PageNotFound() {
  return <PageContentWithPageWrapper content="PageNotFound" />;
}
