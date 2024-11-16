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
    path: '/podcast',
    element: <App></App>,
    children: [
      {
        path: ':id',
        element: <NewsPage></NewsPage>
      },
      {
        path: 'weekly',
        element: <PlaylistPage></PlaylistPage>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
