export const CARDS_COUNT = 29;
export const FILMS_COUNT = 20;
export const MY_FILMS_COUNT = 10;
export const MORE_LIKE_FILMS = 4;
export const REVIEWS_COUNT = 1;

export const films = [
  {name: 'Fantastic Beasts: The Crimes of Grindelwald', poster: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg', id: Math.random().toString()},
  {name: 'Bohemian Rhapsody', poster: 'img/bohemian-rhapsody.jpg', id: Math.random().toString()},
  {name: 'Macbeth', poster: 'img/macbeth.jpg', id: Math.random().toString()},
  {name: 'Aviator', poster: 'img/aviator.jpg', id: Math.random().toString()},
  {name: 'We need to talk about Kevin', poster: 'img/we-need-to-talk-about-kevin.jpg', id: Math.random().toString()},
  {name: 'What We Do in the Shadows', poster: 'img/what-we-do-in-the-shadows.jpg', id: Math.random().toString()},
  {name: 'Revenant', poster: 'img/revenant.jpg', id: Math.random().toString()},
  {name: 'Johnny English', poster: 'img/johnny-english.jpg', id: Math.random().toString()},
  {name: 'Shutter Island', poster: 'img/shutter-island.jpg', id: Math.random().toString()},
  {name: 'Pulp Fiction', poster: 'img/pulp-fiction.jpg', id: Math.random().toString()},
  {name: 'No Country for Old Men', poster: 'img/no-country-for-old-men.jpg', id: Math.random().toString()},
  {name: 'Snatch', poster: 'img/snatch.jpg', id: Math.random().toString()},
  {name: 'Moonrise Kingdom', poster: 'img/moonrise-kingdom.jpg', id: Math.random().toString()},
  {name: 'Seven Years in Tibet', poster: 'img/seven-years-in-tibet.jpg', id: Math.random().toString()},
  {name: 'Midnight Special', poster: 'img/midnight-special.jpg', id: Math.random().toString()},
  {name: 'War of the Worlds', poster: 'img/war-of-the-worlds.jpg', id: Math.random().toString()},
  {name: 'Dardjeeling Limited', poster: 'img/dardjeeling-limited.jpg', id: Math.random().toString()},
  {name: 'Orlando', poster: 'img/orlando.jpg', id: Math.random().toString()},
  {name: 'Mindhunter', poster: 'img/mindhunter.jpg', id: Math.random().toString()},
  {name: 'Midnight Special', poster: 'img/midnight-special.jpg', id: Math.random().toString()},
];

export const GENRES_ITEMS = [
  'All genres',
  'Comedies',
  'Crime',
  'Documentary',
  'Dramas',
  'Horror',
  'Kids & Family',
  'Romance',
  'Sci-Fi',
  'Thrillers',
];

export const reviews = [
  { rating: 8.9, comment: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director&#39;s funniest and most exquisitely designed movies in years.', date: new Date(), user: { id: Math.random(), name: 'Kate Muir' }, id: Math.random().toString() },
];

export const AppRoute = {
  MAIN: '/',
  SIGN_IN: '/login',
  MY_LIST: '/mylist',
  FILM: '/films/:id',
  ADD_REVIEW: '/films/:id/review',
  PlAYER: '/player/:id',
};

export const myListFilms = films.slice(0, 8);
export const moreLikeFilms = films.slice(0, 4);
