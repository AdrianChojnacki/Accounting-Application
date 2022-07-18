import { withPageWrapper, CreateForm } from "../components";

const CreateFormWithPageWrapper = withPageWrapper(CreateForm);

export default function Create() {
  return <CreateFormWithPageWrapper />;
}
