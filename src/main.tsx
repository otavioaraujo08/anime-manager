import React from 'react';
import ReactDOM from 'react-dom/client';
import { router } from './route/routes';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    </Provider>
);
