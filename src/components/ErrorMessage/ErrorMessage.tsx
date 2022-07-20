import ErrorMessageCSS from "./ErrorMessage.module.css";

const ErrorMessage = ({ text }: { text: string }) => {
  return <p className={ErrorMessageCSS.text}>{text}</p>;
};

export { ErrorMessage };
