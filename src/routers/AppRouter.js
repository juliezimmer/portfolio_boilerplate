import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Contact from '../components/Contact';
import Portfolio from '..components/Portfolio';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
<BrowserRouter>
   <div>
      <Header />
      <Switch>
         <Route  />
         <Route  />
         <Route  />
         <Route component={NotFoundPage} />  
      </Switch>
   </div>
</BrowserRouter>
);

export default AppRouter; // Making AppRouter the export default allows it to be imported in app.js and rendering an instance of it in that file. 





