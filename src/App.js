import './App.scss'
import React, {  } from 'react' //useEffect
import 'bootstrap';
import MediaQuery from 'react-responsive';
import MainCarousel from './MainCarousel';


import Main from './components/Main'
import texts from './texts';


function App () {
  return (
    <>    
  <MediaQuery minWidth={769}>
    <Main texts={texts}/>
  </MediaQuery>

  <MediaQuery maxWidth={768}>
    <MainCarousel texts={texts}/>
  </MediaQuery>
    </>
  )
}

export default App