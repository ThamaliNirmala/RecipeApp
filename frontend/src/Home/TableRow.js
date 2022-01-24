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
                toast("Success! Assistent Deleted");
            }).catch((error) => {
                console.log(error)
            })
            
    }

    render() {
        return (
            <tr>
                <td style={{color:"darkgray"}}>{this.props.obj.name}</td>
                <td style={{color:"darkgray"}}>{this.props.obj.age}</td>
                <td style={{color:"darkgray"}}>{this.props.obj.ingredient}</td>
                <td style={{color:"darkgray"}}>{this.props.obj.birthdate}</td>
                <td style={{color:"darkgray"}}>{this.props.obj.address}</td>
                <td style={{color:"darkgray"}}>{this.props.obj.phone}</td>
                <td style={{color:"darkgray"}}>{this.props.obj.email}</td>
                <td style={{color:"darkgray"}}><img src ={"images/" + this.props.obj.photo} style={{width:"100px" , height:"100px"}} 
                className = "border border-danger rounded-circle"
                /></td>
                <td style={{width:"250px"}}>
                    <Link className="edit-link" to={`/edit-stockM/${this.props.obj._id}/${this.props.obj.name}/${this.props.obj.age}/${this.props.obj.ingredient}/${this.props.obj.birthdate}/${this.props.obj.address}/${this.props.obj.phone}/${this.props.obj.email}/${this.props.obj.photo}`}>
                        <Button size="sm" variant="success"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</Button>
                    </Link >
                    
                        <Button size="sm" onClick={() => window.location.reload(true) , this.deleteStudent} variant="danger"><i class="fa fa-window-close" aria-hidden="true" ></i> Delete</Button>
                        <a href="/edit-stockM"><Button
                        type="submit"  size="sm"
                        className="btn btn-primary"
                        ><i class="fa fa-refresh" aria-hidden="true"></i> Refresh</Button></a>
                    
                </td>
                <ToastContainer style = {{marginTop:"50px"}}/>
            </tr>
        );
    }
}