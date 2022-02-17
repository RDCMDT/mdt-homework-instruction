import { useState, useEffect } from 'react'
import { Navbar, Container, Nav, Button, Row, Col } from 'react-bootstrap'
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Link, Routes, Router, BrowserRouter, useNavigate } from "react-router-dom";
import Home from './pages/Home'
import PostIndex from './pages/posts/Index'
import PostCreate from './pages/posts/Create'
import PostEdit from './pages/posts/Edit'
import { Provider, useDispatch, useSelector } from "react-redux";
import UI from './helpers/ui';


import Auth from './helpers'

import Login from './pages/auth/login';
import Register from './pages/auth/register';
import './assets/css/styles.scss';
import Transfer from './pages/Transfer';

let useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(UI.getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(UI.getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

let App = () => {
  console.log(useWindowDimensions());
  let navigate = useNavigate();
  const todos = useSelector(state => state.todoReducer.todos)
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (token === null || token === undefined) {
      Auth.getToken().then(a => {
        setToken(a);
      });
    }
  })

  const NotFoundRoute = () => {
    return (
      <h1>
        Can't find this route 404
      </h1>
    )
  }

  return (
    <div className='content'>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/" element={token == null ? <Login /> : <Home />} />
        <Route exact path="/transfer" element={token == null ? <Login /> : <Transfer />} />
        {/* <Route exact path="/posts" element={token == null ? <Login /> : <PostIndex />} />
        <Route exact path="/posts/create" element={token == null ? <Login /> : <PostCreate />} />
        <Route exact path="/posts/edit/:id" element={token == null ? <Login /> : <PostEdit />} /> */}
        <Route exact path="*" element={<NotFoundRoute />} />
      </Routes>

    </div>
  )
}

export default App;