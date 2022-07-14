// import { IPageWrapperProps } from "./withPageWrapper.types";
import PageWrapperCSS from "./withPageWrapper.module.css";

// const PageWrapper = ({ children }: IPageWrapperProps) => {
//   return <section className={PageWrapperCSS.container}>{children}</section>;
// };

const withPageWrapper =
  (Component: any) =>
  ({ ...passThroughProps }) => {
    return (
      <main className={PageWrapperCSS.container}>
        <Component {...passThroughProps} />
      </main>
    );
  };

export { withPageWrapper };
