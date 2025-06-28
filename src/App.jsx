import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { HomePage } from "./pages/HomePage/HomePage";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <HomePage />
      </main>

      <Footer />
    </>
  );
}

export default App;
