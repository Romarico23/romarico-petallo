import "./App.css";
import { Navbar } from "./components/Navbar";
import { HashRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { ScrollToTop } from "./animations/ScrollToTop";
import { useEffect, useState } from "react";
import { SpinningLogo } from "./animations/SpinningLogo";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);

  return (
    <>
      {loading === false ? (
        <div className="App">
          <Router>
            <ScrollToTop />
            <Navbar />
            <AnimatedRoutes />
          </Router>
        </div>
      ) : (
        <SpinningLogo />
      )}
    </>
  );
}

export default App;
