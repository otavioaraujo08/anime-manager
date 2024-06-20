import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { createBrowserRouter } from 'react-router-dom';

import { Login } from './pages/login';
import { Home } from './pages/private/home';
import { CreateAnime } from './pages/private/createAnime';
import { AnimePage } from '@pages/private/animePage';

import './index.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
    },
    {
        path: '/animes',
        element: <Home />,
    },
    {
        path: '/animes/anime/:animeId',
        element: <AnimePage />,
    },
    {
        path: '/create-anime-info',
        element: <CreateAnime />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    </Provider>
);
