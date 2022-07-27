import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { withPageWrapper, InvoiceEdit } from "../components";

const InvoiceDetailsWithPageWrapper = withPageWrapper(InvoiceEdit);

export default function Edit() {
  const [invoiceData, setInvoiceData] = useState({});
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
}
