import './App.css';
import Navbar from './components/Navbar';
import Worddic from './components/Worddic';
import About from './components/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="about" element={<About />} />
          <Route index element={<Worddic title="TextUtils" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
