import React from 'react';
import Listing from './components/Listing';
import './App.css';
import etsy from './data/etsy.json';

function App() {
  const items = JSON.parse(JSON.stringify(etsy));

  return (
    <Listing items={items} />
  );
}

export default App;
