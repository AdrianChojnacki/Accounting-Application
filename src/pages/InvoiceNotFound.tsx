import { withPageWrapper, NotFound } from "../components";

const NotFoundWithPageWrapper = withPageWrapper(NotFound);

const InvoiceNotFound = () => {
  return <NotFoundWithPageWrapper text="Invoice" />;
};

export default InvoiceNotFound;
