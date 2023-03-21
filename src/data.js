import Butter from "./images/butterC.avif";
import Chole from "./images/choleB.png";
import Curry from "./images/curry.png";
import Saag from "./images/saag.png";
import Vegthali from "./images/vegthali.jpg";
// import aboutimg from "./images/aboutimg.jpg";

export const menuList = [
  {
    name: "Butter Chicken",
    description:
      "The reason why Butter chicken is such a delightful dish is because of, obviously, butter. The splendid blend of cream sauce, butter, spiced up tomatoes, and an array of Indian spices melts in your mouth instantly ",
    image: `${Butter}`,
    price: 200,
    recipe: "https://www.indianhealthyrecipes.com/butter-chicken/",
  },
  {
    name: "Chola Bhatura",
    description:
      " Punjabi dish liked almost all over India. Chole stands for a spiced tangy chickpea curry and Bhatura is a soft and fluffy fried leavened bread. Chola Bhatura always make for a delicious and filling meal. In this recipe post, I have included the step-by-step pictorial of making both the chana curry as well as a quick bhatura that is made without yeast.",
    image: `${Chole}`,
    price: 120,
    recipe: "https://www.vegrecipesofindia.com/chole-bhature/",
  },
  {
    name: "Curry",
    description:
      "Curry is one of the most famous meals in Indian cuisine and never disappoints, especially if you have time and make some homemade.",
    image: `${Curry}`,
    price: 200,
    recipe: "https://www.vegrecipesofindia.com/recipes/indian-curry-recipes/",
  },
  {
    name: "Saag",
    description:
      "Saag dishes in Indian cuisine contain leafy greens and a typical Punjabi (North Indian) dish, sarson ka saag is made with wilted greens. It's commonly served over flatbread, such as makki ki roti (Indian maize flatbread), as well as a dollop of fresh butter. ",
    image: `${Saag}`,
    price: 200,
    recipe:
      "https://www.tarladalal.com/sarson-ka-saag-punjabi-sarson-ka-saag-recipe-32800r",
  },
  {
    name: "veg thali",
    description:
      "main-course gravy, dal or curry, sabzi or stir fry, condiments like raita, chutney, pickle, salad, papadum, and side dishes like roti, naan, chapati, paratha, or boiled rice.",
    image: `${Vegthali}`,
    price: 200,
    recipe: "https://eastindianrecipes.net/vegetarian-thali/",
  },
];
