import React from 'react';
import ListaProductos from './components/ListaProductos'
import NavbarC from './components/Navbar'
import Formulario from './components/Formulario'
import Login from './components/Login'
import ProductoView from './components/ProductoView'
import { Container, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SingUp from './components/SignUp';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <Router>
      <NavbarC />

        <Switch>
          <PrivateRoute path="/agregar-producto" component={Formulario}/>
          <Route path="/producto/:id_producto" children={<ProductoView />} />
          <PrivateRoute path="/mis-productos/:condicion" exact children={<ListaProductos />} />
          <Route path="/" exact component={ListaProductos} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SingUp} />
        </Switch>
    </Router>


  );
}

export default App;
