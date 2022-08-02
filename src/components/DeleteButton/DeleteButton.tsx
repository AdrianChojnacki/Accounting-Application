import { useContext } from "react";
import axios from "axios";
import { AiFillDelete } from "react-icons/ai";
import {
  ListReloadSetTrueContext,
  SpinnerSetTrueContext,
} from "../../providers";
import DeleteButtonCSS from "./DeleteButton.module.css";

const DeleteButton = ({ id }: { id: number }) => {
  const setReloadTrue = useContext(ListReloadSetTrueContext);
  const setSpinnerTrue = useContext(SpinnerSetTrueContext);

  const url = `${process.env.REACT_APP_API_URL}/${id}`;

  const handleClick = () => {
    axios.delete(url).catch((err) => {
      console.log(err);
    });

    setReloadTrue();
    setSpinnerTrue();
  };

  return (
    <span onClick={handleClick} className={DeleteButtonCSS.btn}>
      <AiFillDelete className={DeleteButtonCSS.icon} />
    </span>
  );
};

export { DeleteButton };
