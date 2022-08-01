import { useContext } from "react";
import axios from "axios";
import { AiFillDelete } from "react-icons/ai";
import { ListReloadSetTrueContext } from "../../providers";
import DeleteButtonCSS from "./DeleteButton.module.css";

const DeleteButton = ({ id }: { id: number }) => {
  const setReloadTrue = useContext(ListReloadSetTrueContext);

  const handleClick = () => {
    axios.delete(`http://localhost:3001/posts/${id}`).catch((err) => {
      console.log(err);
    });

    setReloadTrue();
  };

  return (
    <span onClick={handleClick} className={DeleteButtonCSS.btn}>
      <AiFillDelete className={DeleteButtonCSS.icon} />
    </span>
  );
};

export { DeleteButton };
