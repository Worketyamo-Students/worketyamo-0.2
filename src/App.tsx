import Connection from "./components/connection";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Otp from "./components/Otp";
import Invitation from "./components/Invitation";
import OnBoarding from "./components/OnBoarding";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Connection />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/verirification-otp" element={<Otp />} />
        <Route path="/invitation" element={<Invitation />} />
        <Route path="/onboarding" element={<OnBoarding />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
