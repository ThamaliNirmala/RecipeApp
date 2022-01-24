import React, { useState } from 'react';
import axios from 'axios';
import './Display.css';
import {Link} from "react-router-dom";


export default class DisplayRecipie extends React.Component {               //create DisplayRecipie method
  state = {
    query: "",             
    data: [],
    filteredData: []
  };

 
  handleInputChange = event => {                 //handle th event
    const query = event.target.value;
     
    this.setState(prevState => {
    const filteredData = prevState.data.filter(element => {
    return element.recipeName.toLowerCase().includes(query.toLowerCase());
    });

      return {
        query,
        filteredData
      };
    });
  };

   getData = () => {                          //fetch data from th edatabase
    fetch(`http://localhost:8070/recipe`)
      .then(response => response.json())
      .then(data => {
        const { query } = this.state;
        const filteredData = data.filter(element => {
          return(
        element.recipeName.toLowerCase().includes(query.toLowerCase()) >= 0 ||          //the way or style that data should be display
        element.ingredient.toLowerCase().includes(query.toLowerCase()) >= 0 ||
        element.description.toLowerCase().includes(query.toLowerCase()) >= 0 
        
      )
      });

        this.setState({
          data,
          filteredData
        });
      });
  };

  componentWillMount() {        //create a state
    this.getData();
  }

  render(){
    return (
    
       <div className="App"><br/>
         <h1 style ={{color:"#171717", textAlign: "center"}}>All Recipies</h1>  <br></br>          {/*get the data*/ }
   
   
         {/* Display data from API */}
         <div className="students"  style={{width:"95%",marginLeft:"50px"}}>
           {this.state.filteredData.length ===0?(<div className="alert alert-danger" style={{marginLeft:"50px"}}>
           <center>Data is not found
           <img src="notfound.jpg" style={{width:"50%"}}/></center> <br/><br/><br/><br/><br/><br/><br/>
          </div>
           ):(this.state.filteredData.map)(i => 
           
              <p>
                 <div className="student" style={{background:"#DCDCDC", width:"350px"}}>
                   
   
                   <div className="details">
                     <div>
                       <div style={{float:"right"}}>
                         
                       </div>
                       <p >🥘<b style={{color:"red"}}>Recipe Name  : </b>{i.recipeName}</p>
                       <p >🍲<b style={{color:"green"}}>Ingredients : </b>{i.ingredient} </p>
                       <p >📋<b style={{color:"blue"}}>Description  : </b>{i.description} </p>
                       
                       
                       
                     </div>
                   
                     <a href="/edit"><button className="btn btn-dark">Edit</button></a>
                     <> </>
                     
                     
       
                   </div>
                 </div>
             
          </p>
             )}
         </div><br/><br/>
         
   
       </div>
        
        
       
      
       
     );
   }
 }