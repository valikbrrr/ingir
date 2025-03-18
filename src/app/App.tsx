import { Autorization } from "@pages/autorization";
import { Home } from "@pages/home/ui/homePage/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Autorization />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
