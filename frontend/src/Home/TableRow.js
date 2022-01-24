import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default class TableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteStudent = this.deleteStudent.bind(this);
    }

    deleteStudent() {
        axios.delete('http://localhost:8070/recipe/delete/' + this.props.obj._id)
            .then((res) => {
                alert('Are you sure you want to delete the recipe?')
            }).catch((error) => {
                console.log(error)
            })
            
    }

    render() {
        return (
            <tr>
                <td style={{color:"darkgray"}}>{this.props.obj.recipeName}</td>
                <td style={{color:"darkgray"}}>{this.props.obj.ingredient}</td>
                <td style={{color:"darkgray"}}>{this.props.obj.description}</td>
                <td style={{width:"350px"}}>
                    <Link className="edit-link" to={`/edit-Recipe/${this.props.obj._id}/${this.props.obj.recipeName}/${this.props.obj.ingredient}/${this.props.obj.description}`}>
                        <Button size="sm" variant="success"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</Button>
                    </Link >
                    
                        <Button size="sm" onClick={() => window.location.reload(true) , this.deleteStudent} variant="danger"><i class="fa fa-window-close" aria-hidden="true" ></i> Delete</Button>
                        <a href="/edit-Recipe"><Button
                        type="submit"  size="sm"
                        className="btn btn-primary"
                        ><i class="fa fa-refresh" aria-hidden="true"></i> Refresh</Button></a>
                    
                </td>
                <ToastContainer style = {{marginTop:"100px"}}/>
            </tr>
        );
    }
}