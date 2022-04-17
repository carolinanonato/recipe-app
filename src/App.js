import './index.css';

import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Categories from './components/Categories';
import Random from './components/Random';


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/random" element={<Random />} />


        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
