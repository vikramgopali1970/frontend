import React from 'react';
import { connect } from 'react-redux';
import {Form, Button, Container, Row, Col, Card} from 'react-bootstrap';
import './Login.css';
import { createPost,verifyUserFetch } from '../../Actions/index';

const mapStateToProps = (state) => ({ channel: state })

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
            data:'',
        };
        this.updateField = this.updateField.bind(this);
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
        let newState = {};
        newState["data"] = nextProps.channel.LoginReducer.json.payload;
        this.setState(newState);
        this.props.history.push('/dashboard')
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
                                        <Form.Control name="username" onChange={this.updateField} type="text" placeholder="Enter username" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword" className={"password"}>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control name="password" password="password" onChange={this.updateField} type="password" placeholder="Password" />
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
        </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);