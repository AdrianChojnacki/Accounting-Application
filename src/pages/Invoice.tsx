import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { withPageWrapper, InvoiceDetails } from "../components";

const InvoiceDetailsWithPageWrapper = withPageWrapper(InvoiceDetails);

const Invoice = () => {
  const [invoiceData, setInvoiceData] = useState<object>({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/posts/${id}`)
      .then((res) => {
        setInvoiceData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <InvoiceDetailsWithPageWrapper invoiceData={invoiceData} />;
};

export default Invoice;
