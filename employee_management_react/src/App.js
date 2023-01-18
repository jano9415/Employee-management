import './App.css';
import FooterComponent from './Components/FooterComponent';
import HeaderComponent from './Components/HeaderComponent';
import ListEmployeeComponent from './Components/ListEmployeeComponent';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router';
import AddNewEmployeeComponent from './Components/AddNewEmployeeComponent';
import UpdateEmployeeComponent from './Components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './Components/ViewEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route exact path='/' element={<ListEmployeeComponent />} />
            <Route path='/employees' element={<ListEmployeeComponent />} />
            <Route path='/addnewemployee' element={<AddNewEmployeeComponent />} />
            <Route path='/updateemployee/:id' element={<UpdateEmployeeComponent />} />
            <Route path='/viewemployee/:id' element={<ViewEmployeeComponent/>} />
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
