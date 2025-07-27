import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { HomePage } from "./pages/HomePage/HomePage";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { SignupPage } from "./pages/SignupPage/SignupPage";
import { ArticlePage } from "./pages/ArticlePage/ArticlePage";
import { UserUpdatePage } from "./pages/UserUpdatePage/UserUpdatePage.jsx";
import { ScrollToHashElement } from "./components/ScrollToHashElement/ScrollToHashElement";
import { Route, Routes, useLocation } from "react-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFetchAuthUser } from "./store/thunks/index.js";

function App() {
  const location = useLocation();
  const state = location.state;
  const background = state && state.background;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFetchAuthUser());
  }, []);

  return (
    <div className="page">
      <Header />
      <main className="main">
        <ScrollToHashElement />

        <Routes location={background || location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/article/:id" element={<ArticlePage />} />
        </Routes>
      </main>

      {background && (
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          <Route path="/user/update" element={<UserUpdatePage />} />
        </Routes>
      )}

      <Footer />
    </div>
  );
}

export default App;
