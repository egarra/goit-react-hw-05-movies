import { Home } from '../pages/Home/Home';
import { MovieDetails } from '../pages/MovieDetails/MovieDetails';
import { AppBar } from './AppBar/AppBar';
import { Movies } from '../pages/Movies/Movies';
import { Cast } from '../pages/Cast/Cast';
import { Reviews } from 'pages/Reviews/Reviews';

import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
      </Routes>
    </>
  );
};
