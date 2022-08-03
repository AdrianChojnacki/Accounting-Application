import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { withPageWrapper, InvoicesTable, Spinner } from "../components";
import { ListReloadContext, ListReloadSetFalseContext } from "../providers";

const InvoicesTableWithPageWrapper = withPageWrapper(InvoicesTable);

const Home = () => {
  const [invoices, setInvoices] = useState<object | null>(null);
  const [homeReload, setHomeReload] = useState<boolean>(true);
  const reload = useContext(ListReloadContext);
  const setReloadFalse = useContext(ListReloadSetFalseContext);

  const url = `${process.env.REACT_APP_API_URL}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setInvoices(res.data);
        setHomeReload(false);
        setReloadFalse();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reload]);

  return (
    <>
      {(homeReload || reload) && <Spinner />}
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
