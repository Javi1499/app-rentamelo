import React from 'react';
import NavbarC from './components/Navbar'
import Login from './components/Login'
import FontsProvider from "./style/Fonts"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SingUp from './components/SignUp';
import PrivateRoute from './components/PrivateRoute';
import MyProducts from './views/Auth/MyProducts';
import Home from './views/Public/Home';
import Rents from './views/Auth/Rents'
import AddProduct from 'views/Auth/AddProduct';
import "./App.css"
import ProductViewPage from 'views/Public/ProductView';
import RentDetailsPage from 'views/Auth/RentDetailsPage';
import GlobalStyle, { Container } from 'style/Global';
import RentsLesser from 'views/Auth/RentsLesser';
//const url="http://localhost:3000"

function App() {
  return (
    <Router>
      <FontsProvider />
      <NavbarC />
      <FontsProvider />
      <GlobalStyle />
      <Switch>
        <PrivateRoute path="/agregar-producto" component={AddProduct} />
        <PrivateRoute path="/producto/:idProduct" exact component={ProductViewPage}></PrivateRoute>
        <PrivateRoute path="/mis-productos" exact component={MyProducts}></PrivateRoute>
        <PrivateRoute path="/rentas" exact component={Rents}></PrivateRoute>
        <PrivateRoute path="/rentas-arrendador" exact component={RentsLesser}></PrivateRoute>
        <PrivateRoute path="/detallesRenta/:idProduct/:rentDetails" exact component={RentDetailsPage}></PrivateRoute>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SingUp} />
        <Route path="/" exact component={Home} />

      </Switch>

    </Router>


  );
}

export default App;
