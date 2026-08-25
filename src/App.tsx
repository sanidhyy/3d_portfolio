import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// pages
import { Home, About, Projects, Contact } from "./pages";

// components
import { Navbar } from "./components";

// app
const App = () => {
  return (
    <main className="bg-slate-300/20 h-full">
      {/* routes */}
      <Router>
        {/* navbar */}
        <Navbar />

        {/* other routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* TODO: footer */}
      </Router>
    </main>
  );
};

export default App;
