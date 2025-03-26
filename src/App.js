import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
      <main className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
