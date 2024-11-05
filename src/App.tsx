import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "components/Layout";
import { MainPage } from "pages/MainPage";
import { DetailsPage } from "pages/Details";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/:courseId" element={<DetailsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
