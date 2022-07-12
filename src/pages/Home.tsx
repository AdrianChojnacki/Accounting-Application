import { InvoicesTable } from "../components";
import Invoices from "../dummy-data.json";

export default function Home() {
  return (
    <div>
      <InvoicesTable invoices={Invoices} />
    </div>
  );
}
