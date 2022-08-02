import { Header } from "../..";
import PageWrapperCSS from "./withPageWrapper.module.css";
// import { IWithPageWrapperProps } from "./withPageWrapper.types";

const withPageWrapper =
  (Component: any) =>
  ({ ...passThroughProps }) => {
    return (
      <>
        <Header />
        <main className={PageWrapperCSS.container}>
          <Component {...passThroughProps} />
        </main>
      </>
    );
  };

export { withPageWrapper };
