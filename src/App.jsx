import { About } from "./components/About";
import { Home } from "./components/Home";
import { Routes, Route, Navigate } from "react-router";
import { Navbar } from "./components/NavComponents/Navbar";
import { ContactUs } from "./components/ContactUs";
import "../src/styles/app.css";

function App() {
  return (
    <div className="body">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactUs />} />

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
