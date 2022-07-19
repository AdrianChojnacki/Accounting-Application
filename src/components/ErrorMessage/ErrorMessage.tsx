import ErrorMessageCSS from "./ErrorMessage.module.css";
import { IErrorMessageProps } from "./ErrorMessage.types";

const ErrorMessage = ({ text }: IErrorMessageProps) => {
  return <p className={ErrorMessageCSS.text}>{text}</p>;
};

export { ErrorMessage };
