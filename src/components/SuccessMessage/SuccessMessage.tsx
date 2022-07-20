import SuccessMessageCSS from "./SuccessMessage.module.css";

const SuccessMessage = ({ text }: { text: string }) => {
  return <p className={SuccessMessageCSS.text}>{text}</p>;
};

export { SuccessMessage };
