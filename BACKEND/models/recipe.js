const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    recipeName:{
        type:String,
        unique:true,
    },
    ingredient:{
        type:String,
    },
    description:{
        type:String,
    }
})

const Recipe = mongoose.model("recipe" , RecipeSchema);
module.exports = Recipe;