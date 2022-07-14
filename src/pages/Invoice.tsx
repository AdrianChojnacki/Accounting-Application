import { useParams } from "react-router-dom";
import { withPageWrapper, PageContent } from "../components";

const PageContentWithPageWrapper = withPageWrapper(PageContent);

export default function Invoice() {
  const { id } = useParams();

  const content = `Invoice ${id}`;

  return <PageContentWithPageWrapper content={content} />;
}
