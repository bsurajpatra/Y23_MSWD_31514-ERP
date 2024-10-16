import React from 'react';
import './App.css'; // Importing CSS file
import { BrowserRouter as Router } from 'react-router-dom';
import SideDrawer from './Components/SideDrawer';
import MainRoutes from './Components/MainRoutes';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="App-main">
          <SideDrawer />
          <main>
            <MainRoutes />
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;