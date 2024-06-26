import { HashRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import FeedbackForm from "./components/FeedbackForm";
import NoPage from "./components/NoPage";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<SignUp />} />
          <Route exact path="/login" element={<LoginForm />} />
          <Route exact path="/feedback" element={<FeedbackForm />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
