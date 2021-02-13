import React from 'react';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';
import Notes from './Notes';
import Twitters from './Twitters';
import Articles from './Articles';
import MainTemplate from '../components/Templates/MainTemplate';
import DetailPage from './DetailPage';

const Root = () => (

  <BrowserRouter>
    <MainTemplate>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/notes" />}/>
      <Route exact path="/notes" component={Notes}/>
      <Route path="/notes/:id" component={DetailPage}/>
      <Route exact path="/articles" component={Articles}/>
      <Route path="/articles/:id" component={DetailPage}/>
      <Route exact path="/twitters" component={Twitters}/>
      <Route path="/twitters/:id" component={DetailPage}/>
    </Switch>
    </MainTemplate>
    </BrowserRouter>

);
export default Root;
