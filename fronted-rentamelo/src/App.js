import React from 'react';
import NavbarC from './components/Navbar'

import FontsProvider from "./style/Fonts"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import SingUp1 from './components/SignUp';
import PrivateRoute from './components/PrivateRoute';
import MyProducts from './views/Auth/MyProducts';
import Home from './views/Public/Home';
import Rents from './views/Auth/Rents'
import AddProduct from 'views/Auth/AddProduct';
import "./App.css"
import ProductViewPage from 'views/Public/ProductView';
import RentDetailsPage from 'views/Auth/RentDetailsPage';
import GlobalStyle from 'style/Global';
import RentsLesser from 'views/Auth/RentsLesser';
import { PageProfile } from 'views/Auth/Profile';
import { SignUpPage } from 'views/Public/SignUp';
import { LoginPage } from 'views/Public/Login';
import ProductsByCategory from 'views/Public/Category';
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
        <PrivateRoute path="/perfil" exact component={PageProfile}></PrivateRoute>
        <Route path="/productos/categoria/:idCategory" exact component={ProductsByCategory} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/signup" exact component={SignUpPage} />
        <Route path="/" exact component={Home} />

      </Switch>

    </Router>


  );
}

export default App;
