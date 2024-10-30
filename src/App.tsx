import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexPage from '.';
import AboutPage from './about';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage/>} />
        <Route path="/about" element={<AboutPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
