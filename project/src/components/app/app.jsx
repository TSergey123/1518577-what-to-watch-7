import React from 'react';
import MainScreen from '../main-screen/main-screen';
import { CARDS_COUNT } from '../../const/const';

const CardData = {
  GENRE: 'Genre',
  DATE: '2000',
  NAME: 'Name',
};

function App() {
  return (
    <MainScreen
      cardsCount = {CARDS_COUNT}
      genre = {CardData.GENRE}
      date = {CardData.DATE}
      name = {CardData.NAME}
    />
  );
}

export default App;
