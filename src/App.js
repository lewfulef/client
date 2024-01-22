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
              <PrivateRoute exact path="/ladonagatona/perfil" component={ Profile } />          

              {/* RUTAS DE AUTENTICACIÓN */}
              <AuthRoute exact path="/ladonagatona/iniciar-sesion" component={Login} />
              <AuthRoute exact path="/ladonagatona/crear-cuenta" component={Register} />

              {/* RUTAS ESTÁTICAS */}
              <PublicRoute exact path="/ladonagatona/catalogo" component={Catalog} />

              {/* RUTAS DINÁMICAS */}
              <PublicRoute exact path="/ladonagatona/:productId" component={Product} />

              {/* RUTA BASE */}
              <PublicRoute exact path="/ladonagatona/" component={Main} />

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
