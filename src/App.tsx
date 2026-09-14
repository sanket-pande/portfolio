import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <Home />
      <Footer />
    </>
  );
}
