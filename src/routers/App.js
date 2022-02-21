import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import Nav from '../components/Nav';
import Books from '../components/Books';
import Categories from '../components/Categories';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/Categories" element={<Categories />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
