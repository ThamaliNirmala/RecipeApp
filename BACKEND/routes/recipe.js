const router = require("express").Router();
const Recipe = require("../models/recipe"); //import model

router.route('/add').post((req, res) => {
    const recipeName = req.body.recipeName;
    const ingredient = req.body.ingredient;
    const description = req.body.description;
    
    const newRecipeData = {
        recipeName,
        ingredient,
        description,
    }

    const newRecipe = new Recipe(newRecipeData);

    newRecipe.save()
           .then(() => res.json('New Recipe Added'))
           .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/").get((req , res)=>{ //route for display all
    
    Recipe.find().then((Recipes)=>{
        res.json(Recipes);
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/update/:id").put(async (req , res)=>{  //update data
    let RecipeID = req.params.id;
    const recipeName = req.body.recipeName;
    const ingredient = req.body.ingredient;
    const description = req.body.description;

    const updateRecipe = {recipeName , ingredient , description };

    await Recipe.findByIdAndUpdate(RecipeID , updateRecipe)
    .then(()=>{
        res.status(200).send({status : "Recipe Updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with updating data" , error : err.message});
    });
});

router.route("/delete/:id").delete(async (req , res)=>{  //delete data
    let RecipeID = req.params.id;

    await Recipe.findByIdAndDelete(RecipeID)
    .then(()=>{
        res.status(200).send({status : "Recipe Collection has successfully deleted"});

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with deleting data" , error : err.message});
    });
});


module.exports = router;