import React from 'react';
import {render} from 'react-dom';
import {displayContainer} from "./Layout.css";
class App extends React.Component {
  render () {
    return (
      <div className={displayContainer}>
      <p> Hello, World! Welcome to Acsestech</p>
      </div>
    );
  }
}
render(<App/>, document.getElementById('app'));
