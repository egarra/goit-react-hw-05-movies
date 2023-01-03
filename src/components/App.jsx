import { lazy, Suspense } from "react";
import { Route, Routes } from 'react-router-dom';

import { Loader } from "./Loader/Loader.jsx";
const Home = lazy(() => import("../pages/Home/Home.jsx"));
const MovieDetails = lazy(() => import("../pages/MovieDetails/MovieDetails.jsx"));
const AppBar = lazy(() => import("../components/AppBar/AppBar.jsx"));
const Movies = lazy(() => import("../pages/Movies/Movies.jsx"));
const Cast = lazy(() => import("../pages/Cast/Cast.jsx"));
const Reviews = lazy(() => import("../pages/Reviews/Reviews.jsx"));


export const App = () => {
  return (
      <Suspense fallback={<Loader/>}>
      <AppBar />
      <Routes>
        <Route path="/" index element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
      </Routes>
      </Suspense>
  );
};
