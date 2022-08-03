import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  withFormSubmit,
  withPageWrapper,
  InvoiceEdit,
  Spinner,
} from "../components";

const InvoiceEditWithFormSubmit = withFormSubmit(InvoiceEdit);
const InvoiceEditWithFormSubmitWithPageWrapper = withPageWrapper(
  InvoiceEditWithFormSubmit,
);

const Edit = () => {
  const [invoice, setInvoice] = useState<object | null>(null);
  const [editReload, setEditReload] = useState<boolean>(true);
  const { id } = useParams();

  const url = `${process.env.REACT_APP_API_URL}/${id}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setInvoice(res.data);
        setEditReload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {editReload && <Spinner />}
      <InvoiceEditWithFormSubmitWithPageWrapper invoiceData={invoice} />
    </>
  );
};

export default Edit;
