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

  const url = `${process.env.REACT_APP_API_URL}/${id}`;

  useEffect(() => {
    axios
      .get(url)
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
