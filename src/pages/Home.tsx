import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { withPageWrapper, InvoicesTable, Spinner } from "../components";
import {
  ListReloadContext,
  ListReloadSetFalseContext,
  SpinnerContext,
  SpinnerSetFalseContext,
} from "../providers";

const InvoicesTableWithPageWrapper = withPageWrapper(InvoicesTable);

const Home = () => {
  const [invoices, setInvoices] = useState<object[]>([]);
  const reload = useContext(ListReloadContext);
  const setReloadFalse = useContext(ListReloadSetFalseContext);
  const spinner = useContext(SpinnerContext);
  const setSpinnerFalse = useContext(SpinnerSetFalseContext);

  const url = `${process.env.REACT_APP_API_URL}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setInvoices(res.data);
        setReloadFalse();
        setSpinnerFalse();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reload]);

  return (
    <>
      {spinner && <Spinner />}
      <InvoicesTableWithPageWrapper
        invoices={invoices}
        renderCopyright={() =>
          `Księgowość Kogucik © ${new Date().getFullYear()}`
        }
      />
    </>
  );
};

export default Home;
