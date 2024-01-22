import './App.css';
import Main from './components/Main'
import Product from './components/Product'

import Header from './components/Header';
import Footer from './components/Footer';

import Profile from './components/Profile'

import Catalog from './components/Catalog'

import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'

import Login from './components/Login';
import Register from './components/Register';

import ProductState from './context/Product/ProductState';
import UserState from './context/User/UserState';
import LayoutState from './context/Layout/LayoutState'

import AuthRoute from './components/Routes/AuthRoute';
import PrivateRoute from './components/Routes/PrivateRoute'
import PublicRoute from './components/Routes/PublicRoute';



function App() {
  return (
    <>
    <LayoutState>
      <ProductState>
        <UserState>
          <Router>
            <Header />

            <Switch>

              {/* RUTAS PRIVADAS */}
              <PrivateRoute exact path="/client/perfil" component={ Profile } />          

              {/* RUTAS DE AUTENTICACIÓN */}
              <AuthRoute exact path="/client/iniciar-sesion" component={Login} />
              <AuthRoute exact path="/client/crear-cuenta" component={Register} />

              {/* RUTAS ESTÁTICAS */}
              <PublicRoute exact path="/client/catalogo" component={Catalog} />

              {/* RUTAS DINÁMICAS */}
              <PublicRoute exact path="/client/:productId" component={Product} />

              {/* RUTA BASE */}
              <PublicRoute exact path="/client/" component={Main} />

            </Switch>

            <Footer />
          </Router>
          </UserState>
        </ProductState>
      </LayoutState>
    </>
  );
}

export default App;
