import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux"
import { Auth } from './pages/Auth.jsx';
import { store } from './data/store.js';
import { Home } from './pages/Home.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/login",
    element: <Auth></Auth>
  },
  {
    path: "/home",
    element: <Home></Home>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
 
  </React.StrictMode>,
)
