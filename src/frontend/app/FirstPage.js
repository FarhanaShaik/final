import React from "react";
import {displayContainer,exploreDiv,exploreCard1,exploreCard2,iconStyle,hyperLinkLogin} from "./Layout.css";
import {Card,CardText,CardTitle,Row} from "reactstrap";
  import Icon from 'react-icons-kit';
import { plus,compass2 } from 'react-icons-kit/icomoon';
import { ic_explore } from 'react-icons-kit/md/ic_explore';
import {Link} from "react-router-dom";

export class FirstPage extends React.Component{
  render() {
    return(


     <div className={exploreDiv}>
     <Row>
     <Card className={exploreCard1}>
     <CardTitle>
         <Icon icon={plus} size={30} className={iconStyle}/>
         </CardTitle>
         <CardText>
         <Link to="/CompanyDetails" className={hyperLinkLogin}>
     Add Company
     </Link>
     </CardText>
     </Card>
     <Card className={exploreCard2}>
     <CardTitle>

          <Icon icon={ic_explore} size={45}  className={iconStyle}/>
        </CardTitle>
     <CardText style={{marginTop:'-0.7vw'}}>
     Explore Demo Company</CardText>
     </Card>
     </Row>
     </div>


    );
  }
}
