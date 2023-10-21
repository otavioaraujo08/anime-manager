import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../Pages/private/home';
import { CreateAnime } from '../Pages/private/createAnime';
import { Login } from '../Pages/public/login';

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
