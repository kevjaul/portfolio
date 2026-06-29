import "./App.scss";

import FloatingCircles from "./components/animations/FloatingCircles";

import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <FloatingCircles />
      <div className="relative z-10">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}

export default App;
