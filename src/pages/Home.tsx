import { useState, useEffect } from "react";
import axios from "axios";
import { withPageWrapper, InvoicesTable } from "../components";

const InvoicesTableWithPageWrapper = withPageWrapper(InvoicesTable);

const Home = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/posts")
      .then((res) => {
        setInvoices(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <InvoicesTableWithPageWrapper
      invoices={invoices}
      render={() => `Księgowość Kogucik © ${new Date().getFullYear()}`}
    />
  );
};

export default Home;
