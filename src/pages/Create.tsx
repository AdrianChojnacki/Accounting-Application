import { withFormSubmit, withPageWrapper, CreateForm } from "../components";

const CreateFormWithFormSubmit = withFormSubmit(CreateForm);
const CreateFormWithFormSubmitWithPageWrapper = withPageWrapper(
  CreateFormWithFormSubmit,
);

export default function Create() {
  return <CreateFormWithFormSubmitWithPageWrapper />;
}
