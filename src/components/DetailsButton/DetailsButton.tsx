import axios from "axios";
import { BiShow } from "react-icons/bi";
import DetailsButtonCSS from "./DetailsButton.module.css";

const DetailsButton = ({ id }: { id: number }) => {
  const handleClick = () => {
    axios.delete(`http://localhost:3001/posts/${id}`).catch((err) => {
      console.log(err);
    });
  };

  return (
    <span onClick={handleClick} className={DetailsButtonCSS.btn}>
      <BiShow className={DetailsButtonCSS.icon} />
    </span>
  );
};

export { DetailsButton };
