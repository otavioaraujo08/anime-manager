import { CreateAnime } from '@pages/private/createAnime';
import { Home } from '@pages/private/home';
import { Login } from '@pages/public/login';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
    },
    {
        path: '/home',
        element: <Home />,
    },
    {
        path: '/create-anime-info',
        element: <CreateAnime />,
    },
]);
