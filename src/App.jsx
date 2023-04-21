import "./App.css";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  // let resizeTimer;
  // window.addEventListener("resize", () => {
  //   document.body.classList.add("resize-animation-stopper");
  //   clearTimeout(resizeTimer);
  //   resizeTimer = setTimeout(() => {
  //     document.body.classList.remove("resize-animation-stopper");
  //   }, 400);
  // });
  return (
    <div className="App">
      <Router basename="/romarico-petallo">
        <Navbar />
        <AnimatedRoutes />
      </Router>
    </div>
  );
}

export default App;
