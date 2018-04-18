import React from 'react';
import {render} from 'react-dom';
import {CompanyDetails} from "./settings/CompanyDetails";
export class App extends React.Component {
  render () {
    return (
    <div>Hello1
    <CompanyDetails/>
    </div>
    );
  }
}
render(<App/>,window.document.getElementById('app'));
