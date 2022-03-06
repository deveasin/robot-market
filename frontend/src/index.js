import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import App from './App';
import RobotContextProvider from './services/contexts/RobotContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <RobotContextProvider>
      <App />
    </RobotContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
