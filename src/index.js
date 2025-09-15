import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProductRecords } from './app/pages/ProductRecords';
import { SalesAnalysis } from './app/pages/SalesAnalysis';
import { SalesData } from './app/pages/SalesData';
import { MoviesAnalysis } from './app/pages/MoviesAnalysis';
import { MoviesRecords } from './app/pages/MoviesRecords';
const router = createBrowserRouter( [
  {
    path: "/",
    element: <App />
  },
  {
    path: "/productRecords",
    element: <ProductRecords />
  },
  {
    path: "/salesAnalysis",
    element: <SalesAnalysis />
  },
  {
    path: "/salesData",
    element: <SalesData />
  },
  {
    path: "/moviesAnalysis",
    element: <MoviesAnalysis />
  },
  {
    path: "/moviesRecords",
    element: <MoviesRecords />
  }

] )

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
