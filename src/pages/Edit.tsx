import { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { withPageWrapper, InvoiceEdit } from "../components";

const InvoiceEditWithPageWrapper = withPageWrapper(InvoiceEdit);

export default function Edit() {
  const [content, setContent] = useState<ReactElement>();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/posts/${id}`)
      .then((res) => {
        setContent(<InvoiceEditWithPageWrapper invoiceData={res.data} />);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <>{content}</>;
}
