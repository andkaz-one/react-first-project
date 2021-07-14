import React from 'react';
import './App.css';
import Main from './components/Content';
import Header from './components/Header'
import Navigation from './components/Navigation';



const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navigation />
      <Main />     
    </div>


  )

}





export default App;
