import React from 'react';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';
import {Provider} from 'react-redux'
import store from '../store';
import Notes from './Notes';
import Twitters from './Twitters';
import Articles from './Articles';
import MainTemplate from '../components/Templates/MainTemplate';
import DetailPage from './DetailPage';
import {routes} from '../routes';
import LoginPage from './LoginPage';

const Root = () => (
<Provider store={store}>
  <BrowserRouter>
    <MainTemplate>
    <Switch>
      <Route exact path={routes.login} component={LoginPage}/>
      <Route exact path={routes.home} render={() => <Redirect to="notes" />}/>
      <Route exact path={routes.notes} component={Notes}/>
      <Route path={routes.note}  component={DetailPage}/>
      <Route exact path={routes.articles}  component={Articles}/>
      <Route path={routes.article}  component={DetailPage}/>
      <Route exact path={routes.twitters}  component={Twitters}/>
      <Route path={routes.twitter} component={DetailPage}/>
    </Switch>
    </MainTemplate>
    </BrowserRouter>
</Provider>
);
export default Root;
