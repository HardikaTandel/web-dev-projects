import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/login/Login";
import Header from "./components/header/Header";
import './App.css';
import Home from './components/home/Home'
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
     <Router>
      <Header /> 
      <Routes>
        <Route exact path="/" element ={<Login />}>
        </Route>
        <Route path="/home" element={<Home />}>
        </Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
