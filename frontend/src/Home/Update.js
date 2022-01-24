import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {Link} from "react-router-dom";
import NavBar from "./NavBar";




export default class Edit extends Component {

  constructor(props) {

    super(props)
    
    this.onChangeRecipeName = this.onChangeRecipeName.bind(this);
    this.onChangeIngredient = this.onChangeIngredient.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    

    // State
    this.state = {
        recipeName: '',
        ingredient: '',
        description: '',
      
    }
  }

  onChangeRecipeName(e) {
    this.setState({ recipeName: e.target.value })
  }

  onChangeIngredient(e) {
    this.setState({ ingredient: e.target.value })
  }

  onChangeDescription(e) {
    this.setState({ description: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const formData = new FormData();
        formData.append('recipeName', this.state.recipeName);
        formData.append('ingredient', this.state.ingredient);
        formData.append('description', this.state.description);

    axios.put('http://localhost:8070/recipe/update/' + this.props.match.params.id, formData)
      .then((res) => {
        console.log(res.data)
        alert('Recipe successfully updated')
      }).catch((error) => {
        console.log(error)
      })
      // Redirect to Recipe List 
    this.props.history.push('/edit-Recipe')
    
  }


  render() {
    const { recipeName , ingredient , description} = this.props.match.params;
    return (
        <div>
              <div><br/><br/>
                <div className="form-wrapper container" style={{width:"100%", background:"#000000" , padding:"5px 5px 5px 5px" , opacity:"0.8"}}><br/>
                <h1 style = {{color: "white"}}>Current Info 👁</h1>
                <table >

                    <td controlId="recipeName">
                    <label>Recipe Name</label>
                    <input type="text" value={recipeName} onChange={this.onChangeRecipeName} required disabled/>
                    </td>

                    <td controlId="Ingredient">
                    <label>Ingredient</label>
                    <input type="text" value={ingredient} onChange={this.onChangeIngredient} required disabled/>
                    </td>

                    <td controlId="description">
                    <label>description</label>
                    <input type="text" value={description} onChange={this.onChangeDescription} required disabled/>
                    </td>


                </table><br/>
                </div><br/>
                <div className="form-wrapper container" style={{width:"50%"  , background:"#000000" , padding:"5px 5px 10px 10px" , opacity:"0.8"}}><br/>
                <h1 style = {{color: "white"}}>Need to Update ? 🤔</h1>
                <Form onSubmit={this.onSubmit}>
               
                    <Form.Group controlId="Name">
                    <Form.Label>Recipe Name</Form.Label>
                    <Form.Control type="text" value={this.state.recipeName} onChange={this.onChangeRecipeName} placeholder="✍🏻 Edit Name" required pattern="[A-Za-z]+"/>
                    </Form.Group><br/>

                    <Form.Group controlId="Ingredient">
                    <Form.Label>Ingredient</Form.Label>
                    <Form.Control type="text" value={this.state.ingredient} onChange={this.onChangeIngredient} placeholder="✍🏻 Edit Ingredient" required pattern="[0-9]{1,3}"/>
                    </Form.Group><br/>

                    <Form.Group controlId="description">
                    <Form.Label>description</Form.Label>
                    <Form.Control type="text" value={this.state.description} onChange={this.onChangeDescription} placeholder="✍🏻 Edit description" required pattern="[A-Za-z]+"/>
                    </Form.Group><br/>

                    <br/>
                    <Button variant="danger" size="lg" block="block" type="submit">
                    <i className="fa fa-paper-plane-o" aria-hidden="true"></i> Update Assistant
                    </Button>
                </Form><br/>
                </div><br/><br/>
                </div>
        </div>
       );
  }

}