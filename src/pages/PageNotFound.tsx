import { useTranslation } from "react-i18next";
import { withPageWrapper, PageContent } from "../components";

const PageContentWithPageWrapper = withPageWrapper(PageContent);

const PageNotFound = () => {
  const { t } = useTranslation();

  return <PageContentWithPageWrapper content={t("pageNotFound")} />;
};

export default PageNotFound;
