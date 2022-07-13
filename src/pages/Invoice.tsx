import { useParams } from "react-router-dom";
import { PageWrapper } from "../components";

export default function Invoice() {
  const { id } = useParams();

  return <PageWrapper>Invoice {id}</PageWrapper>;
}
