
import './App.css';
// import Navbar from './Components/Navbar/Navbar';
// import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Shorts from './Pages/Shorts';
import Video from './Pages/Video';

const App = () => {

  return (
    <>
      <div className='youtube-page'>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/video' element={<Video/>}/>
          <Route exact path='/shorts' element={<Shorts/>}/>
        </Routes>
        hello
      </div>
    </>
  )
}
export default App;
