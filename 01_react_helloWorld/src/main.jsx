import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Heading from './Heading.jsx'


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

function Img(){
  return(
    <img src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png' alt='img'></img>
  )
}

let reactElement = React.createElement(
    'a',
    {href:"https://google.com"},
    'click to go to googleeeee'
)

ReactDOM.createRoot(document.getElementById('box')).render(
  <React.StrictMode>
    <Img/>
  </React.StrictMode>
)
ReactDOM.createRoot(document.getElementById('box')).render(
    reactElement
)