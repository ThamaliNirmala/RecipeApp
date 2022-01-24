import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import TableRow from './TableRow';
import {Link} from "react-router-dom";
import NavBar from "./NavBar";
export default class tList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8070/recipe')
      .then(res => {
        this.setState({
          students: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.students.map((res, i) => {
      return <TableRow obj={res} key={i} />;
    });
  }


  render() {
    return (
        <div>
          <NavBar/>
          <section>
                <article className="article">
                    <center>
                        <div className="container" style={{width:"100%"}}>
                        <div className="table-wrapper container ">
              <Table striped bordered hover >
                  <thead>
                      <tr>
                          <th style={{color:"black"}}>Recipe Name</th>
                          <th style={{color:"black"}}>Ingredient</th>
                          <th style={{color:"black"}}>Description</th>
                      </tr>
                  </thead>
                  <tbody>
                      {this.DataTable()}
                  </tbody>
              </Table>
          </div>
          <br/><br/>
                        </div>
                    </center>
                </article>
            </section>
          
        </div>
    );
  }
}