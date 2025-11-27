import React, { useState } from 'react';
import { X } from 'lucide-react';
import { ChefHat, Clock, Users, Search, Heart, Filter } from 'lucide-react';

const recipes = [
  // Breakfast
  {
    id: 1,
    name: "Classic Pancakes",
    category: "Breakfast",
    cuisine: "American",
    time: "20 min",
    servings: 4,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&h=350&fit=crop",
    ingredients: [
      "2 cups all-purpose flour",
      "2 tablespoons sugar",
      "2 teaspoons baking powder",
      "1 teaspoon salt",
      "2 eggs",
      "1¾ cups milk",
      "4 tablespoons melted butter",
      "1 teaspoon vanilla extract"
    ],
    instructions: [
      "In a large bowl, whisk together flour, sugar, baking powder, and salt.",
      "In another bowl, beat eggs and add milk, melted butter, and vanilla extract.",
      "Pour wet ingredients into dry ingredients and mix until just combined. Don't overmix; lumps are okay.",
      "Heat a non-stick pan or griddle over medium heat and lightly grease it.",
      "Pour ¼ cup of batter for each pancake onto the griddle.",
      "Cook until bubbles form on the surface and edges look set, about 2-3 minutes.",
      "Flip and cook for another 2 minutes until golden brown.",
      "Serve hot with maple syrup, butter, and fresh berries."
    ]
  },
  {
    id: 2,
    name: "Avocado Toast Deluxe",
    category: "Breakfast",
    cuisine: "International",
    time: "10 min",
    servings: 2,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=500&h=350&fit=crop",
    ingredients: [
      "2 slices whole grain bread",
      "1 ripe avocado",
      "2 eggs",
      "Cherry tomatoes, halved",
      "Red pepper flakes",
      "Salt and pepper to taste",
      "Lemon juice",
      "Olive oil"
    ],
    instructions: [
      "Toast the bread slices until golden and crispy.",
      "Mash the avocado with a fork and season with salt, pepper, and lemon juice.",
      "Heat olive oil in a pan and fry the eggs to your liking (sunny side up recommended).",
      "Spread the mashed avocado generously on the toasted bread.",
      "Top with the fried egg and cherry tomatoes.",
      "Sprinkle with red pepper flakes and a drizzle of olive oil.",
      "Serve immediately while hot and enjoy!"
    ]
  },
  {
    id: 3,
    name: "French Omelette",
    category: "Breakfast",
    cuisine: "French",
    time: "15 min",
    servings: 2,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500&h=350&fit=crop",
    ingredients: [
      "4 large eggs",
      "2 tablespoons butter",
      "¼ cup shredded cheese",
      "2 tablespoons fresh herbs (chives, parsley)",
      "Salt and pepper",
      "2 tablespoons cream",
      "Diced ham or mushrooms (optional)"
    ],
    instructions: [
      "Beat eggs with cream, salt, and pepper until well combined.",
      "Heat butter in a non-stick pan over medium-low heat.",
      "Pour in the egg mixture and let it cook undisturbed for 30 seconds.",
      "Using a spatula, gently push the cooked edges toward the center.",
      "When eggs are mostly set but still slightly runny on top, add cheese and fillings to one half.",
      "Fold the omelette in half and slide onto a plate.",
      "Garnish with fresh herbs and serve immediately."
    ]
  },
  {
    id: 4,
    name: "Blueberry Waffles",
    category: "Breakfast",
    cuisine: "American",
    time: "25 min",
    servings: 4,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=500&h=350&fit=crop",
    ingredients: [
      "2 cups all-purpose flour",
      "2 tablespoons sugar",
      "1 tablespoon baking powder",
      "2 eggs, separated",
      "1¾ cups milk",
      "½ cup melted butter",
      "1 cup fresh blueberries",
      "Maple syrup for serving"
    ],
    instructions: [
      "Preheat your waffle iron according to manufacturer's instructions.",
      "Mix flour, sugar, and baking powder in a large bowl.",
      "In another bowl, whisk together egg yolks, milk, and melted butter.",
      "Beat egg whites until stiff peaks form.",
      "Combine wet and dry ingredients, then gently fold in egg whites.",
      "Fold in blueberries carefully to avoid crushing them.",
      "Pour batter into waffle iron and cook until golden and crispy.",
      "Serve hot with maple syrup and extra blueberries."
    ]
  },
  {
    id: 5,
    name: "Eggs Benedict",
    category: "Breakfast",
    cuisine: "American",
    time: "30 min",
    servings: 2,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=500&h=350&fit=crop",
    ingredients: [
      "4 eggs",
      "2 English muffins",
      "4 slices Canadian bacon",
      "3 egg yolks for hollandaise",
      "½ cup melted butter",
      "1 tablespoon lemon juice",
      "White vinegar",
      "Salt and cayenne pepper",
      "Fresh chives for garnish"
    ],
    instructions: [
      "Make hollandaise: Whisk egg yolks and lemon juice in a bowl over simmering water.",
      "Slowly drizzle in melted butter while whisking constantly until thick. Season with salt and cayenne.",
      "Bring a pot of water to simmer and add a splash of vinegar.",
      "Poach eggs by creating a whirlpool and gently sliding eggs in, cook for 3-4 minutes.",
      "Toast English muffins and warm the Canadian bacon in a pan.",
      "Assemble: Place bacon on muffin halves, top with poached egg.",
      "Generously spoon hollandaise sauce over the top.",
      "Garnish with chives and serve immediately."
    ]
  },
  // Lunch
  {
    id: 6,
    name: "Caesar Salad",
    category: "Lunch",
    cuisine: "Italian",
    time: "15 min",
    servings: 4,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500&h=350&fit=crop",
    ingredients: [
      "1 large romaine lettuce head",
      "½ cup Caesar dressing",
      "1 cup croutons",
      "½ cup grated Parmesan cheese",
      "2 chicken breasts, grilled",
      "2 anchovy fillets (optional)",
      "Black pepper",
      "Lemon wedges"
    ],
    instructions: [
      "Wash and tear romaine lettuce into bite-sized pieces.",
      "Grill chicken breasts until fully cooked, then slice into strips.",
      "In a large bowl, toss lettuce with Caesar dressing until well coated.",
      "Add croutons and half of the Parmesan cheese, toss again.",
      "Arrange on plates and top with sliced chicken.",
      "Sprinkle with remaining Parmesan and black pepper.",
      "Garnish with anchovy fillets if using and lemon wedges.",
      "Serve immediately for best texture."
    ]
  },
  {
    id: 7,
    name: "Club Sandwich",
    category: "Lunch",
    cuisine: "American",
    time: "15 min",
    servings: 2,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&h=350&fit=crop",
    ingredients: [
      "6 slices white or whole wheat bread",
      "4 slices cooked bacon",
      "4 slices turkey breast",
      "4 slices cheddar cheese",
      "2 leaves lettuce",
      "2 tomato slices",
      "Mayonnaise",
      "Mustard"
    ],
    instructions: [
      "Toast all bread slices until golden brown.",
      "Spread mayonnaise on one side of each toast slice.",
      "On the first slice, layer turkey and cheese.",
      "Add the second slice of toast, spread with mustard.",
      "Layer bacon, lettuce, and tomato on the second slice.",
      "Top with the third slice of toast, mayo side down.",
      "Secure with toothpicks and cut diagonally into quarters.",
      "Serve with potato chips and pickles on the side."
    ]
  },
  {
    id: 8,
    name: "Margherita Pizza",
    category: "Lunch",
    cuisine: "Italian",
    time: "40 min",
    servings: 4,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&h=350&fit=crop",
    ingredients: [
      "1 pizza dough (store-bought or homemade)",
      "1 cup tomato sauce",
      "8 oz fresh mozzarella, sliced",
      "Fresh basil leaves",
      "2 tablespoons olive oil",
      "2 cloves garlic, minced",
      "Salt and pepper",
      "Parmesan cheese for finishing"
    ],
    instructions: [
      "Preheat oven to 475°F (245°C) with a pizza stone if you have one.",
      "Roll out pizza dough on a floured surface to desired thickness.",
      "Mix tomato sauce with minced garlic, salt, and pepper.",
      "Spread sauce evenly over the dough, leaving a border for the crust.",
      "Arrange mozzarella slices evenly over the sauce.",
      "Drizzle with olive oil and season with a pinch of salt.",
      "Bake for 12-15 minutes until crust is golden and cheese is bubbly.",
      "Remove from oven, top with fresh basil and Parmesan. Slice and serve hot."
    ]
  },
  {
    id: 9,
    name: "Greek Salad Wrap",
    category: "Lunch",
    cuisine: "Greek",
    time: "15 min",
    servings: 2,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500&h=350&fit=crop",
    ingredients: [
      "2 large tortilla wraps",
      "1 cup diced cucumber",
      "1 cup cherry tomatoes, halved",
      "½ cup crumbled feta cheese",
      "¼ cup sliced red onion",
      "½ cup olives",
      "¼ cup Greek yogurt",
      "2 tablespoons lemon juice",
      "Lettuce leaves",
      "Oregano"
    ],
    instructions: [
      "Mix Greek yogurt with lemon juice and oregano to make the dressing.",
      "Lay out tortilla wraps on a clean surface.",
      "Place lettuce leaves in the center of each wrap.",
      "Layer cucumber, tomatoes, red onion, and olives on top.",
      "Sprinkle with crumbled feta cheese.",
      "Drizzle the yogurt dressing over the vegetables.",
      "Fold in the sides and roll up tightly.",
      "Cut in half diagonally and serve immediately."
    ]
  },
  {
    id: 10,
    name: "Tom Yum Soup",
    category: "Lunch",
    cuisine: "Thai",
    time: "30 min",
    servings: 4,
    difficulty: "Medium",
    image: "https://images.pexels.com/photos/12561886/pexels-photo-12561886.jpeg?w=500&h=350&fit=crop",
    ingredients: [
      "4 cups chicken or vegetable broth",
      "200g shrimp, peeled",
      "200g mushrooms, sliced",
      "2 stalks lemongrass, bruised",
      "3 kaffir lime leaves",
      "3 Thai chilies",
      "3 tablespoons fish sauce",
      "2 tablespoons lime juice",
      "1 tablespoon sugar",
      "Cilantro for garnish"
    ],
    instructions: [
      "Bring broth to a boil in a large pot.",
      "Add lemongrass, kaffir lime leaves, and chilies. Simmer for 5 minutes.",
      "Add mushrooms and cook for 3 minutes.",
      "Add shrimp and cook until they turn pink, about 3-4 minutes.",
      "Season with fish sauce, lime juice, and sugar.",
      "Taste and adjust seasoning for balance of sour, salty, and spicy.",
      "Remove lemongrass stalks before serving.",
      "Garnish with fresh cilantro and serve hot with rice."
    ]
  },
  // Dinner
  {
    id: 11,
    name: "Grilled Salmon with Asparagus",
    category: "Dinner",
    cuisine: "International",
    time: "25 min",
    servings: 4,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&h=350&fit=crop",
    ingredients: [
      "4 salmon fillets (6 oz each)",
      "1 lb asparagus, trimmed",
      "3 tablespoons olive oil",
      "2 cloves garlic, minced",
      "1 lemon, sliced",
      "Salt and pepper",
      "Fresh dill",
      "Butter"
    ],
    instructions: [
      "Preheat grill or oven to 400°F (200°C).",
      "Season salmon fillets with salt, pepper, and minced garlic.",
      "Toss asparagus with olive oil, salt, and pepper.",
      "Place salmon skin-side down on the grill or baking sheet.",
      "Arrange asparagus around the salmon and top with lemon slices.",
      "Grill or bake for 12-15 minutes until salmon flakes easily with a fork.",
      "Top salmon with a pat of butter and fresh dill.",
      "Serve immediately with the roasted asparagus and lemon wedges."
    ]
  },
  {
    id: 13,
    name: "Chicken Tikka Masala",
    category: "Dinner",
    cuisine: "Indian",
    time: "50 min",
    servings: 6,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&h=350&fit=crop",
    ingredients: [
      "2 lbs chicken breast, cubed",
      "1 cup yogurt",
      "2 tablespoons tikka masala spice",
      "1 onion, diced",
      "3 cloves garlic, minced",
      "1 tablespoon ginger, grated",
      "1 can (14 oz) crushed tomatoes",
      "1 cup heavy cream",
      "2 tablespoons butter",
      "Fresh cilantro",
      "Rice or naan for serving"
    ],
    instructions: [
      "Marinate chicken in yogurt and half the tikka spices for at least 30 minutes.",
      "Heat butter in a large pan and cook chicken until browned. Set aside.",
      "In the same pan, sauté onions until soft and golden.",
      "Add garlic and ginger, cook for 1 minute until fragrant.",
      "Stir in remaining tikka spices and cook for 30 seconds.",
      "Add crushed tomatoes and simmer for 10 minutes.",
      "Stir in cream and return chicken to the pan. Simmer for 15 minutes.",
      "Garnish with cilantro and serve with rice or warm naan bread."
    ]
  },
  {
    id: 14,
    name: "Spaghetti Carbonara",
    category: "Dinner",
    cuisine: "Italian",
    time: "25 min",
    servings: 4,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500&h=350&fit=crop",
    ingredients: [
      "1 lb spaghetti",
      "6 oz pancetta or bacon, diced",
      "4 egg yolks",
      "1 cup Parmesan cheese, grated",
      "Black pepper",
      "Salt",
      "2 cloves garlic",
      "Fresh parsley"
    ],
    instructions: [
      "Cook spaghetti in salted boiling water until al dente. Reserve 1 cup pasta water.",
      "While pasta cooks, fry pancetta in a large pan until crispy.",
      "Add garlic to the pan and cook for 1 minute, then remove from heat.",
      "In a bowl, whisk together egg yolks, Parmesan, and lots of black pepper.",
      "Drain pasta and add to the pancetta pan.",
      "Remove pan from heat and quickly stir in egg mixture, adding pasta water to create a creamy sauce.",
      "Toss continuously until the sauce coats the pasta without scrambling the eggs.",
      "Serve immediately with extra Parmesan and parsley."
    ]
  },
  {
    id: 15,
    name: "Lamb Curry",
    category: "Dinner",
    cuisine: "Indian",
    time: "90 min",
    servings: 6,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&h=350&fit=crop",
    ingredients: [
      "2 lbs lamb shoulder, cubed",
      "2 onions, finely chopped",
      "4 cloves garlic, minced",
      "2 tablespoons ginger, grated",
      "2 tablespoons curry powder",
      "1 can coconut milk",
      "1 can diced tomatoes",
      "2 potatoes, cubed",
      "3 tablespoons oil",
      "Salt and pepper",
      "Fresh cilantro",
      "Rice for serving"
    ],
    instructions: [
      "Heat oil in a large pot and brown lamb pieces in batches. Set aside.",
      "In the same pot, sauté onions until golden brown.",
      "Add garlic and ginger, cook for 2 minutes.",
      "Stir in curry powder and cook for 1 minute until fragrant.",
      "Return lamb to pot and add tomatoes. Simmer for 45 minutes.",
      "Add coconut milk and potatoes. Simmer for another 30 minutes until lamb is tender.",
      "Season with salt and pepper to taste.",
      "Garnish with cilantro and serve with basmati rice."
    ]
  },
  {
    id: 16,
    name: "Shrimp Scampi",
    category: "Dinner",
    cuisine: "Italian",
    time: "20 min",
    servings: 4,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1633504581786-316c8002b1b9?w=500&h=350&fit=crop",
    ingredients: [
      "1 lb large shrimp, peeled",
      "8 oz linguine",
      "4 cloves garlic, minced",
      "½ cup white wine",
      "4 tablespoons butter",
      "2 tablespoons olive oil",
      "Juice of 1 lemon",
      "Red pepper flakes",
      "Fresh parsley",
      "Parmesan cheese"
    ],
    instructions: [
      "Cook linguine according to package directions until al dente.",
      "Heat olive oil and butter in a large skillet over medium heat.",
      "Add garlic and red pepper flakes, sauté for 1 minute.",
      "Add shrimp and cook for 2 minutes per side until pink.",
      "Pour in white wine and lemon juice, simmer for 2 minutes.",
      "Toss drained pasta with the shrimp and sauce.",
      "Add more butter if needed for a silky sauce.",
      "Garnish with fresh parsley and Parmesan. Serve immediately."
    ]
  },
  {
    id: 17,
    name: "Beef Tacos",
    category: "Dinner",
    cuisine: "Mexican",
    time: "30 min",
    servings: 4,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&h=350&fit=crop",
    ingredients: [
      "1 lb ground beef",
      "1 packet taco seasoning",
      "8 taco shells",
      "1 cup shredded lettuce",
      "1 cup diced tomatoes",
      "1 cup shredded cheddar cheese",
      "½ cup sour cream",
      "½ cup salsa",
      "1 avocado, sliced",
      "Fresh cilantro"
    ],
    instructions: [
      "Brown ground beef in a skillet over medium-high heat.",
      "Drain excess fat and add taco seasoning with ¼ cup water.",
      "Simmer for 5 minutes until beef is well coated and sauce thickens.",
      "Warm taco shells in the oven according to package directions.",
      "Set up all toppings in small bowls for a taco bar.",
      "Fill each taco shell with seasoned beef.",
      "Top with lettuce, tomatoes, cheese, sour cream, and salsa.",
      "Garnish with avocado and cilantro. Serve immediately."
    ]
  },
  {
    id: 18,
    name: "Teriyaki Chicken Bowl",
    category: "Dinner",
    cuisine: "Japanese",
    time: "35 min",
    servings: 4,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop",
    ingredients: [
      "4 chicken thighs",
      "½ cup teriyaki sauce",
      "2 cups cooked rice",
      "1 cup broccoli florets",
      "1 carrot, julienned",
      "2 tablespoons sesame oil",
      "Sesame seeds",
      "Green onions, sliced",
      "Sriracha (optional)"
    ],
    instructions: [
      "Marinate chicken thighs in teriyaki sauce for 15 minutes.",
      "Heat sesame oil in a pan and cook chicken for 6-7 minutes per side.",
      "Remove chicken and let rest, then slice into strips.",
      "In the same pan, stir-fry broccoli and carrots for 5 minutes.",
      "Add a splash of teriyaki sauce to the vegetables.",
      "Assemble bowls with rice as the base.",
      "Top with sliced chicken and stir-fried vegetables.",
      "Garnish with sesame seeds and green onions. Drizzle with extra teriyaki or sriracha."
    ]
  },
  {
    id: 20,
    name: "BBQ Ribs",
    category: "Dinner",
    cuisine: "American",
    time: "3 hours",
    servings: 4,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&h=350&fit=crop",
    ingredients: [
      "2 racks baby back ribs",
      "2 cups BBQ sauce",
      "¼ cup brown sugar",
      "2 tablespoons paprika",
      "1 tablespoon garlic powder",
      "1 tablespoon onion powder",
      "1 teaspoon cayenne pepper",
      "Salt and pepper",
      "Apple cider vinegar"
    ],
    instructions: [
      "Preheat oven to 275°F (135°C).",
      "Remove membrane from the back of ribs.",
      "Mix brown sugar, paprika, garlic powder, onion powder, cayenne, salt, and pepper for the rub.",
      "Coat ribs generously with the spice rub.",
      "Wrap ribs tightly in foil and place on a baking sheet.",
      "Bake for 2.5 hours until tender.",
      "Unwrap, brush with BBQ sauce, and broil for 5 minutes until caramelized.",
      "Let rest for 10 minutes, slice between bones, and serve with extra BBQ sauce."
    ]
  },
  // Cuisine Specialties
  {
    id: 21,
    name: "Pad Thai",
    category: "Cuisine",
    cuisine: "Thai",
    time: "30 min",
    servings: 4,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=500&h=350&fit=crop",
    ingredients: [
      "8 oz rice noodles",
      "2 chicken breasts, sliced",
      "2 eggs",
      "3 tablespoons fish sauce",
      "2 tablespoons tamarind paste",
      "2 tablespoons sugar",
      "2 cloves garlic, minced",
      "Bean sprouts",
      "Peanuts, crushed",
      "Lime wedges",
      "Green onions",
      "Red chili flakes"
    ],
    instructions: [
      "Soak rice noodles in warm water for 30 minutes, then drain.",
      "Mix fish sauce, tamarind paste, and sugar in a bowl.",
      "Heat oil in a wok and scramble eggs. Set aside.",
      "Stir-fry chicken until cooked through, then add garlic.",
      "Add drained noodles and sauce mixture, toss for 3 minutes.",
      "Add bean sprouts and cooked eggs, toss everything together.",
      "Serve on plates and top with crushed peanuts and green onions.",
      "Garnish with lime wedges and chili flakes on the side."
    ]
  },
  {
    id: 22,
    name: "Beef Bourguignon",
    category: "Cuisine",
    cuisine: "French",
    time: "3 hours",
    servings: 6,
    difficulty: "Hard",
    image: "https://i.pinimg.com/736x/34/51/b3/3451b374c688e6817c228b424b5d2e7e.jpg?w=500&h=350&fit=crop",
    ingredients: [
      "3 lbs beef chuck, cubed",
      "6 slices bacon, chopped",
      "2 cups red wine",
      "2 cups beef broth",
      "2 onions, chopped",
      "3 carrots, chopped",
      "8 oz mushrooms",
      "3 cloves garlic, minced",
      "2 tablespoons tomato paste",
      "2 bay leaves",
      "Fresh thyme",
      "2 tablespoons flour",
      "Salt and pepper",
      "Butter"
    ],
    instructions: [
      "Cook bacon in a Dutch oven until crisp. Remove and set aside.",
      "Season beef with salt and pepper, then sear in the bacon fat until browned. Remove and set aside.",
      "Sauté onions, carrots, and mushrooms in the pot until softened.",
      "Add garlic and tomato paste, cooking 1 minute.",
      "Return beef and bacon to pot, sprinkle in flour, and stir well.",
      "Pour in red wine and beef broth until meat is just covered.",
      "Add bay leaves and thyme. Bring to simmer.",
      "Cover and cook 2.5 hours until beef is tender.",
      "Remove herbs, adjust seasoning, and serve with mashed potatoes or crusty bread."
    ]
  }
];

/* ---------------------------------------------
   MAIN APPLICATION
---------------------------------------------- */
export default function CookBook() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [cuisine, setCuisine] = useState("All");
  const [favorites, setFavorites] = useState([]);
  const [selected, setSelected] = useState(null);

  const categories = ["All", "Breakfast", "Lunch", "Dinner", "Cuisine"];
  const cuisines = [
    "All",
    ...Array.from(new Set(recipes.map((r) => r.cuisine)))
  ];

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const filtered = recipes.filter((r) => {
    const matchSearch =
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.ingredients.some((i) =>
        i.toLowerCase().includes(search.toLowerCase())
      );
    const matchCategory = category === "All" || r.category === category;
    const matchCuisine = cuisine === "All" || r.cuisine === cuisine;
    return matchSearch && matchCategory && matchCuisine;
  });

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#dbfff6ff" }}>
      {/* HEADER */}
      <div
        style={{
          background: "#6ddbfce7",
          color: "white",
          padding: "30px",
          textAlign: "center",
          fontSize: "32px",
          fontWeight: "bold",
          fontFamily: "Arial, sans-serif",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
        }}
      >
        Wanga’s Cook Book  
        <div style={{ fontSize: "15px", opacity: 0.6 }}>
          by Wanga Malinda
        </div>
      </div>

      {/* SEARCH + FILTER BAR */}
      <div
        style={{
          display: "flex",
          gap: "15px",
          padding: "20px",
          justifyContent: "center",
          flexWrap: "wrap"
        }}
      >
        {/* Search */}
        <div style={{ display: "flex", alignItems: "center", position: "relative" }}>
          <Search size={20} style={{ position: "absolute", left: 10, opacity: 0.6 }} />
          <input
            placeholder="Search recipes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: "10px 35px",
              width: "250px",
              borderRadius: "8px",
              border: "1px solid #ccc"
            }}
          />
        </div>

        {/* Category */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc"
          }}
        >
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        {/* Cuisine */}
        <select
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc"
          }}
        >
          {cuisines.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* RECIPE GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "20px",
          padding: "20px"
        }}
      >
        {filtered.map((r) => (
          <div
            key={r.id}
            onClick={() => setSelected(r)}
            style={{
              background: "white",
              borderRadius: "12px",
              overflow: "hidden",
              cursor: "pointer",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img src={r.image} alt="" style={{ width: "100%", height: "180px", objectFit: "cover" }} />

            <div style={{ padding: "15px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3 style={{ margin: "0", fontSize: "20px" }}>{r.name}</h3>

                <Heart
                  size={22}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(r.id);
                  }}
                  color={favorites.includes(r.id) ? "red" : "gray"}
                  fill={favorites.includes(r.id) ? "red" : "none"}
                  style={{ cursor: "pointer" }}
                />
              </div>

              <div style={{ display: "flex", gap: "10px", marginTop: "10px", opacity: 0.7 }}>
                <Clock size={18} /> {r.time}
              </div>

              <div style={{ display: "flex", gap: "10px", marginTop: "5px", opacity: 0.7 }}>
                <Users size={18} /> {r.servings} servings
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selected && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px"
          }}
        >
          <div
            style={{
              background: "white",
              width: "90%",
              maxWidth: "700px",
              maxHeight: "90vh",
              overflowY: "auto",
              borderRadius: "15px",
              padding: "20px",
              position: "relative"
            }}
          >
            <X
              size={30}
              onClick={() => setSelected(null)}
              style={{ position: "absolute", top: 10, right: 10, cursor: "pointer" }}
            />

            <img
              src={selected.image}
              alt=""
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "10px"
              }}
            />

            <h2 style={{ marginTop: "15px" }}>{selected.name}</h2>

            <p><b>Category:</b> {selected.category}</p>
            <p><b>Cuisine:</b> {selected.cuisine}</p>
            <p><b>Time:</b> {selected.time}</p>
            <p><b>Difficulty:</b> {selected.difficulty}</p>

            <h3>Ingredients</h3>
            <ul>
              {selected.ingredients.map((i, index) => (
                <li key={index}>{i}</li>
              ))}
            </ul>

            <h3>Instructions</h3>
            <ol>
              {selected.instructions.map((i, index) => (
                <li key={index}>{i}</li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
}