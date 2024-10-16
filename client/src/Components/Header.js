import React from 'react';
import KLUlogo from './klulogo.png';

const Header = () => {
  const headerStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    position: 'fixed',
    top: 0,
    zIndex: 1300,
  };

  const lineStyle = {
    height: '2px', // Height of the line
    backgroundColor: '#B31B1B', // Line color
    width: '100%', // Full width
  };

  const upperBarStyle = {
    backgroundColor: 'lightgrey',
    padding: '5px',
    textAlign: 'center',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', // Center the text
  };

  const logoContainerStyle = {
    position: 'absolute', // Allow positioning independently
    left: '10px', // Adjust this value for logo positioning
    height: '100%', // Full height of the upper bar
    display: 'flex',
    alignItems: 'center', // Center logo vertically
  };

  const lowerBarStyle = {
    backgroundColor: '#B31B1B',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px',
    height: '40px',
  };

  const logoStyle = {
    maxWidth: '150px', // Increased logo width
    maxHeight: '100px', // Match logo height to upper bar height
    marginRight: '10px', // Space between logo and title
  };

  const headingStyle = {
    margin: 0,
    fontSize: '1.5rem',
    color: 'black',
  };

  return (
    <header style={headerStyle}>
      <div style={lineStyle}></div> {/* Line above the upper bar */}
      <div style={upperBarStyle}>
        <div style={logoContainerStyle}>
          <img src={KLUlogo} alt="KLU logo" style={logoStyle} /> {/* Logo positioned here */}
        </div>
        <h1 style={headingStyle}>Student Portal - <i>ERP</i></h1>
      </div>
      <div style={lowerBarStyle}>
        {/* Optional additional content can go here */}
      </div>
    </header>
  );
};

export default Header;
