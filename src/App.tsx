import Connection from "./components/connection";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Otp from "./components/Otp";
import Invitation from "./components/Invitation";
import OnBoarding from "./components/OnBoarding";
import LoginForm from "./components/subponents/LoginForm";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Connection />}>
        <Route path="/" index element={<LoginForm path="/verifications" />} />
        <Route path="/verifications" element={<Otp />} />
        <Route path="/invitations" element={<Invitation />} />
        <Route path="/onboardings" element={<OnBoarding />} />
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route path="/verirification-otp" element={<Otp />} />
      <Route path="/invitation" element={<Invitation />} />
      <Route path="/onboarding" element={<OnBoarding />} />
    </Routes>
  );
}

export default App;
