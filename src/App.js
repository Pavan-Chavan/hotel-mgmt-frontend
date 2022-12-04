import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AdminDashboard from "./pages/AdminDashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddJobPost from "./jobs/AddJobPost";
import EditJobPost from "./jobs/EditJobPost";
import ViewJobPost from "./jobs/ViewJobPost";
import Home from "./pages/Home";
import Header from "./layout/NavBar";
import FootBar from "./layout/FootBar";

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/adminDashboard" element={<AdminDashboard />} />
          <Route exact path="/addjobpost" element={<AddJobPost />} />
          <Route exact path="/editjobpost/:id" element={<EditJobPost />} />
          <Route exact path="/viewjobpost/:id" element={<ViewJobPost />} />
        </Routes>
      </Router>
      <FootBar/>
    </div>
  );
}

export default App;
