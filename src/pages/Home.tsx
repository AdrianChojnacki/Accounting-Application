import { PageWrapper, InvoicesTable } from "../components";
import Data from "../server/db.json";

export default function Home() {
  return (
    <PageWrapper>
      <InvoicesTable invoices={Data.posts} />
    </PageWrapper>
  );
}
