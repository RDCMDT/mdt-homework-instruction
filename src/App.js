import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Link, Routes, Router, BrowserRouter } from "react-router-dom";
import Home from './pages/Home'
import PostIndex from './pages/posts/Index'
import PostCreate from './pages/posts/Create'
import PostEdit from './pages/posts/Edit'
import { Provider } from "react-redux";
import store from "./store";
// import logo from './logo.svg';
// import './assets/css/styles.scss';

let App = () => (
  <Provider store={store}>
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/">EXPRESS.JS + REACT.JS</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="nav-link">HOME</Nav.Link>
              <Nav.Link as={Link} to="/posts" className="nav-link">POSTS</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/posts" element={<PostIndex />} />
        <Route exact path="/posts/create" element={<PostCreate />} />
        <Route exact path="/posts/edit/:id" element={<PostEdit />} />
      </Routes>

    </div>
  </Provider>
)

export default App;