import { Route, Routes } from "react-router-dom";
import { PageNotFound } from "./routes/PageNotFound.jsx";
import { Layout } from "./components/Layout.jsx";
import './App.css'

export const App = () => {

  return (
      <Layout>
          <Routes>
              <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
      </Layout>
  )
}
