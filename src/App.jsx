import { About } from "./components/About";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Routes, Route, Navigate } from "react-router";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
