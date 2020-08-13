import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';

const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact /> 
      <Route path="/cadastro/video" component={CadastroVideo} /> {/* as rotas para quando for digitado na url*/}
      <Route path="/" component={Pagina404} />                          {/* a busca fica mais rápida */}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
