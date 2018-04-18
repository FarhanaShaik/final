import React from 'react';
import {render} from 'react-dom';
import {HashRouter as Router, Route,Link} from "react-router-dom";
import {Footer} from "./Footer";
import {FirstPage} from "./FirstPage";
import {Header1} from "./Header1";


export class App extends React.Component {
  render () {
    return (
      <Router>
    <div>

  <Header1/>
  <Route path="/FirstPage" component={FirstPage}/>
    <Footer/>
    </div>
    </Router>
    );
  }
}
render(<App/>,window.document.getElementById('app'));
