import { AiFillDelete } from "react-icons/ai";
import DeleteButtonCSS from "./DeleteButton.module.css";

const DeleteButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <span onClick={onClick} className={DeleteButtonCSS.btn}>
      <AiFillDelete className={DeleteButtonCSS.icon} />
    </span>
  );
};

export { DeleteButton };
