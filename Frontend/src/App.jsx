import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import About from "./components/About";
import Footer from "./components/footer";
import VotePage from "./Pages/vote";
import VotePanel from "./Pages/VotePanel";
function App() {
  return (
  <>
     <Router>
     
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path='/vote' element={<VotePage></VotePage>}></Route>
        <Route path='/votepanel' element={<VotePanel></VotePanel>} />
      </Routes>
    <Footer/>
    </Router>
  </>
  );
}

export default App;