import React from 'react';
import './App.css';

function App() {
  return (
    <div className='cover'>
      <div className="App">
        <div>
          <img src="./image-qr-code.png" className="code" alt="code" />
        </div>

        <div className='text'>
          <h2>
            Improve your front-end <br/> skills by building projects
          </h2>
          <p>
            Scan the QR code to visit Frontend <br/> Mentor and take your coding skills to <br/> the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;