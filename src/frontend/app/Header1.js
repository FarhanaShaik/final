import React from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";


export class Header1 extends React.Component {
  constructor(props) {
    super(props);

}

  render() {
    return (
      <div >
         <Navbar style={{backgroundColor:'#2C3E50',height:'5vw'}}>
<p style={{color:'white',textAlign:'center'}}>Header </p>
         </Navbar>
      </div>
    );
  }
}
