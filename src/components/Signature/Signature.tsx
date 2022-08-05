import SignatureCSS from "./Signature.module.css";

const Signature = ({ text }: { text: string }) => {
  return <p className={SignatureCSS.signature}>{text}</p>;
};

export { Signature };
