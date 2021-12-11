import Header from "./components/Header";
import Code from "./components/Codes";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Upload from "./components/Upload";
import Favorites from "./components/Favorites";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/codes" element={<Code />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
