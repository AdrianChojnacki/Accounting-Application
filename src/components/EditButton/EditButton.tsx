import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import EditButtonCSS from "./EditButton.module.css";

const EditButton = ({ id }: { id: number }) => {
  return (
    <Link to={`/invoice/${id}/edit`}>
      <button
        className={EditButtonCSS.btn}
        type="button"
        data-testid="edit-button"
      >
        <BiEdit className={EditButtonCSS.icon} />
      </button>
    </Link>
  );
};

export { EditButton };
