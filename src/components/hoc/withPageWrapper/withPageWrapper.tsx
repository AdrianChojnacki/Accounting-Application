// import { IWithPageWrapperProps } from "./withPageWrapper.types";
import PageWrapperCSS from "./withPageWrapper.module.css";

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
