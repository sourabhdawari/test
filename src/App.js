import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import "jquery/dist/jquery"
import $ from "jquery"
import Task2 from './Pages/Task2';
import Task1 from './Pages/Task1';
import PageNotFound from './Pages/PageNotFound';
function App() {
  return (
    <div className="App">
    
     <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/task1' element={<Task1/>}/>
      <Route exact path='/task2' element={<Task2/>}/>
      <Route exact path='*' element={<PageNotFound/>}/>
     </Routes>
    
    </div>
  );
}

export default App;
