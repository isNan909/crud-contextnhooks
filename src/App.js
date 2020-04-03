import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import {Listarticle} from './components/Listarticle';
import {Createarticle} from './components/Createarticle';
import {Editarticle} from './components/Editarticle';
import {Detailarticle} from './components/Detailarticle';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
       <header className="text-center"><h5>React CRUD with Hooks and Context API</h5></header>
       <Switch>
        <Route path="/" component={Listarticle} exact/>
        <Route path="/create" component={Createarticle} exact/>
        <Route path="/edit/:id" component={Editarticle} exact/>
        <Route path="/detail/:id" component={Detailarticle} exact/>
      </Switch>
    </GlobalProvider>
  );
}

export default App;
