import { Header } from "../..";
import PageWrapperCSS from "./withPageWrapper.module.css";

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
