import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux"
import { Auth } from './pages/Auth.jsx';
import { store } from './data/store.js';
import { Home } from './pages/Home.jsx';
import { Music } from './pages/Music/Music.jsx';
import { Tickets } from './pages/Tickets/Tickets.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "home",
        element: <Home/>,
       
      },
      {
        path: "music",
        element: <Music></Music>
      },
      {
        path: "tickets",
        element: <Tickets></Tickets>
      }
    ]
  },
  {
    path: "/auth",
    children: [
      {
        path: "login",
        element: <Auth></Auth>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
 
  </React.StrictMode>,
)
