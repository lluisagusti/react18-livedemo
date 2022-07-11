import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// React v17 -> 

// const iExistBeforeReact = document.getElementById('root');
// render(<App />, iExistBeforeReact);


// React v18 -> 

const reactCreatesMe = ReactDOM.createRoot(document.getElementById('root'));
reactCreatesMe.render(<App />);
