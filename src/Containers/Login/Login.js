import React from 'react';
import { connect } from 'react-redux';
import {Form, Button, Container, Row, Col, Card, Modal} from 'react-bootstrap';
import './Login.css';
import { createPost,verifyUserFetch } from '../../Actions/index';

const mapStateToProps = (state) => ({ login: state });

const mapDispatchToProps = dispatch => ({
    createPost: (post) => dispatch(createPost(post)),
    goDashBoard : (post) => dispatch(verifyUserFetch(post))
});

class Login extends React.Component{

    constructor(props){
        super(props);
        this.createPost = this.createPost.bind(this);
        this.state = {
            username:'',
            password:'',
            show:false
        };
        this.updateField = this.updateField.bind(this);
        this.handleClose = this.handleClose.bind(this);
    };

    createPost = (event) => {
        this.props.createPost(this.state)
    };

    updateField(event){
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }

    componentWillReceiveProps(nextProps){
        let status = nextProps.login.LoginReducer.json.data.status;
        if(status){
            this.props.history.push('/dashboard')
        }else{
            this.handleShow();
        }

    }

    handleClose() {
        this.setState({
            username:'',
            password:'',
            show:false
        });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render(){
        return(
            <div className={"inMiddle"}>
            <Container >
                <Row>
                    <Col md={{ span: 4, offset: 4 }}>
                        <Card className={"cardShadow"}>
                            <Card.Body>
                                <Form>
                                    <Form.Group controlId="formBasicEmail" className={"username"}>
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control name="username" onChange={this.updateField} value={this.state.username} type="text" placeholder="Enter username" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword" className={"password"}>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control name="password" password="password" onChange={this.updateField} value={this.state.password} type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Button onClick={this.createPost} variant="dark" className={"float-right"}>
                                        Login
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>


                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Error..!!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>The username or password entered is wrong. Please check again.</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
        </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);