import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import store from './store';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from "./routes/Layout";
import Home from "./routes/Home";
import NewNote from "./routes/NewNote";
import EditNote from "./routes/EditNote";

import reportWebVitals from './reportWebVitals';
import './sass/app.scss';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/new-note",
        element: <NewNote />,
      },
      {
        path: "/edit-note/:id",
        element: <EditNote />,
        loader: ({ params }) => {
          return params.id;
        },
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
