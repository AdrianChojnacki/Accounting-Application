import { useState, useEffect } from "react";
import axios from "axios";
import {
  withPageWrapper,
  InvoicesTable,
  IInvoicesTableRender,
} from "../components";

const InvoicesTableWithPageWrapper = withPageWrapper(InvoicesTable);

const Home = () => {
  const [posts, setPosts] = useState<object[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const render: IInvoicesTableRender = (company, year) =>
    `${company} © ${year}`;

  return (
    <InvoicesTableWithPageWrapper invoices={posts} renderCopyright={render} />
  );
};

export default Home;
