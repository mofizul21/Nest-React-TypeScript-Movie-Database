import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Post from './components/movie/Post';
import Edit from './components/movie/Edit';
import Create from './components/movie/Create';


function App(): JSX.Element {

  return (
    <div className="App">
    <Navbar />
      <div className={'container'}>
        <Switch>
          <Route path={"/"} exact={true} component={Home} />
          <Route path={"/movie/:movieId"} component={Post}/>
          <Route path={"/edit/:movieId"} component={Edit}/>
          <Route path={"/create"} component={Create} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
