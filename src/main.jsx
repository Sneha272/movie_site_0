import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { MyProvider } from './context/contextProvider'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyProvider>
      <App />
    </MyProvider>
  </React.StrictMode>
);
