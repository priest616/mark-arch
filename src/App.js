import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import MainNav from "./components/MainNav";
import Home from "./pages/Home";
import SlideShow from './pages/SlideShow';

function App() {
  return (
    <BrowserRouter>
      <MainNav>
        <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/test' element={ <div>testing link</div>} />
        <Route path='/slideshow' element={<SlideShow />} />
        </Routes>
      </MainNav>
    </BrowserRouter>
  );
}

export default App;
