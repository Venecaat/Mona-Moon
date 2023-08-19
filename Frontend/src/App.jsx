import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout.jsx";
import { MainPage } from "./routes/MainPage.jsx";
import { PageNotFound } from "./routes/PageNotFound.jsx";
import { Contact } from "./routes/Contact.jsx";
import { Introduction } from "./routes/Introduction.jsx";
import { Timetable } from "./routes/Timetable.jsx";
import { BellyDancePerformance } from "./routes/services/bellydance-zumba/BellyDancePerformance.jsx";
import { BellyDanceLesson } from "./routes/services/bellydance-zumba/BellyDanceLesson.jsx";
import { ZumbaLesson } from "./routes/services/bellydance-zumba/ZumbaLesson.jsx";
import { FitmummyBellyDance, FitmummyLatinFitness, DoulaSupport, Childcare, CaesareanSection, BirthBlessing } from "./routes/services/fullmoon-mp/FullmoonMpServices.jsx"

export const App = () => {

  return (
      <Layout>
          <Routes>
              <Route path="/" element={<MainPage />}></Route>
              <Route path="/orarend" element={<Timetable />}></Route>
              <Route path="/bemutatkozas" element={<Introduction />}></Route>
              <Route path="/kapcsolat" element={<Contact />}></Route>
              <Route path="*" element={<PageNotFound />}></Route>

              {/* BELLY DANCE / ZUMBA SERVICES */}
              <Route path="/szolgaltatasok/hastanc-orak" element={<BellyDanceLesson />}></Route>
              <Route path="/szolgaltatasok/hastanc-fellepes" element={<BellyDancePerformance />}></Route>
              <Route path="/szolgaltatasok/zumba-orak" element={<ZumbaLesson />}></Route>

              {/* FULLMOON-MP SERVICES */}
              <Route path="/szolgaltatasok/fitmummy-hastanc" element={<FitmummyBellyDance />}></Route>
              <Route path="/szolgaltatasok/fitmummy-latin-fitness" element={<FitmummyLatinFitness />}></Route>
              <Route path="/szolgaltatasok/dulai-tamogatas" element={<DoulaSupport />}></Route>
              <Route path="/szolgaltatasok/gyermekagyas-gondoskodas" element={<Childcare />}></Route>
              <Route path="/szolgaltatasok/csaszarmetszes-feldolgozo-csoport" element={<CaesareanSection />}></Route>
              <Route path="/szolgaltatasok/szulesaldo-unnep" element={<BirthBlessing />}></Route>
          </Routes>
      </Layout>
  )
}
