import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout.jsx";
import { MainPage } from "./routes/MainPage.jsx";
import { PageNotFound } from "./routes/PageNotFound.jsx";
import { Contact } from "./routes/Contact.jsx";
import { Introduction } from "./routes/Introduction.jsx";

export const App = () => {

  return (
      <Layout>
          <Routes>
              <Route path="/" element={<MainPage />}></Route>
              <Route path="/bemutatkozas" element={<Introduction />}></Route>
              <Route path="/kapcsolat" element={<Contact />}></Route>
              <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
      </Layout>
  )
}
