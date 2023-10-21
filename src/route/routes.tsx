import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/private/home';
import { CreateAnime } from '../pages/private/createAnime';
import { Login } from '../pages/public/login';

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
