import { ReactElement, useState, useContext, useEffect } from "react";
import axios from "axios";
import { withPageWrapper, InvoicesTable, Spinner } from "../components";
import { ListReloadContext, ListReloadSetFalseContext } from "../providers";

const InvoicesTableWithPageWrapper = withPageWrapper(InvoicesTable);

const Home = () => {
  const [content, setContent] = useState<ReactElement>();
  const [homeReload, setHomeReload] = useState<boolean>(true);
  const reload = useContext(ListReloadContext);
  const setReloadFalse = useContext(ListReloadSetFalseContext);

  const url = `${process.env.REACT_APP_API_URL}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setContent(
          <InvoicesTableWithPageWrapper
            invoices={res.data}
            renderCopyright={() =>
              `Księgowość Kogucik © ${new Date().getFullYear()}`
            }
          />,
        );
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
      {content}
    </>
  );
};

export default Home;
