import { AiFillDelete } from "react-icons/ai";
import DeleteButtonCSS from "./DeleteButton.module.css";

const DeleteButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className={DeleteButtonCSS.btn}
      type="button"
      data-testid="delete-button"
    >
      <AiFillDelete className={DeleteButtonCSS.icon} />
    </button>
  );
};

export { DeleteButton };
