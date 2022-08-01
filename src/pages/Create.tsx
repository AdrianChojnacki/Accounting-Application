import { withFormSubmit, withPageWrapper, InvoiceCreate } from "../components";

const CreateFormWithFormSubmit = withFormSubmit(InvoiceCreate);
const CreateFormWithFormSubmitWithPageWrapper = withPageWrapper(
  CreateFormWithFormSubmit,
);

const Create = () => {
  return <CreateFormWithFormSubmitWithPageWrapper />;
};

export default Create;
