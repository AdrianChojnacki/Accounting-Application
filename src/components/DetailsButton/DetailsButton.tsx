import { Link } from "react-router-dom";
import { BiShow } from "react-icons/bi";
import DetailsButtonCSS from "./DetailsButton.module.css";

const DetailsButton = ({ id }: { id: number }) => {
  return (
    <Link to={`/invoice/${id}`}>
      <button
        className={DetailsButtonCSS.btn}
        type="button"
        data-testid="details-button"
      >
        <BiShow className={DetailsButtonCSS.icon} />
      </button>
    </Link>
  );
};

export { DetailsButton };
