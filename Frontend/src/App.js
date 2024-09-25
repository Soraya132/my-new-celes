import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import OurWork from "./Pages/OurWork";
import Service from "./Pages/service";
import About from "./Pages/About";
import Layout from "./Components/Layout/Layout";
import StartProject from "./Pages/StartProject";
import Donate from "./Pages/Donate";

export default function App() {
  return (
      <Routes>
      <Route element={<Layout />}>
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/work" element={<OurWork />} />
         <Route path="/services" element={<Service />} />
         <Route path="/startProject" element={<StartProject />} />
         <Route path="/donate" element={<Donate />} />
      </Route>
    </Routes>
  );
}
