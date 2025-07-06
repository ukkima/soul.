import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { HomePage } from "./pages/HomePage/HomePage";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { SignupPage } from "./pages/SignupPage/SignupPage";
import { ScrollToHashElement } from "./components/ScrollToHashElement/ScrollToHashElement";
import { Route, Routes, useLocation } from "react-router";

function App() {
  const location = useLocation();
  const state = location.state;
  const background = state && state.background;

  return (
    <div className="page">
      <Header />

      <main className="main">
        <ScrollToHashElement />

        <Routes location={background || location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>

      {background && (
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      )}

      <Footer />
    </div>
  );
}

export default App;
