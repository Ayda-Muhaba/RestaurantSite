import React, { useState } from 'react';
import './MenuSection.css';

const menuItems = {
  drinks: [
    {
      name: 'Lemonade',
      description: 'Refreshing lemonade with a hint of mint.',
      image: require('../images/Lemonade.webp'),
      price: '$3.50'
    },
    {
      name: 'Iced Tea',
      description: 'Cool iced tea with a citrus twist.',
      image:require ('../images/Iced-Tea.webp'),
      price: '$2.80'
    },
    
      {
        name: 'Mojito',
        description: 'A classic mojito with lime, mint, and soda.',
        image: require('../images/mojito.jpg'),
        price: '$4.00'
      },
      {
        name: 'Mango Smoothie',
        description: 'A tropical blend of mango and banana.',
        image: require('../images/mango.jpg'),
        price: '$5.00'
      },
      {
        name: 'Strawberry Shake',
        description: 'Creamy strawberry shake topped with fresh berries.',
        image: require('../images/strawberryshake.jpg'),
        price: '$4.20'
      },
      {
        name: 'Cappuccino',
        description: 'Hot and frothy cappuccino with a sprinkle of cocoa.',
        image: require('../images/Capuccino.jpg.jpeg'),
        price: '$3.75'
      }
  ],
  pizza: [
    {
      name: 'Margherita',
      description: 'Classic pizza with fresh mozzarella and basil.',
      image: require('../images/Margherita.jpg'),
      price: '$10.00'
    },
    {
      name: 'Pepperoni',
      description: 'A spicy pizza with pepperoni slices and cheese.',
      image: require('../images/Pepperoni.png'),
      price: '$12.00'
    },
    {
      name: 'BBQ Chicken',
      description: 'Topped with BBQ chicken, onions, and cilantro.',
      image: require('../images/bbq chicken.jpg'),
      price: '$11.50'
    },

    {
      name: 'Vegetarian',
      description: 'Loaded with fresh bell peppers, onions, and olives.',
      image: require('../images/vegetarian.jpg'),
      price: '$11'
    },
    {
      name: 'Four Cheese',
      description: 'A blend of mozzarella, cheddar, parmesan, and gorgonzola.',
      image: require('../images/4 cheese.avif'),
      price: '$14'
    },
    {
      name: 'Veggie Supreme',
      description: 'Loaded with fresh vegetables, olives, and extra cheese.',
      image: require('../images/veggie supreme.jpg'),
      price: '$11.50'
    }
  ],
  burger: [
    {
      name: 'Classic Cheeseburger',
      description: 'Juicy beef patty with cheddar cheese, lettuce, and tomato.',
      image: require('../images/cheeseburgers.jpg'),
      price: '$8.00'
    },
    {
      name: 'Veggie Burger',
      description: 'A healthy veggie patty with fresh greens and avocado.',
      image: require('../images/Veggie Burger.webp'),
      price: '$7.50'
    },
    {
      name: 'Bacon Burger',
      description: 'Beef patty topped with crispy bacon and BBQ sauce.',
      image:require( '../images/bacon.jpg'),
      price: '$9.50'
    },
    {
      name: 'Mushroom Swiss Burger',
      description: 'Topped with sautéed mushrooms and Swiss cheese.',
      image: require('../images/Mushroom-Swiss-Burger.jpg'),
      price: '$9.50'
    },
    {
      name: 'The Ultimate Burger',  
      description: 'A giant burger with double beef patties, bacon, avocado, and spicy mayo.',
      image: require('../images/ultimate-burger.webp'),
      price: '$12.00'
    },
    {
      name: 'BBQ Bacon Burger',
      description: 'A beef patty with BBQ sauce, bacon, and cheddar cheese.',
      image: require('../images/bbq-bacon.jpeg'),
      price: '$9.50'
    }
  ],
  pasta: [
    {
      name: 'Spaghetti Bolognese',
      description: 'Pasta with rich tomato sauce and ground beef.',
      image: require('../images/spaghetti-bolognese.webp'),
      price: '$10.00'
    },
    {
      name: 'Penne Alfredo',
      description: 'Creamy alfredo sauce with penne pasta.',
      image: require('../images/penne.jpg'),
      price: '$9.00'
    },
    {
      name: 'Lasagna',
      description: 'Layers of pasta, meat, and cheese baked to perfection.',
      image: require('../images/Chicken-Lasagna.jpg'),
      price: '$11.00'
    },
    {
      name: 'Fettuccine Carbonara',
      description: 'Fettuccine pasta with creamy carbonara sauce and pancetta.',
      image: require('../images/Fettuccine-Carbonara.jpg'),
      price: '$10.00'
    },
    {
      name: 'Seafood Linguine',
      description: 'Linguine pasta with shrimp, clams, and a white wine sauce.',
      image: require('../images/seafood-pasta.jpg'),
      price: '$12.00'
    },
    {
      name: 'Pasta Primavera',
      description: 'Pasta with a variety of fresh vegetables in a light sauce.',
      image: require('../images/Pasta-Primavera.jpg'),
      price: '$10.50'
    }
  ],
  salads: [
    {
      name: 'Caesar Salad',
      description: 'Crispy romaine lettuce with caesar dressing and croutons.',
      image:require('../images/Caesar-Salad.jpg'),
      price: '$6.50'
    },
    {
      name: 'Greek Salad',
      description: 'Fresh vegetables with feta cheese and olives.',
      image: require('../images/Greek-Salad.jpg'),
      price: '$7.00'
    },
    {
      name: 'Cobb Salad',
      description: 'Mixed greens with chicken, bacon, egg, and avocado.',
      image: require('../images/Cobb-Salad.jpg'),
      price: '$8.00'
    },
    {
      name: 'Caprese Salad',
      description: 'Tomatoes, fresh mozzarella, basil, and olive oil.',
      image: require('../images/caprese salad.jpg'),
      price: '$7.50'
    },
    {
      name: 'Garden Salad',
      description: 'Fresh mixed greens with cucumbers, tomatoes, and carrots.',
      image: require('../images/garden salad.jpg'),
      price: '$5.50'
    },
    {
      name: 'Quinoa Salad',
      description: 'Healthy quinoa with fresh veggies and lemon dressing.',
      image:require( '../images/Quinoa-Salad.jpg'),
      price: '$7.20'
    }
  ],
  desserts: [
    {
      name: 'Chocolate Cake',
      description: 'Rich and moist chocolate cake with a creamy frosting.',
      image: require('../images/chocolate cake.jpg'),
      price: '$4.50'
    },
    {
      name: 'Cheesecake',
      description: 'Smooth and creamy cheesecake with a graham cracker crust.',
      image:require('../images/cheesecake.jpg'),
      price: '$5.00'
    },
    {
        name: 'Tiramisu',
        description: 'Classic Italian dessert with coffee-soaked layers and mascarpone.',
        image:require('../images/Tiramisu.jpg'),
        price: '$5.50'
      },
      {
        name: 'Apple Pie',
        description: 'Warm apple pie with a flaky crust, served with vanilla ice cream.',
        image: require('../images/apple-pie.jpg'),
        price: '$4.00'
      },
      {
        name: 'Brownie',
        description: 'Fudgy chocolate brownie with a crispy top and gooey center.',
        image:require('../images/brownies.jpg'),
        price: '$3.80'
      },
      {
        name: 'Ice Cream Sundae',
        description: 'Vanilla ice cream topped with chocolate sauce and sprinkles.',
        image: require('../images/icecream.jpg'),
        price: '$3.50'
      }
      
  ]
};

function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState('drinks');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="menu-section">
      <h2>Our Menu</h2>
      <div className="category-buttons">
        <button onClick={() => handleCategoryClick('drinks')}>Drinks</button>
        <button onClick={() => handleCategoryClick('pizza')}>Pizza</button>
        <button onClick={() => handleCategoryClick('burger')}>Burgers</button>
        <button onClick={() => handleCategoryClick('pasta')}>Pasta</button>
        <button onClick={() => handleCategoryClick('salads')}>Salads</button>
        <button onClick={() => handleCategoryClick('desserts')}>Desserts</button>
      </div>
      <div className="menu-items">
        {menuItems[selectedCategory].map((item, index) => (
          <div className="menu-item" key={index}>
            <img src={item.image} alt={item.name} className="menu-image" />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <span className="price-box">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuSection;












