import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout.jsx";
import { MainPage } from "./routes/MainPage.jsx";
import { PageNotFound } from "./routes/PageNotFound.jsx";
import { Contact } from "./routes/Contact.jsx";
import { Timetable } from "./routes/Timetable.jsx";
import { BellyDancePerformance } from "./routes/services/bellydance-zumba/BellyDancePerformance.jsx";
import { BellyDanceLesson } from "./routes/services/bellydance-zumba/BellyDanceLesson.jsx";
import { ZumbaLesson } from "./routes/services/bellydance-zumba/ZumbaLesson.jsx";
import { FitmummyBellyDance, FitmummyLatinFitness, DoulaSupport, Childcare, CaesareanSection, BirthBlessing } from "./routes/services/fullmoon-mp/FullmoonMpServices.jsx"
import { BellyDanceZumba } from "./routes/introduction/BellyDanceZumba.jsx";
import { FullmoonMP } from "./routes/introduction/FullmoonMP.jsx";
import { ZumbaPerformance } from "./routes/services/bellydance-zumba/ZumbaPerformance.jsx";
import { Login } from "./routes/auth/Login.jsx";
import { Register } from "./routes/auth/Register.jsx";
import { Logout } from "./routes/auth/Logout.jsx";

export const App = () => {
    const [email, setEmail] = useState(sessionStorage.getItem("email"));

  return (
      <Layout email={email}>
          <Routes>
              <Route path="/" element={<MainPage />}></Route>
              <Route path="/orarend" element={<Timetable />}></Route>
              <Route path="/kapcsolat" element={<Contact />}></Route>
              <Route path="*" element={<PageNotFound />}></Route>

              {/* INTRODUCTIONS */}
              <Route path="/bemutatkozas/hastánc-zumba" element={<BellyDanceZumba />}></Route>
              <Route path="/bemutatkozas/telihold-anyaoltalom" element={<FullmoonMP />}></Route>

              {/* BELLY DANCE / ZUMBA SERVICES */}
              <Route path="/szolgaltatasok/hastanc-orak" element={<BellyDanceLesson />}></Route>
              <Route path="/szolgaltatasok/hastanc-fellepes" element={<BellyDancePerformance />}></Route>
              <Route path="/szolgaltatasok/zumba-orak" element={<ZumbaLesson />}></Route>
              <Route path="/szolgaltatasok/zumba-fellepes" element={<ZumbaPerformance />}></Route>

              {/* FULLMOON-MP SERVICES */}
              <Route path="/szolgaltatasok/fitmummy-hastanc" element={<FitmummyBellyDance />}></Route>
              <Route path="/szolgaltatasok/fitmummy-latin-fitness" element={<FitmummyLatinFitness />}></Route>
              <Route path="/szolgaltatasok/dulai-tamogatas" element={<DoulaSupport />}></Route>
              <Route path="/szolgaltatasok/gyermekagyas-gondoskodas" element={<Childcare />}></Route>
              <Route path="/szolgaltatasok/csaszarmetszes-feldolgozo-csoport" element={<CaesareanSection />}></Route>
              <Route path="/szolgaltatasok/szulesaldo-unnep" element={<BirthBlessing />}></Route>

              {/* LOGIN / REGISTER */}
              <Route path="/regisztracio" element={<Register />}></Route>
              <Route path="/bejelentkezes" element={<Login setEmail={setEmail} />}></Route>
              <Route path="/kijelentkezes" element={<Logout setEmail={setEmail} />}></Route>

          {/*  TODO:
                - fix backend environment variables
                - add route restrictions in frontend here in App
                - add Profile page
                - change session storage to cookies backend or frontend
                - implement Remember me option in Login
                - after registration navigate to Login or maybe a verification page or modal
                - make forgot password - maybe in modal
                - email verification
                - increase cookie expiry time
                - use Cloudinary
                - more unit tests for backend
            */}

          </Routes>
      </Layout>
  )
}
