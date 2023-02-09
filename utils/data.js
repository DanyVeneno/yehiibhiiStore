import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Danny",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true
    },
    {
      name: "Yehiibhii",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false
    },
    {
      name: "Yehiibhii2",
      email: "user2@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false
    }
  ],

  products: [
    {
      name: "50/50 Hoodie",
      slug: "free-shirt",
      category: "Shirts",
      image: "/merch/01.png",
      price: 70,
      brand: "50/50 Adrenaline",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: "A popular shirt"
    },
    {
      name: "Breathe Hoodie",
      slug: "fit-shirt",
      category: "Shirts",
      image: "/merch/02.png",
      price: 80,
      brand: "YehiiBhii Estudio",
      rating: 3.2,
      numReviews: 10,
      countInStock: 20,
      description: "A popular shirt"
    },
    {
      name: "YehiiBhii Estudio Hoodie",
      slug: "slim-shirt",
      category: "Shirts",
      image: "/merch/03.png",
      price: 90,
      brand: "YehiiBhii Estudio",
      rating: 4.5,
      numReviews: 3,
      countInStock: 20,
      description: "A popular shirt"
    },
    {
      name: "Revolution Hoodie",
      slug: "golf-pants",
      category: "Pants",
      image: "/merch/04.png",
      price: 90,
      brand: "YehiiBhii Estudio",
      rating: 2.9,
      numReviews: 13,
      countInStock: 20,
      description: "Smart looking pants"
    },
    {
      name: "Breathe T-Shirt",
      slug: "fitt-pants",
      category: "Pants",
      image: "/merch/05.png",
      price: 95,
      brand: "YehiiBhii Estudio",
      rating: 3.5,
      numReviews: 7,
      countInStock: 20,
      description: "A popular pants"
    },
    {
      name: "Revolution T-Shirt",
      slug: "fit-pants",
      category: "Pants",
      image: "/merch/06.png",
      price: 75,
      brand: "YehiiBhii Estudio",
      rating: 2.4,
      numReviews: 14,
      countInStock: 20,
      description: "A popular pants"
    },
    {
      name: "46+2 T-Shirt",
      slug: "classic-pants",
      category: "Pants",
      image: "/merch/07.png",
      price: 75,
      brand: "YehiiBhii Estudio",
      rating: 2.4,
      numReviews: 14,
      countInStock: 20,
      description: "A popular pants"
    },
    {
      name: "YehiiBhii Estudio T-Shirt",
      slug: "klassic-pants",
      category: "Pants",
      image: "/merch/08.png",
      price: 75,
      brand: "YehiiBhii Estudio",
      rating: 2.4,
      numReviews: 14,
      countInStock: 20,
      description: "A popular pants"
    }
  ]
};

export default data;
