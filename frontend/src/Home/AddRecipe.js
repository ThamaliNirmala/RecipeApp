import {useState , useEffect} from "react";
import axios from "axios";
import { TextField , Button} from "@material-ui/core";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./Header";
import NavBar from "./NavBar";

const AddRecipe = ()=>{

    const [recipeName , setRecipeName] = useState("");
    const [ingredient , setIngredient] = useState("");
    const [description , setDescription] = useState("");
    const [loading, setLoading] = useState(false); //additional 
    const [isError, setIsError] = useState(false);

    const addRecipeHandler = async (e)=>{
        e.preventDefault();

        setLoading(true);
        setIsError(false); //additional

        const config = {
            headers : {
                "Content-Type" : "application/json"
            }
        }

        try {
            const {data} = await axios.post("http://localhost:8070/recipe/add" , {recipeName , ingredient , description} , config);
            toast("Success! New Recipe Added 😘")
            setLoading(false);

        } catch (error) {
            toast("Error! recipe not Added Duplicate Key Found: Couple Name must be unique")
            setLoading(false);
            setIsError(true);
            setTimeout(()=>{

            } , 5000); //5s
        }
    }

    return(
        <div>
            <NavBar />
            <section>
                <article className="article">
                    <center>
                        <div className="container" style={{width:"50%"}}>
                        <form onSubmit={addRecipeHandler}>
                    <div className="card">
                        <div className="card-body">
                            <center>
                                <h5 className="card-title">Add New Recipe</h5>
                                <TextField
                                    id="outlined-with-placeholder"
                                    label="Enter Recipe Name"
                                    placeholder="ex: Kottu"
                                    margin="normal"
                                    variant="outlined"                                  
                                    type="text"
                                    size="small"
                                    color="secondary"
                                    value={recipeName}
                                    onChange={(e)=>setRecipeName(e.target.value)} required 
                                /><br/>
                                <TextField
                                    id="outlined-with-placeholder"
                                    label="Enter Ingredient"
                                    placeholder="Ingredient"
                                    margin="normal"
                                    variant="outlined"
                                    type="text"
                                    size="small"
                                    color="secondary"
                                    value={ingredient}
                                    onChange={(e)=>setIngredient(e.target.value)} required
                                /><br/>
                                <TextField
                                    id="outlined-with-placeholder"
                                    label="Enter Description"
                                    margin="normal"
                                    variant="outlined"
                                    placeholder="Description"
                                    type="text"
                                    size="small"
                                    color="secondary"
                                    value={description}
                                    onChange={(e)=>setDescription(e.target.value)} required
                                /><br/>
                                

                                {isError && <small className="mt-3 d-inline-block text-danger">Something went wrong. Please try again later.</small>}<br/>
                                    {/*decision*/}
                                <Button variant="contained" color="secondary" type="submit"
                                disabled={loading}>
                                <i class="fa fa-upload" aria-hidden="true"></i> <h6 style={{marginLeft:"5px"}}> </h6> {loading ? 'Uploading...' : 'Upload'}  
                                </Button>
                                <ToastContainer style={{marginTop:"5px" , position:"absolute"}}/>

                            </center>
                        </div>
                    </div>
                </form>
                        </div>
                    </center>
                </article>
            </section>
            
        </div>
    )

}

export default AddRecipe; 