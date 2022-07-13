import { PageWrapper, InvoicesTable } from "../components";
import Invoices from "../dummy-data.json";

export default function Home() {
  return (
    <PageWrapper>
      <InvoicesTable invoices={Invoices} />
    </PageWrapper>
  );
}
