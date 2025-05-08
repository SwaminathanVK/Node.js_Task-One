import mongoose from 'mongoose';

const recipeshema = mongoose.Schema({
    FoodName : String,
    Mode_of_Cooking : String,
    Origin_Country : String,
    Cooking_Time: Number,
    Ingredients : [String],
})

const Recipee = mongoose.model('Recipe', recipeshema);
export default Recipee;