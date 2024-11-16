import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import PlaylistPage from './pages/PlaylistPage.jsx';

const router = createBrowserRouter([
  {
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: '/',
    element: <App></App>
  },
  {
    path: '/23',
    element: <App></App>
  },
  {
    path: '/954',
    element: <App></App>
  },
  {
    path: '/55',
    element: <App></App>
  },
  {
    path: '/weekly',
    element: <PlaylistPage></PlaylistPage>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
