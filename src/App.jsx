// importing components
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// importing custom components
import Layout from "./components/Layout/Layout";

// importing routes
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import Team from "./routes/Team";

// App component
function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/projects" element={<Project />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
