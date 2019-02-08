import React from 'react';
import {connect} from 'react-redux';
import "./Dashboard.css";
import { Col, Container, Row, Table} from 'react-bootstrap';

class Dashboard extends React.Component{



    render(){

        return(
            <div className={"home"}>
                This is the dashboard... Believe me...!!!!!
                <Container >
                    <Row>
                        <Col md={{ span: 8, offset: 2 }}>
                            <Table striped bordered hover variant="dark">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                                </thead>
                                <tbody>

                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td colSpan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }

    componentDidMount() {
        console.log(this.state);
        const {dispatch} = this.props;
        dispatch({type:"VERIFY_LOGIN"});
        //dispatch(push('/about')); //to navigate to a different route
    }
}

const mapStateToProps = state => {
    return {
        home: state.home
    };
};

export default connect(mapStateToProps)(Dashboard);