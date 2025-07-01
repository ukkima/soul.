import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { HomePage } from "./pages/HomePage/HomePage";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { ScrollToHashElement } from "./components/ScrollToHashElement/ScrollToHashElement";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="page">
      <Header />

      <main className="main">
        <ScrollToHashElement />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
