import Connection from "./components/connection";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Otp from "./components/Otp";
import Invitation from "./components/Invitation";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Connection />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/verirification-otp" element={<Otp />} />
        <Route path="/invitation" element={<Invitation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
