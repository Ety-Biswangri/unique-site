import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/Home/HomePage/HomePage';
import ProjectReport from './components/ProjectReport/ProjectReport';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/home' element={<HomePage></HomePage>}></Route>
        <Route path='/projectReport' element={<ProjectReport></ProjectReport>}></Route>
      </Routes>
    </div>
  );
}

export default App;
