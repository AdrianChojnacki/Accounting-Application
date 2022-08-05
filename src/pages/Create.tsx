import { withFormSubmit, withPageWrapper, InvoiceCreate } from "../components";

const InvoiceCreateWithFormSubmit = withFormSubmit(InvoiceCreate);
const InvoiceCreateWithFormSubmitWithPageWrapper = withPageWrapper(
  InvoiceCreateWithFormSubmit,
);

const Create = () => {
  return <InvoiceCreateWithFormSubmitWithPageWrapper />;
};

export default Create;
