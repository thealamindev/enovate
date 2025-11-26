import "./App.css";
import RootLayouts from "./components/layouts/RootLayouts";
import About from "./components/pages/About";
import Error from "./components/pages/Error";
import Home from "./components/pages/Home";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
