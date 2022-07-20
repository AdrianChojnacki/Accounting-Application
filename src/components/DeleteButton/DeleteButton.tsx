import axios from "axios";
import { AiFillDelete } from "react-icons/ai";

const DeleteButton = ({ id }: { id: number }) => {
  const handleClick = () => {
    axios.delete(`http://localhost:3001/posts/${id}`).catch((err) => {
      console.log(err);
    });
  };

  return (
    <span onClick={handleClick}>
      <AiFillDelete />
    </span>
  );
};

export { DeleteButton };
