import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import { useTheme } from "./hooks/useTheme";

// react-live pulls in a Babel-based transpiler — only worth loading
// when someone actually visits the component playground.
const ComponentsPage = lazy(() => import("./pages/Components/Components"));

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/components"
          element={
            <Suspense fallback={<div style={{ padding: "56px 24px" }}>Loading…</div>}>
              <ComponentsPage />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}
