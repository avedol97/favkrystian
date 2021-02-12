import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
// import MainTemplates from '../../components/Templates/MainTemplates';
import Notes from './Notes';
import Twitters from './Twitters';
import Articles from './Articles';

const Root = () => (
// <MainTemplates>
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Notes}/>
      <Route path="/articles" component={Articles}/>
      <Route path="/twitters" component={Twitters}/>
    </Switch>
    </BrowserRouter>
// </MainTemplates>
);
export default Root;
