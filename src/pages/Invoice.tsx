import { useParams } from "react-router-dom";
import { withPageWrapper, PageContent } from "../components";

const PageContentWithPageWrapper = withPageWrapper(PageContent);

const Invoice = () => {
  const { id } = useParams();

  const content = `Invoice ${id}`;

  return <PageContentWithPageWrapper content={content} />;
};

export default Invoice;
