import React, { useState, useEffect } from "react";
import FilterBar from "./FilterBar.js"
import Header from './Header/Header.js'
import Contain from './Container/Contain'
import Section from './Container/Section'

function App() {
  return (
    
    <div>
      <Header/>
      <Section/>
      
      {/* <Contain/>
      <FilterBar/> */}
    </div>
  );
}

export default App;
