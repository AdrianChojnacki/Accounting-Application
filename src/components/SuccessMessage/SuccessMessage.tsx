import SuccessMessageCSS from "./SuccessMessage.module.css";
import { ISuccessMessageProps } from "./SuccessMessage.types";

const SuccessMessage = ({ text }: ISuccessMessageProps) => {
  return <p className={SuccessMessageCSS.text}>{text}</p>;
};

export { SuccessMessage };
