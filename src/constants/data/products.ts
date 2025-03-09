export const data = [
  {
    id: 1,
    name: "Espresso",
    category: "Espresso",
    description:
      "A strong, black coffee made by forcing steam through finely ground coffee beans.",
    ingredients: ["Espresso coffee beans", "Water"],
    availability: "In Stock",
    image:
      "https://plus.unsplash.com/premium_photo-1669687924558-386bff1a0469?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZXNwcmVzc298ZW58MHx8MHx8fDA%3D",
    price: { small: 2.99, medium: 3.99, large: 4.99 },
    stock: 100,
    rating: 4.5, // Rating added
  },
  {
    id: 2,
    name: "Americano",
    category: "Coffee",
    description:
      "A diluted espresso with hot water, creating a rich but lighter coffee taste.",
    ingredients: ["Espresso", "Hot Water"],
    availability: "In Stock",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW1lcmljYW5vfGVufDB8fDB8fHww",
    price: { small: 3.5, medium: 4.5, large: 5.5 },
    stock: 100,
    rating: 4.2, // Rating added
  },
  {
    id: 3,
    name: "Latte",
    category: "Coffee",
    description:
      "A coffee drink made with espresso and steamed milk, usually topped with foam.",
    ingredients: ["Espresso", "Steamed milk", "Foam"],
    availability: "In Stock",
    image:
      "https://plus.unsplash.com/premium_photo-1663932463883-897e71481fc4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGF0dGV8ZW58MHx8MHx8fDA%3D",
    price: { small: 4.1, medium: 4.75, large: 5.5 },
    stock: 100,
    rating: 4.7, // Rating added
  },
  {
    id: 4,
    name: "Cappuccino",
    category: "Cappuccino",
    description:
      "An espresso-based drink that’s made with steamed milk and topped with foam.",
    ingredients: ["Espresso", "Steamed milk", "Foam"],
    availability: "In Stock",
    image:
      "https://plus.unsplash.com/premium_photo-1673545518947-ddf3240090b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FwcHVjaW5ub3xlbnwwfHwwfHx8MA%3D%3D",
    price: { small: 4.5, medium: 5.25, large: 6.0 },
    stock: 100,
    rating: 4.3, // Rating added
  },
  {
    id: 5,
    name: "Flat White",
    category: "Coffee",
    description:
      "A coffee drink consisting of espresso with microfoam steamed milk, resulting in a velvety texture.",
    ingredients: ["Espresso", "Steamed milk"],
    availability: "Limited Stock",
    image:
      "https://images.unsplash.com/photo-1497636577773-f1231844b336?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmxhdCUyMHdoaXRlfGVufDB8fDB8fHww",
    price: { small: 4.4, medium: 4.9, large: 5.5 },
    stock: 50,
    rating: 4.8, // Rating added
  },
  {
    id: 6,
    name: "Iced Coffee",
    category: "Iced",
    description:
      "Chilled coffee served with ice cubes, perfect for a refreshing summer drink.",
    ingredients: ["Coffee", "Ice", "Sugar", "Milk (optional)"],
    availability: "In Stock",
    image:
      "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aWNlZCUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
    price: { small: 3.5, medium: 4.5, large: 5.5 },
    stock: 100,
    rating: 4.1, // Rating added
  },
  {
    id: 7,
    name: "Green Tea",
    category: "Tea",
    description:
      "A lightly brewed tea that retains more of its antioxidants and nutrients.",
    ingredients: ["Green tea leaves", "Water"],
    availability: "In Stock",
    image:
      "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8R3JlZW4lMjBUZWF8ZW58MHx8MHx8fDA%3D",
    price: { small: 3.99, medium: 4.99, large: 5.99 },
    stock: 100,
    rating: 4.6, // Rating added
  },
  {
    id: 8,
    name: "Chai Latte",
    category: "Tea",
    description:
      "A spiced tea drink made with black tea, milk, sugar, and a blend of spices.",
    ingredients: [
      "Black tea",
      "Steamed milk",
      "Spices (cinnamon, ginger, etc.)",
    ],
    availability: "In Stock",
    image:
      "https://images.unsplash.com/photo-1561336526-2914f13ceb36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2hhaSUyMExhdHRlfGVufDB8fDB8fHww",
    price: { small: 4.25, medium: 5.75, large: 6.5 },

    stock: 100,
    rating: 4.4, // Rating added
  },
  {
    id: 9,
    name: "Earl Grey Tea",
    category: "Tea",
    description:
      "A fragrant black tea flavored with oil of bergamot, perfect for an afternoon break.",
    ingredients: ["Black tea", "Bergamot oil"],
    availability: "In Stock",
    image:
      "https://images.unsplash.com/photo-1522520788364-9eafb7a93216?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWFybCUyMGdyZXklMjB0ZWF8ZW58MHx8MHx8fDA%3D",
    price: { small: 3.5, medium: 4.5, large: 6.5 },
    stock: 100,
    rating: 4.2, // Rating added
  },
  {
    id: 10,
    name: "Matcha Latte",
    category: "Iced",
    description:
      "A creamy latte made with matcha green tea powder, steamed milk, and a little sweetness.",
    ingredients: ["Matcha powder", "Steamed milk", "Sugar"],
    availability: "Limited Stock",
    image:
      "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TWF0Y2hhJTIwbGF0dGV8ZW58MHx8MHx8fDA%3D",
    price: { small: 4.2, medium: 4.75, large: 5.5 },
    stock: 50,
    rating: 4.7, // Rating added
  },
  {
    id: 11,
    name: "Black Tea",
    category: "Tea",
    description:
      "A strong and bold tea with a rich flavor, made from fully oxidized tea leaves.",
    ingredients: ["Black tea leaves", "Water"],
    availability: "In Stock",
    image:
      "https://images.unsplash.com/photo-1577016029703-cc22a7c0c28c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEJsYWNrJTIwdGVhfGVufDB8fDB8fHww",
    price: { small: 2.5, medium: 3.2, large: 3.5 },
    stock: 100,
    rating: 4.3, // Rating added
  },
  {
    id: 12,
    name: "Herbal Tea",
    category: "Tea",
    description:
      "A caffeine-free tea made with a variety of herbs, offering a soothing and calming experience.",
    ingredients: ["Herbs", "Water"],
    availability: "In Stock",
    image:
      "https://images.unsplash.com/photo-1504382103100-db7e92322d39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEhlcmJhbCUyMFRlYXxlbnwwfHwwfHx8MA%3D%3D",
    price: { small: 2.75, medium: 3.75, large: 4.5 },
    stock: 100,
    rating: 4.5, // Rating added
  },
  {
    id: 13,
    name: "Herbal Tea",
    category: "Tea",
    description:
      "A caffeine-free tea made with a variety of herbs, offering a soothing and calming experience.",
    ingredients: ["Herbs", "Water"],
    availability: "In Stock",
    image:
      "https://images.unsplash.com/photo-1504382103100-db7e92322d39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEhlcmJhbCUyMFRlYXxlbnwwfHwwfHx8MA%3D%3D",
    price: { small: 2.75, medium: 3.75, large: 4.5 },
    stock: 100,
    rating: 4.5, // Rating added
  },
  {
    id: 14,
    name: "Premium Coffee Beans",
    category: "Coffee Beans",
    description:
      "High-quality, freshly roasted coffee beans sourced from the best farms around the world, perfect for brewing a rich and aromatic cup of coffee.",
    ingredients: ["Coffee Beans"],
    availability: "In Stock",
    image:
      "https://plus.unsplash.com/premium_photo-1668149518385-616794fac80f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UHJlbWl1bSUyMENvZmZlZSUyMEJlYW5zfGVufDB8fDB8fHww",
    price: {
      small: 8.99,
      medium: 12.99,
      large: 15.99,
    },
    stock: 150,
    rating: 4.8,
  },
  {
    id: 15,
    name: "Organic Arabica Coffee Beans",
    category: "Coffee Beans",
    description:
      "Certified organic Arabica beans with smooth flavor and low acidity, perfect for brewing rich coffee with a mild taste.",
    ingredients: ["Arabica Coffee Beans"],
    availability: "In Stock",
    image:
      "https://plus.unsplash.com/premium_photo-1663011058215-6fcf33ca8378?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: {
      small: 9.5,
      medium: 13.5,
      large: 16.5,
    },
    stock: 200,
    rating: 4.7,
  },
  {
    id: 16,
    name: "Espresso Roast Coffee Beans",
    category: "Coffee Beans",
    description:
      "Bold and intense espresso beans, expertly roasted to provide a strong and robust flavor for espresso lovers.",
    ingredients: ["Espresso Coffee Beans"],
    availability: "In Stock",
    image:
      "https://brewespressocoffee.com/wp-content/uploads/2022/05/Espresso-shot-and-ark-roasted-coffee-beans-840x560.jpg",

    price: {
      small: 10.25,
      medium: 14.75,
      large: 18.0,
    },
    stock: 120,
    rating: 5.0,
  },
  {
    id: 17,
    name: "Colombian Supremo Coffee Beans",
    category: "Coffee Beans",
    description:
      "Rich and full-bodied Colombian beans with a smooth, chocolatey finish. Sourced from the best regions in Colombia.",
    ingredients: ["Colombian Coffee Beans"],
    availability: "In Stock",
    image:
      "https://www.coastalroast.com/wp-content/uploads/2014/11/ESCR-City-Roast-Colombia.gif",
    price: {
      small: 11.0,
      medium: 15.0,
      large: 19.0,
    },
    stock: 90,
    rating: 4.6,
  },
  {
    id: 18,
    name: "Sumatra Mandheling Coffee Beans",
    category: "Coffee Beans",
    description:
      "Earthy and full-bodied Sumatra beans, roasted to bring out deep, rich flavors with a slightly smoky finish.",
    ingredients: ["Sumatra Coffee Beans"],
    availability: "In Stock",
    image:
      "https://marvel-b1-cdn.bc0a.com/f00000000209353/www.whittard.co.uk/dw/image/v2/BCGT_PRD/on/demandware.static/-/Sites-whittard-master-catalog/default/dwa95ad887/images/hi-res/Coffee-PDP/355776-Sumatra-Mandheling-Coffee-Beans-Lifestyle-01.jpg?sw=802&sh=802&sm=fit",
    price: {
      small: 10.75,
      medium: 14.25,
      large: 18.5,
    },
    stock: 110,
    rating: 4.5,
  },
  {
    id: 19,
    name: "Kenyan AA Coffee Beans",
    category: "Coffee Beans",
    description:
      "Bright and citrusy, Kenyan AA coffee beans offer a vibrant cup with complex flavors and a crisp finish.",
    ingredients: ["Kenyan Coffee Beans"],
    availability: "In Stock",
    image:
      "https://cdn.powered-by-nitrosell.com/product_images/31/7510/large-kenya-aa-coffee-per-lb-.jpg",
    price: {
      small: 12.0,
      medium: 16.0,
      large: 20.0,
    },
    stock: 140,
    rating: 4.9,
  },
  {
    id: 20,
    name: "Brazilian Santos Coffee Beans",
    category: "Coffee Beans",
    description:
      "Sweet and nutty Brazilian Santos beans with a mild flavor and a smooth, low-acid profile.",
    ingredients: ["Brazilian Coffee Beans"],
    availability: "In Stock",
    image:
      "https://kunjaninaples.com/cdn/shop/articles/brazil-specialty-coffee.jpg?v=1657832632",
    price: {
      small: 9.25,
      medium: 13.5,
      large: 17.5,
    },
    stock: 160,
    rating: 4.8,
  },
  {
    id: 21,
    name: "Tanzanian Peaberry Coffee Beans",
    category: "Coffee Beans",
    description:
      "Smooth and fruity Tanzanian Peaberry beans, with a bright, lively flavor and a hint of berry sweetness.",
    ingredients: ["Tanzanian Coffee Beans"],
    availability: "In Stock",
    image:
      "https://blog.suvie.com/wp-content/uploads/2020/02/Peaberry-hero.jpg?w=640",
    price: {
      small: 10.5,
      medium: 14.0,
      large: 18.25,
    },
    stock: 130,
    rating: 4.7,
  },
  {
    id: 22,
    name: "Honduran Coffee Beans",
    category: "Coffee Beans",
    description:
      "Smooth and mild Honduran beans with a hint of caramel sweetness and light acidity for a balanced cup.",
    ingredients: ["Honduran Coffee Beans"],
    availability: "In Stock",
    image:
      "https://i.pinimg.com/736x/a8/96/ea/a896ea438c5b50db8c66b18bb707469a.jpg",
    price: {
      small: 11.25,
      medium: 15.0,
      large: 19.5,
    },
    stock: 180,
    rating: 4.6,
  },
];
