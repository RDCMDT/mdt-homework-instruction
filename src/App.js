import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";

// Component
import Home from './pages/Home'
import UI from './helpers/ui';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import './assets/css/styles.scss';
import Transfer from './pages/Transfer';

// Helpers
import Helpers from './helpers'

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
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (token === null || token === undefined) {
      Helpers.getToken().then(a => {
        setToken(a);
      });
    }
  })
  console.log(useWindowDimensions().width);

  if (useWindowDimensions().width >= 1000) {
    return (
      <div>
        <h1>You must opened on mobile / tablet resolution. Please Resize It :)</h1>
      </div>
    )
  }

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
        <Route exact path="*" element={<NotFoundRoute />} />
      </Routes>

    </div>
  )
}

export default App;