import { Header } from "./components/Header/Header";
import { HomePage } from "./pages/HomePage/HomePage";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <HomePage />
      </main>
    </>
  );
}

export default App;
