import React from 'react';
import {connect} from 'react-redux';
import "./Dashboard.css";
import { Col, Container, Row, Table, DropdownButton, Dropdown, Pagination} from 'react-bootstrap';
import _ from 'lodash';
import {verifyUserFetch} from '../../Actions/index';
import axios from "axios";

const apiUrl = `http://localhost:8000`;

class Dashboard extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            data : [{
                n:1,
                fn:'a',
                ln : 'z',
                un : 'e'
            },
                {
                    n:2,
                    fn:'b',
                    ln : 'y',
                    un : 'i'
                },
                {
                    n:3,
                    fn:'c',
                    ln : 'x',
                    un : 'f'
                },
                {
                    n:4,
                    fn:'d',
                    ln : 'w',
                    un : 'h'
                }],
            pagination : {
                currPage : 1,
                sInd : 0,
                eInd : 1
            }
        };
        this.orderProject = this.orderProject.bind(this);
        this.orderCategory = this.orderCategory.bind(this);
        this.orderUsername = this.orderUsername.bind(this);
        this.orderProjectTitle = this.orderProjectTitle.bind(this);
    }


    orderProject(data){
        this.setState({
            data : _.sortBy(this.state.data,"date_starts")
        });
    }
    orderCategory(data){
        this.setState({
            data : _.sortBy(this.state.data,"ln")
        });
    }
    orderUsername(data){
        this.setState({
            data : _.sortBy(this.state.data,"username")
        });
    }
    orderProjectTitle(data){
        console.log("hehehehe",data);
        this.setState({
            data : _.sortBy(this.state.data,"project_title")
        });
    }

    handleRemove(num){
        console.log(num);
        this.setState({
            pagination : {
                currPage : num,
                sInd : 0+((num-1)*2),
                eInd : 1+((num-1)*2),
            }
        })
    }

    render(){
        let items = [];
        for (let number = 1; number <= this.state.data.length/2; number++) {
            items.push(
                <Pagination.Item onClick={()=>{this.handleRemove(number)}} key={number} active={number === this.state.pagination.currPage}>
                    {number}
                </Pagination.Item>,
            );
        }
        console.log(this.state.data);
        let variant = "Secondary";
        // this.state.data) = _.sortBy(this.state.data), 'un');
        console.log(this.state.data);
        let rows =[];
        for (let i = this.state.pagination.sInd; i <= this.state.pagination.eInd ;i++){
            let rowID = `row${i}`
            let cell = []
            let cellID = 0;
            cell.push(<td key={cellID++} id={cellID}>{this.state.data[i]["username"]}</td>)
            cell.push(<td key={cellID++} id={cellID}>{this.state.data[i]["project_title"]}</td>)
            cell.push(<td key={cellID++} id={cellID}>{this.state.data[i]["date_starts"]}</td>)
            // cell.push(<td key={cellID++} id={cellID}>{this.state.data[i]["un"]}</td>)
            rows.push(<tr key={i} id={rowID}>{cell}</tr>)
        }
        return(
            <div className={"home"}>
                <div className={"contents"}>
                    <Container >
                        <Row>
                            <Col md={{ span: 8, offset: 2 }}>
                                <Table striped bordered hover variant="dark">
                                    <thead>
                                    <tr>
                                        <th>Username</th>
                                        <th>Project Title</th>
                                        <th>Category</th>
                                        <th>Start Date</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {rows}
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Container>

                    <Container>
                        <Row>
                            <Col  md={{ span: 6, offset: 2 }}>
                                <DropdownButton
                                    title={"SortBy"}
                                    variant={variant.toLowerCase()}
                                    id={`dropdown-variants-${variant}`}
                                    key={variant}>
                                    <Dropdown.Item eventKey="1" onClick={this.orderProject}>Recent Projects</Dropdown.Item>
                                    <Dropdown.Item eventKey="2" onClick={this.orderCategory}>Category Name</Dropdown.Item>
                                    <Dropdown.Item eventKey="3" onClick={this.orderUsername}>Username</Dropdown.Item>
                                    <Dropdown.Item eventKey="4" onClick={this.orderProjectTitle}>Project Title</Dropdown.Item>
                                </DropdownButton>
                            </Col>
                            <Col>
                                <Pagination className={"Secondary"}>{items}</Pagination>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }

    componentWillMount() {
        console.log("came here",this.state);
        // const {dispatch} = this.props;
        // dispatch(verifyUserFetch(this.state));
        //dispatch(push('/about')); //to navigate to a different route
        axios.get(`${apiUrl}/dashboard`).then(data=>{
            console.log("aaaaaa",data.data.status);
            this.setState({
                data:data.data.status
            })
        }).catch(error=>{
            console.log(error);
        })
    }
}

const mapStateToProps = state => {
    return {
        dashboard: state.dashboard
    };
};

const mapDispatchToProps = () => ({
    goDashBoard : (post) => (verifyUserFetch(post))
});

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);