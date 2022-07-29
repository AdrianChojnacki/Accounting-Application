import { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { withFormSubmit, withPageWrapper, InvoiceEdit } from "../components";

const InvoiceEditWithFormSubmit = withFormSubmit(InvoiceEdit);
const InvoiceEditWithFormSubmitWithPageWrapper = withPageWrapper(
  InvoiceEditWithFormSubmit,
);

export default function Edit() {
  const [content, setContent] = useState<ReactElement>();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/posts/${id}`)
      .then((res) => {
        setContent(
          <InvoiceEditWithFormSubmitWithPageWrapper invoiceData={res.data} />,
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <>{content}</>;
}
