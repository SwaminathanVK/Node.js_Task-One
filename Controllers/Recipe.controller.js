import Recipee from '../Models/Recipee.Schema.js';


//create and save a new Recipee

export const createRecipee = async(req,res)=>{
    try {
        const newRecipee = new Recipee(req.body);
        await newRecipee.save();
        res.status(200).json({message: "Recipee created successfully"});
    } catch (error) {
        console.log(error);
    };

}

// Retrieve all recipees from the database.
export const getrecipeedetail = async (req, res) => {
    try {
        const recipee = await Recipee.find()
        res.status(200).json({ data: recipee });
    } catch (error) {
        console.log(error);
    }
}

// Find a single recipees by id
export const getRecipeeById = async (req, res) => {
    try {
        const recipeID = req.params.id;
        const recipee = await Recipee.findById(recipeID);
        if (!recipee) {
            return res.status(404).json({message:"Recipee Not Found!"})
        }
        res.status(200).json({message:"Find recipee", data:recipee});
    } catch (error) {
       console.log(error);
    }
}

// Update  by id
export const updateRecipeeById = async (req, res) => {
    try {
        const { id } = req.params;
        // console.log("Origin_Country", Origin_Country);
        const { FoodName, Cooking_Time, Ingredients, Origin_Country } = req.body;
        console.log('Updating Recipe ID:',id);
        
        const result = await Recipee.updateOne({ _id:id }, {$set:{ FoodName, Origin_Country ,Cooking_Time, Ingredients }} );
        console.log(result);

        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Recipee Not Found!" });
        }
        const updateReci = await Recipee.find({ Origin_Country })
        res.status(200).json({data: updateReci});
        
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Internal Server Error'})
        
    }
}


// delete recipee by id

export const deleteRecipeById = async (req, res) => {
  try{
    const { id } = req.params;
    const result =await Recipee.findByIdAndDelete(id);
    if(!result){
        return res.status(404).json({message:'Recipee not found'})
    }
    res.status(200).json({message:'Recipe deleted successfully', deleteRecipeById: result});
  }catch(error){
    console.log(error);
    res.status(500).json({message:'Internal server error'});
  }

};
