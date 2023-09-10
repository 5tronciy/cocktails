import React from 'react';
import Header from './components/Header/Header';
import CocktailList from './components/CocktailList/CocktailList';
import GlassList from './components/GlassList/GlassList';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <CocktailList />
      <GlassList />
      <Footer />
    </>
  );
};

export default App;
