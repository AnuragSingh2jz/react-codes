import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Heading from './heading.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Heading/>
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('box')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
