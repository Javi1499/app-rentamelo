import React, {useState, useEffect} from 'react';
import ListaProductos from './components/ListaProductos'
import NavbarC from './components/Navbar'
import Formulario from './components/Formulario'
import Login from './components/Login'
import { Container, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getToken } from "./helpers";

function App() {
  const [estaLogueado, setEstaLogueado] = useState(false);

useEffect(() => {
  let token = getToken();
  if(token) return setEstaLogueado(true);

}, [])

  return (
    <Router>
      <NavbarC />
      <Container className="App">
        {estaLogueado ?         <Switch>
    
          <Route path="/agregar-producto">
            <Row className="justify-content-center">
            <Formulario/>
            </Row>
          </Route>
          <Route path="/" exact>
          <ListaProductos />
          </Route>
        </Switch> : 
        <Login
        setEstaLogueado={setEstaLogueado}
        />
        }

      </Container>
    </Router>


  );
}

export default App;
