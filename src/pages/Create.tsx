import { withFormSubmit, withPageWrapper, InvoiceCreate } from "../components";

const CreateFormWithFormSubmit = withFormSubmit(InvoiceCreate);
const CreateFormWithFormSubmitWithPageWrapper = withPageWrapper(
  CreateFormWithFormSubmit,
);

export default function Create() {
  return <CreateFormWithFormSubmitWithPageWrapper />;
}
