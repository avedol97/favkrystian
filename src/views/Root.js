import React from 'react';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';
import Notes from './Notes';
import Twitters from './Twitters';
import Articles from './Articles';
import MainTemplate from '../components/Templates/MainTemplate';
import DetaislPage from './DetailPage';
import {routes} from '../routes';

const Root = () => (

  <BrowserRouter>
    <MainTemplate>
    <Switch>
      <Route exact path={routes.home} render={() => <Redirect to="notes" />}/>
      <Route exact path={routes.notes} component={Notes}/>
      <Route path={routes.note}  component={DetaislPage}/>
      <Route exact path={routes.articles}  component={Articles}/>
      <Route path={routes.article}  component={DetaislPage}/>
      <Route exact path={routes.twitters}  component={Twitters}/>
      <Route path={routes.twitter} component={DetaislPage}/>
    </Switch>
    </MainTemplate>
    </BrowserRouter>

);
export default Root;
