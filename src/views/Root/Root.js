import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Notes from './Notes';
import Twitters from './Twitters';
import Articles from './Articles';
import MainTemplates from '../../components/Templates/MainTemplates';

const Root = () => (

  <BrowserRouter>
    <MainTemplates>
    <Switch>
      <Route exact path="/" component={Notes}/>
      <Route path="/notes" component={Notes}/>
      <Route path="/articles" component={Articles}/>
      <Route path="/twitters" component={Twitters}/>
    </Switch>
    </MainTemplates>
    </BrowserRouter>

);
export default Root;
