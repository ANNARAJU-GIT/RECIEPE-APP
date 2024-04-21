import logo from './logo.svg';
import './App.css';
import AddReciepe from './components/AddReciepe';
import SearchReciepe from './components/SearchReciepe';
import ViewAll from './components/ViewAll';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddReciepe/>}/>
      <Route path='/search' element={<SearchReciepe/>}/>
      <Route path='/ViewAll' element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
