import { IPageWrapperProps } from "./PageWrapper.types";
import PageWrapperCSS from "./PageWrapper.module.css";

const PageWrapper = ({ children }: IPageWrapperProps) => {
  return <section className={PageWrapperCSS.container}>{children}</section>;
};

export { PageWrapper };
