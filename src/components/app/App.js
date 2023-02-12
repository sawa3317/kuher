import './App.css';

import Header from '../header/Header';
import Home from '../pages/home/Home';
import FormAddad from '../pages/adAddForm/AdAddForm';
import AdList from '../adList/AdList';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/new' element={<FormAddad/>} />
          <Route path='/ad/:category' element={<AdList/>}/>
        </Routes>
      </Router>
      
      
    </>
  );
}

export default App;
