import FoodModel from "../models/Food.js";

const GetAllFoodForNoLoginUser = async (req, res) => {
  try {
  // main categories
    const categories = ["Fruit", "Bread", "Vegetables", "Meat", "Dairy", "Dessert"];
   // Create an array of promises to fetch food items for each category
   const foodPromises = categories.map(async (category) => {
    const regexCategory = new RegExp(category, "i");
    // Fetch the food items for the category
    return await FoodModel.find({ Category: regexCategory }).limit(5);
  });
  // Await all promises and flatten the results
  const foods = (await Promise.all(foodPromises)).flat();
  //   const regexCategory1 = new RegExp("Fruit", "i");
  //   const regexCategory2 = new RegExp("Bread", "i");
  //   const regexCategory3 = new RegExp("Vegtables", "i");
  //   const regexCategory4 = new RegExp("Meat", "i");
  //   const regexCategory5 = new RegExp("Dairy", "i");
  //   const regexCategory6 = new RegExp("Dessert", "i");

  //   const food1 = await FoodModel.find({ Category: regexCategory1 }).limit(5);
  //   const food2 = await FoodModel.find({ Category: regexCategory2 }).limit(5);
  //   const food3 = await FoodModel.find({ Category: regexCategory3 }).limit(5);
  //   const food4 = await FoodModel.find({ Category: regexCategory4 }).limit(5);
  //   const food5 = await FoodModel.find({ Category: regexCategory5 }).limit(5);
  //   const food6 = await FoodModel.find({ Category: regexCategory6 }).limit(5);
  //   // Structure the response object
  //   const foods = [
  //     ...food1,
  //     ...food2,
  //     ...food3,
  //     ...food4,
  //     ...food5,
  //     ...food6,
  // ];

    // const category=await FoodModel.aggregate([{
    //   $group: {
    //     _id: "$Category",
    //     count: { $sum: 1 }
    //     }
    //     },
    //     {
    //       $sort: { name: 1 }
    //     }
    //   ]);
    // console.log(category)
    // console.log(foods.length)
    res.json(foods);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const GetFoodForNoLoginUser = async (req, res) => {
  try {
    const categories = ["Fruit", "Bread", "Vegetables", "Meat", "Dairy", "Dessert"];
    const category =req.body.Category;
    if(categories.includes(category)){
      const regexCategory = new RegExp(category, "i");
    const foods = await FoodModel.find({ Category: regexCategory }).limit(5);
    res.json(foods);
    }else{
      res.status(400).json({ message: "Invalid Category" });
    }
    
    } catch (err) {
      res.status(500).json({ message: err.message });
    
  }


}

export { GetAllFoodForNoLoginUser, GetFoodForNoLoginUser };
