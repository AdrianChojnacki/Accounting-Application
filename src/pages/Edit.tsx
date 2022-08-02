import { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { withFormSubmit, withPageWrapper, InvoiceEdit } from "../components";

const InvoiceEditWithFormSubmit = withFormSubmit(InvoiceEdit);
const InvoiceEditWithFormSubmitWithPageWrapper = withPageWrapper(
  InvoiceEditWithFormSubmit,
);

const Edit = () => {
  const [content, setContent] = useState<ReactElement>();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/invoices/${id}`)
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
};

export default Edit;
