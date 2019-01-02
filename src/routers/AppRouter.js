import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import ContactPage from '../components/ContactPage';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
import PortfolioItemPage from '../components/PortfolioItemPage';

const AppRouter = () => (
<BrowserRouter>
   <div>
      <Header />
      <Switch>
         <Route path="/" component={HomePage} exact={true} />
         <Route path="/portfolio/:id" component={PortfolioItemPage}/>
         <Route  path="/contact" component={ContactPage} />
         <Route component={NotFoundPage} />  
      </Switch>
   </div>
</BrowserRouter>
);

export default AppRouter; // Making AppRouter the export default allows it to be imported in app.js and rendering an instance of it in that file. 





