import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout.jsx";
import { MainPage } from "./routes/MainPage.jsx";
import { PageNotFound } from "./routes/PageNotFound.jsx";
import { Contact } from "./routes/Contact.jsx";
import { Introduction } from "./routes/Introduction.jsx";
import { Timetable } from "./routes/Timetable.jsx";
import { BellyDancePerformance } from "./routes/services/bellydance-zumba/BellyDancePerformance.jsx";

export const App = () => {

  return (
      <Layout>
          <Routes>
              <Route path="/" element={<MainPage />}></Route>
              <Route path="/orarend" element={<Timetable />}></Route>
              <Route path="/bemutatkozas" element={<Introduction />}></Route>
              <Route path="/kapcsolat" element={<Contact />}></Route>
              <Route path="*" element={<PageNotFound />}></Route>


              <Route path="/szolgaltatasok/hastanc-fellepes" element={<BellyDancePerformance />}></Route>
          </Routes>
      </Layout>
  )
}
