import { Link } from "react-router-dom";
import { BiShow } from "react-icons/bi";
import DetailsButtonCSS from "./DetailsButton.module.css";

const DetailsButton = ({ id }: { id: number }) => {
  return (
    <Link to={`/invoice/${id}`}>
      <span className={DetailsButtonCSS.btn}>
        <BiShow className={DetailsButtonCSS.icon} />
      </span>
    </Link>
  );
};

export { DetailsButton };
