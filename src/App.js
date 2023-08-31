import React from 'react';
import Hero from './components/Hero';
import {
  heroapi,
  toprateslaes,
  popularsales,
  highlight,
  sneaker,
  story,
  footerAPI,
} from './data/data';
import Sales from './components/Sales';
import FlexContent from './components/FlexContent';
import Story from './components/Story';
import Footer from './components/Footer';
const App = () => {
  return (
    <main className="relative gap-16 flex flex-col">
      <Hero heroapi={heroapi} />
      <Sales endpoint={popularsales} ifExists />
      <FlexContent endpoint={highlight} ifExists />
      <Sales endpoint={toprateslaes} />
      <FlexContent endpoint={sneaker} />
      <Story story={story} />
      <Footer footerAPI={footerAPI} />
    </main>
  );
};

export default App;
