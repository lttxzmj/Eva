import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/pages/home/index.jsx';
import './style/index.sass';

function App (){
  return(
    <div>
      <HomePage />
    </div>
  )
}

const root = document.getElementById('root');
ReactDOM.render(
   <App /> ,
    root
  )


//@ sourceMappingURL=/path/to/file.js.map
