import './App.css';
import { Routes, Route } from 'react-router-dom'; // react-router-dom'dan Routes ve Route'ı içe aktar
import Header from './Layout/header';
import Blog from './page/Blog';
import Uzvlerimiz from './page/Uzvlerimiz';
import Fag from './page/Fag';
import Home from './page/Home';
import Footer from './Layout/Footer';
import BackToTopButton from './component/backtotop';
import CreatorPage from './page/creator';
import BlogPage from './page/BlogPage';

function App() {
  return (
    <div className="App">
     <Header />
     <Routes>
        <Route path='/blog' element={<Blog />} />
        <Route path='/Uzvlerimiz' element={<Uzvlerimiz />} />
        <Route path='/Fag' element={<Fag />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/creator' element={<CreatorPage />} />
        <Route path='/blogpage' element={<BlogPage />} />
        <Route path='/' element={<Home />} />

      </Routes>
  <Footer></Footer>
  <BackToTopButton></BackToTopButton>
    </div>
  );
}

export default App;
