import { memo } from "react";
import { withPageWrapper, InvoicesTable, Signature } from "../components";

const InvoicesTableWithPageWrapper = withPageWrapper(InvoicesTable);
const MemoedSignature = memo(Signature);

const Home = () => {
  return (
    <>
      <InvoicesTableWithPageWrapper
        renderCopyright={() =>
          `Księgowość Kogucik © ${new Date().getFullYear()}`
        }
      />
      <MemoedSignature text="by Adrian Chojnacki" />
    </>
  );
};

export default Home;
