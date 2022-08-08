import { memo } from "react";
import { useTranslation } from "react-i18next";
import { withPageWrapper, InvoicesTable, Signature } from "../components";

const InvoicesTableWithPageWrapper = withPageWrapper(InvoicesTable);
const MemoedSignature = memo(Signature);

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <InvoicesTableWithPageWrapper
        renderCopyright={() =>
          `${t("bookkeeping")} © ${new Date().getFullYear()}`
        }
      />
      <MemoedSignature text="by Adrian Chojnacki" />
    </>
  );
};

export default Home;
