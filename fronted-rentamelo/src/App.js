import React from 'react';
import NavbarC from './components/Navbar'
import Login from './components/Login'
import FontsProvider from "./style/Fonts"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SingUp from './components/SignUp';
import PrivateRoute from './components/PrivateRoute';
import MyProducts from './views/Auth/MyProducts';
import Home from './views/Public/Home';
import AddProduct from 'views/Auth/AddProduct';
import "./App.css"
import ProductViewPage from 'views/Public/ProductView';
//const url="http://localhost:3000"

function App() {
  return (
    <Router >
      <FontsProvider />
      <NavbarC />
      <FontsProvider />
      <div className="container justify-content-center" >
        <Switch>
          <PrivateRoute path="/agregar-producto" component={AddProduct} />
          <Route path="/producto/:idProduct" exact><ProductViewPage /></Route>
          <Route path="/mis-productos" exact ><MyProducts /></Route>
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SingUp} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>


  );
}

export default App;
