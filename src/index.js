import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProductAnalysis } from './app/pages/ProductAnalysis';
import { ProductRecords } from './app/pages/ProductRecords';
const router = createBrowserRouter( [
  {
    path: "/",
    element: <App />
  },
  {
    path:"/pa",
    element: <ProductAnalysis/>
  },
  {
    path:"/apd",
    element:<ProductRecords/>
  }
])

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
