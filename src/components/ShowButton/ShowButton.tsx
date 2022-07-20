import axios from "axios";
import { BiShow } from "react-icons/bi";
import ShowButtonCSS from "./ShowButton.module.css";

const ShowButton = ({ id }: { id: number }) => {
  const handleClick = () => {
    axios.delete(`http://localhost:3001/posts/${id}`).catch((err) => {
      console.log(err);
    });
  };

  return (
    <span onClick={handleClick} className={ShowButtonCSS.btn}>
      <BiShow className={ShowButtonCSS.icon} />
    </span>
  );
};

export { ShowButton };
