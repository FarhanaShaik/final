import React from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
export class Footer extends React.Component {
  constructor(props) {
    super(props);

}

  render() {
    return (
      <div >
         <Navbar style={{backgroundColor:'#2C3E50',height:'5vw'}}>
<p style={{color:'white',textAlign:'center'}}>Footer</p>
         </Navbar>
      </div>
    );
  }
}
