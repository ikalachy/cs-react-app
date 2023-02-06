import "./App.css";

import { Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import Frame from "./components/Frame";
import Error404Page from "./pages/Error404Page";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Frame/>}>
        <Route index element={<DashboardPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="error-404" element={<Error404Page />} />
      </Route>
      <Route path="*" element={<Error404Page />} />
    </Routes>
  );
}

export default App;
