import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SuccessPopupProvider } from "./providers";

const Home = lazy(() => import("./pages/Home"));
const Create = lazy(() => import("./pages/Create"));
const Invoice = lazy(() => import("./pages/Invoice"));
const Edit = lazy(() => import("./pages/Edit"));
const InvoiceNotFound = lazy(() => import("./pages/InvoiceNotFound"));
const PathNotFound = lazy(() => import("./pages/PathNotFound"));

const App = () => {
  const { t } = useTranslation();

  return (
    <SuccessPopupProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={t("loading")}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/create"
            element={
              <Suspense fallback={t("loading")}>
                <Create />
              </Suspense>
            }
          />
          <Route
            path="/invoice/:id"
            element={
              <Suspense fallback={t("loading")}>
                <Invoice />
              </Suspense>
            }
          />
          <Route
            path="/invoice/:id/edit"
            element={
              <Suspense fallback={t("loading")}>
                <Edit />
              </Suspense>
            }
          />
          <Route
            path="/invoice/notfound"
            element={
              <Suspense fallback={t("loading")}>
                <InvoiceNotFound />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={t("loading")}>
                <PathNotFound />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </SuccessPopupProvider>
  );
};

export default App;
