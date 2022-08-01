import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { withPageWrapper, InvoicesTable } from "../components";
import { ListReloadContext, ListReloadSetFalseContext } from "../providers";

const InvoicesTableWithPageWrapper = withPageWrapper(InvoicesTable);

const Home = () => {
  const [invoices, setInvoices] = useState([]);
  const reload = useContext(ListReloadContext);
  const setReloadFalse = useContext(ListReloadSetFalseContext);

  useEffect(() => {
    axios
      .get("http://localhost:3001/posts")
      .then((res) => {
        setInvoices(res.data);
        setReloadFalse();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reload]);

  return (
    <InvoicesTableWithPageWrapper
      invoices={invoices}
      render={() => `Księgowość Kogucik © ${new Date().getFullYear()}`}
    />
  );
};

export default Home;
