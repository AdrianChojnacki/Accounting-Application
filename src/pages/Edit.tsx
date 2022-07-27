import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { withPageWrapper, InvoiceDetails } from "../components";

const InvoiceDetailsWithPageWrapper = withPageWrapper(InvoiceDetails);

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
