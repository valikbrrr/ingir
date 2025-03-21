import { AdminPage } from "@pages/admin";
import { Autorization } from "@pages/autorization";
import { Home } from "@pages/home/ui/homePage/Home";
import { PasswordReset } from "@pages/passwordReset";
import { Registration } from "@pages/registration";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Autorization />} />
        <Route path="/password-reset" element={<PasswordReset />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
