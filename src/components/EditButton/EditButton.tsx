import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import EditButtonCSS from "./EditButton.module.css";

const EditButton = ({ id }: { id: number }) => {
  return (
    <Link to={`/invoice/${id}/edit`}>
      <span className={EditButtonCSS.btn}>
        <BiEdit className={EditButtonCSS.icon} />
      </span>
    </Link>
  );
};

export { EditButton };
