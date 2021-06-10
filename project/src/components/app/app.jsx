import React from 'react';
import MainScreen from '../main-screen/main-screen';
import SignInScreen from '../sign-in/sign-in';
import AddReviewScreen from '../add-review/add-review';
import FilmScreen from '../film/film';
import PlayerScreen from '../player/player';
import MyListScreen from '../my-list/my-list';
import NotFoundScreen from '../my-list/my-list';
import { AppRoute, CARDS_COUNT } from '../../const/const';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const CardData = {
  GENRE: 'Genre',
  DATE: '2000',
  NAME: 'Name',
};

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainScreen
            cardsCount={CARDS_COUNT}
            genre={CardData.GENRE}
            date={CardData.DATE}
            name={CardData.NAME}
          />
        </Route>

        <Route exact path={AppRoute.SIGN_IN}>
          <SignInScreen />
        </Route>

        <Route exact path={AppRoute.MY_LIST}>
          <MyListScreen />
        </Route>

        <Route exact path={AppRoute.FILM}>
          <FilmScreen />
        </Route>

        <Route exact path={AppRoute.ADD_REVIEW}>
          <AddReviewScreen />
        </Route>

        <Route exact path={AppRoute.PlAYER}>
          <PlayerScreen />
        </Route>

        <Route>
          <NotFoundScreen />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
