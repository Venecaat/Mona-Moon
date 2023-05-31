import { Route, Routes } from "react-router-dom";
import { MainPage } from "./routes/MainPage.jsx";
import { PageNotFound } from "./routes/PageNotFound.jsx";
import { Layout } from "./components/Layout.jsx";

export const App = () => {

  return (
      <Layout>
          <Routes>
              <Route path="/" element={<MainPage />}></Route>
              <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
      </Layout>
  )
}
