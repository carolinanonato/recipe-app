import './index.css';

import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path='/' component={<Home />} />
          <Route path='/categories' component={<Categories />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
