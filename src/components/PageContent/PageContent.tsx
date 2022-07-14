import { IPageContentProps } from "./PageContent.types";

const PageContent = ({ content }: IPageContentProps) => {
  return <section>{content}</section>;
};

export { PageContent };
