import { HashRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import NoPage from "./components/NoPage";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<LoginForm />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
