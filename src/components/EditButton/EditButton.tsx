import axios from "axios";
import { BiEdit } from "react-icons/bi";
import EditButtonCSS from "./EditButton.module.css";

const EditButton = ({ id }: { id: number }) => {
  const handleClick = () => {
    axios.delete(`http://localhost:3001/posts/${id}`).catch((err) => {
      console.log(err);
    });
  };

  return (
    <span onClick={handleClick} className={EditButtonCSS.btn}>
      <BiEdit className={EditButtonCSS.icon} />
    </span>
  );
};

export { EditButton };
