import React from 'react';
import {render} from 'react-dom';

import {FirstPage} from "./FirstPage";

class App extends React.Component {
  render () {
    return (
    <div>Hello<div>
    );
  }
}
render(<App/>, document.getElementById('app'));
