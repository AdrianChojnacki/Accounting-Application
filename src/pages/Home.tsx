import { useState, useEffect } from "react";
import axios from "axios";
import { PageWrapper, InvoicesTable } from "../components";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <PageWrapper>
      <InvoicesTable invoices={posts} />
    </PageWrapper>
  );
}
