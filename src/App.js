import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddJobPost from "./jobs/AddJobPost";
import EditJobPost from "./jobs/EditJobPost";
import ViewJobPost from "./jobs/ViewJobPost";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/adminDashboard" element={<Home />} />
          <Route exact path="/addjobpost" element={<AddJobPost />} />
          <Route exact path="/editjobpost/:id" element={<EditJobPost />} />
          <Route exact path="/viewjobpost/:id" element={<ViewJobPost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
