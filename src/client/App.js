import React from 'react';

import Header from '../client/js/views/header'
import Home from '../client/js/views/home'
import About from '../client/js/views/about'
import Work from '../client/js/views/work'
import Contact from '../client/js/views/contact'

import '../client/js/birds'
import '../client/js/script'

import '../client/styles/styles.scss'

function App() {
  return (
		<div className="App">
      <Header />
      <Home />
      <About />
      <Work />
      <Contact />
		</div>
  )
}

export default App;