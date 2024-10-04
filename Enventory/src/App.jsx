// App.js
//npm install react-router-dom

// "no-unused-vars": ["warn", {
//   "vars": "all", 
//   "args": "none", // This will not warn for unused function arguments
//   "caughtErrors": "none", // This will not warn for unused catch block errors
//   "ignoreRestSiblings": true // Ignore unused variables when using rest properties
// }]

import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Sidebar from './Component/Sidebar/Sidebar';
import SignIn from './Pages/LoginRegister/SignIn';
import SignUp from './Pages/LoginRegister/SignUp'
import Homepage from './Pages/HomePage/Homepage';
import Dashboard from './Pages/DashBoard/Dashboard';
import Footer from './Component/Footer/Footer';
import AddInventory from './Pages/AddInventory/AddInventory';

function App() {
  const location = useLocation();

  // Logic to conditionally render the Sidebar
  const shouldDisplaySidebar = () => !['/', '/signup', '/signin'].includes(location.pathname);

  // Logic to conditionally render the Navbar
  const shouldDisplayNavbar = () => !['/signup', '/signin'].includes(location.pathname);

  return (
    <div className="container">
      {shouldDisplayNavbar() && <Navbar />}
      <div className="content-wrapper">
        {shouldDisplaySidebar() && <Sidebar />}
        <main className={`main-content ${shouldDisplaySidebar() ? 'with-sidebar' : ''}`}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/addinventory" element={<AddInventory />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>
      </div>
      {shouldDisplayNavbar() && <Footer />}
    </div>
  );
}

export default App;