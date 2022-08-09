import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { withPageWrapper, InvoiceDetails, Spinner } from "../components";

const InvoiceDetailsWithPageWrapper = withPageWrapper(InvoiceDetails);

const Invoice = () => {
  const [invoice, setInvoice] = useState<object | null>(null);
  const [invoiceReload, setInvoiceReload] = useState<boolean>(true);
  const { id } = useParams();
  const navigate = useNavigate();

  const url = `${process.env.REACT_APP_API_URL}/${id}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setInvoice(res.data);
        setInvoiceReload(false);
      })
      .catch((err) => {
        console.log(err);
        navigate("/invoice/notfound");
      });
  }, []);

  return (
    <>
      {invoiceReload && <Spinner />}
      <InvoiceDetailsWithPageWrapper invoiceData={invoice} />
    </>
  );
};

export default Invoice;
