import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import PlaylistPage from './pages/PlaylistPage.jsx';
import NewsPage from './pages/NewsPage.jsx';

const router = createBrowserRouter([
  {
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: '/',
    element: <App></App>
  },
  {
    path: '/1',
    element: <NewsPage></NewsPage>
  },
  {
    path: '/2',
    element: <NewsPage></NewsPage>
  },
  {
    path: '/3',
    element: <NewsPage></NewsPage>
  },
  {
    path: '/4',
    element: <NewsPage></NewsPage>
  },
  {
    path: '/5',
    element: <NewsPage></NewsPage>
  },
  {
    path: '/6',
    element: <NewsPage></NewsPage>
  },
  {
    path: '/7',
    element: <NewsPage></NewsPage>
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
