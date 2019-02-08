import React from 'react';
import Nav from "react-bootstrap/es/Nav";


class NavButton extends React.Component{

    render(){
        return(
            <Nav.Link href={this.props.Link}>{this.props.Name}</Nav.Link>
        )
    }
}

export default NavButton;