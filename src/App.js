import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutPage, HomePage } from "./screens";
import { ParallaxProvider } from "react-scroll-parallax";
function App() {
  return (
    <ParallaxProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />

          <Route path="/*" element={<HomePage />} />

          {/* <Route path={"" || "/" || "/*" || "home"} element={<HomePage />} /> */}
        </Routes>
      </BrowserRouter>
    </ParallaxProvider>
  );
}

export default App;
