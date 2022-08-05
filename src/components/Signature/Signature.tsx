import SignatureCSS from "./Signature.module.css";

const Signature = ({ text }: { text: string }) => {
  console.log("rerender");
  return <p className={SignatureCSS.signature}>{text}</p>;
};

export { Signature };
