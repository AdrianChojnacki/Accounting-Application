import ErrorMessageCSS from "./ErrorMessage.module.css";

const ErrorMessage = ({ text }: { text: string }) => {
  return (
    <p className={ErrorMessageCSS.text} data-testid="error-message">
      {text}
    </p>
  );
};

export { ErrorMessage };
