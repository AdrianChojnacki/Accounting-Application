import { useRef } from "react";
import SignatureCSS from "./Signature.module.css";

const Signature = ({ text }: { text: string }) => {
  const signature = useRef<HTMLParagraphElement>(null);

  const handleClick = () => {
    if (
      !signature.current!.style.color ||
      signature.current!.style.color === "green"
    ) {
      signature.current!.style.color = "white";
    } else if (signature.current!.style.color === "white") {
      signature.current!.style.color = "yellow";
    } else if (signature.current!.style.color === "yellow") {
      signature.current!.style.color = "blue";
    } else if (signature.current!.style.color === "blue") {
      signature.current!.style.color = "red";
    } else if (signature.current!.style.color === "red") {
      signature.current!.style.color = "green";
    }
  };

  return (
    <p ref={signature} onClick={handleClick} className={SignatureCSS.signature}>
      {text}
    </p>
  );
};

export { Signature };
