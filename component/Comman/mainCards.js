"use client";
import RecipeReviewCard from './RecipeReviewCard'


const MainCards = () => {
    const recipes = [
      {
        title: "Shrimp and Chorizo Paella",
        subheader: "September 14, 2016",
        image: "/static/images/cards/paella.jpg",
        alt: "Paella dish",
        description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        method: [
          "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.",
          "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp, and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes.",
          "Add pimentón, bay leaves, garlic, tomatoes, onion, salt, and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes.",
          "Add rice and stir gently to distribute. Top with artichokes and peppers, and cook until most of the liquid is absorbed, 15 to 18 minutes.",
          "Add reserved shrimp and mussels, cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes.",
          "Set aside to rest for 10 minutes and serve."
        ]
      },
      {
        title: "Grilled Cheese Sandwich",
        subheader: "July 23, 2018",
        image: "/static/images/cards/grilled_cheese.jpg",
        alt: "Grilled Cheese Sandwich",
        description: "A classic and comforting grilled cheese sandwich, perfect for a quick lunch.",
        method: [
          "Butter two slices of bread on one side each.",
          "Place cheese between the unbuttered sides of the bread.",
          "Grill the sandwich on a medium heat until golden brown and crispy on both sides.",
          "Serve hot with tomato soup if desired."
        ]
      },
      {
        title: "Vegetable Stir Fry",
        subheader: "June 11, 2020",
        image: "/static/images/cards/vegetable_stirfry.jpg",
        alt: "Vegetable Stir Fry",
        description: "A healthy and vibrant vegetable stir fry with your favorite veggies and a delicious sauce.",
        method: [
          "Heat oil in a pan and add chopped garlic and onions.",
          "Add chopped vegetables such as bell peppers, carrots, and broccoli.",
          "Stir-fry for 5-7 minutes until vegetables are tender but still crisp.",
          "Add soy sauce and stir well.",
          "Serve with rice or noodles."
        ]
      },
      {
        title: "Spaghetti Bolognese",
        subheader: "August 17, 2019",
        image: "/static/images/cards/spaghetti_bolognese.jpg",
        alt: "Spaghetti Bolognese",
        description: "A rich and savory spaghetti bolognese with ground beef, tomatoes, and herbs.",
        method: [
          "Brown ground beef in a pan and set aside.",
          "In the same pan, sauté onions, garlic, and carrots until soft.",
          "Add tomatoes, herbs, and cooked beef to the pan and simmer for 30 minutes.",
          "Serve with cooked spaghetti and top with parmesan cheese."
        ]
      },
      {
        title: "Chicken Caesar Salad",
        subheader: "May 5, 2021",
        image: "/static/images/cards/chicken_caesar.jpg",
        alt: "Chicken Caesar Salad",
        description: "A fresh and healthy chicken Caesar salad, perfect for a light meal.",
        method: [
          "Grill chicken breasts until fully cooked and slice thinly.",
          "Toss romaine lettuce with Caesar dressing.",
          "Top with grilled chicken, croutons, and parmesan cheese.",
          "Serve chilled."
        ]
      },
      {
        title: "Chocolate Cake",
        subheader: "October 31, 2022",
        image: "/static/images/cards/chocolate_cake.jpg",
        alt: "Chocolate Cake",
        description: "A rich and moist chocolate cake with a decadent chocolate frosting.",
        method: [
          "Preheat the oven to 350°F (175°C).",
          "Mix flour, cocoa powder, sugar, and baking soda in a bowl.",
          "Add eggs, milk, and vanilla extract, and mix until smooth.",
          "Pour the batter into a cake pan and bake for 30-35 minutes.",
          "Let the cake cool before frosting with chocolate icing."
        ]
      }
    ];
  
    console.log(recipes,"recipes")
  
    return (
      <div>
        {recipes.map((recipe, index) => (
          <RecipeReviewCard key={index} {...recipe} />
        ))}
      </div>
    );
  };
  "use client";



  export default MainCards;
  