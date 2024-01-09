type Product = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

export const featuredProducts: Products = [
  {
    id: 1,
    title: "Basic",
    desc: "Ignite your fashion with the collection from the Basics.",
    img: "/temporary/p1.jpg",
    price: 24.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 2,
    title: "Allen Solly",
    desc: "Men Slim Fit Pinstripes Striped Cotton Formal Shirt.",
    img: "/temporary/p2.jpg",
    price: 29.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 3,
    title: "The khadims",
    desc: "A classic Italian dressing from the Khadims .",
    img: "/temporary/p3.jpg",
    price: 24.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 4,
    title: "Basic",
    desc: "Ignite your fashion with the collection from the Basics.",
    img: "/temporary/p1.jpg",
    price: 24.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 5,
    title: "Allen Solly",
    desc: "Men Slim Fit Pinstripes Striped Cotton Formal Shirt.",
    img: "/temporary/p2.jpg",
    price: 29.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 6,
    title: "The khadims",
    desc: "A classic Italian dressing from the Khadims .",
    img: "/temporary/p3.jpg",
    price: 24.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 7,
    title: "Basic",
    desc: "Ignite your fashion with the collection from the Basics.",
    img: "/temporary/p1.jpg",
    price: 24.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 8,
    title: "Allen Solly",
    desc: "Men Slim Fit Pinstripes Striped Cotton Formal Shirt.",
    img: "/temporary/p2.jpg",
    price: 29.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 9,
    title: "The khadims",
    desc: "A classic Italian dressing from the Khadims .",
    img: "/temporary/p3.jpg",
    price: 24.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
];




export const clothes: Products = [
  {
    id: 1,
    title: "Casual Denim Jacket",
    desc: "Add a touch of casual coolness to your wardrobe with this denim jacket. Perfect for a laid-back look, it features a classic design with a comfortable fit, making it a versatile and stylish choice.",
    img: "/temporary/p1.jpg",
    price: 49.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 3,
      },
      {
        title: "Large",
        additionalPrice: 5,
      },
    ],
  },
  {
    id: 2,
    title: "Elegant Evening Dress",
    desc: "Dazzle at any special occasion with this elegant evening dress. Crafted with attention to detail, it features a flattering silhouette, intricate embellishments, and a touch of glamour to make you stand out in the crowd.",
    img: "/temporary/p2.jpg",
    price: 89.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 5,
      },
      {
        title: "Large",
        additionalPrice: 8,
      },
    ],
  },
  {
    id: 3,
    title: "Cozy Knit Sweater",
    desc: "Stay warm and stylish in this cozy knit sweater. The perfect blend of comfort and fashion, it features a soft texture and a relaxed fit, making it ideal for chilly days.",
    img: "/temporary/p3.jpg",
    price: 39.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 2,
      },
      {
        title: "Large",
        additionalPrice: 4,
      },
    ],
  },
  {
    id: 4,
    title: "Classic White T-Shirt",
    desc: "Every wardrobe needs a classic white t-shirt. Versatile and timeless, this t-shirt is made from high-quality cotton for a comfortable and breathable feel. A staple for a casual and relaxed style.",
    img: "/temporary/p4.jpg",
    price: 19.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 1,
      },
      {
        title: "Large",
        additionalPrice: 3,
      },
    ],
  },
  {
    id: 5,
    title: "Slim Fit Jeans",
    desc: "Achieve a sleek and modern look with these slim-fit jeans. The perfect combination of style and comfort, these jeans feature a flattering fit that complements any casual or semi-casual outfit.",
    img: "/temporary/p5.jpg",
    price: 59.9,
    options: [
      {
        title: "28W",
        additionalPrice: 0,
      },
      {
        title: "30W",
        additionalPrice: 2,
      },
      {
        title: "32W",
        additionalPrice: 4,
      },
    ],
  },
  {
    id: 6,
    title: "Athletic Jogging Pants",
    desc: "Stay active in style with these athletic jogging pants. Designed for comfort and performance, these pants feature a relaxed fit, elastic waistband, and breathable fabric, making them perfect for workouts or casual outings.",
    img: "/temporary/p6.jpg",
    price: 34.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 3,
      },
      {
        title: "Large",
        additionalPrice: 5,
      },
    ],
  },
  {
    id: 7,
    title: "Striped Polo Shirt",
    desc: "Add a touch of sophistication to your wardrobe with this striped polo shirt. Featuring a classic design with a modern twist, this shirt is perfect for both casual and semi-formal occasions.",
    img: "/temporary/p7.jpg",
    price: 29.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 2,
      },
      {
        title: "Large",
        additionalPrice: 4,
      },
    ],
  },
  {
    id: 8,
    title: "Leather Biker Jacket",
    desc: "Channel your inner rebel with this leather biker jacket. Featuring a timeless design with a rugged edge, this jacket is crafted from high-quality leather for durability and style that lasts.",
    img: "/temporary/p8.jpg",
    price: 79.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 7,
      },
      {
        title: "Large",
        additionalPrice: 10,
      },
    ],
  },
  {
    id: 9,
    title: "Floral Print Sundress",
    desc: "Embrace the sunny days with this floral print sundress. Light and breezy, this dress features a charming floral pattern, making it a perfect choice for picnics, brunches, or any outdoor occasion.",
    img: "/temporary/p9.jpg",
    price: 44.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 10,
    title: "Business Casual Blazer",
    desc: "Elevate your professional style with this business casual blazer. Tailored for a sharp and polished look, this blazer is perfect for meetings, presentations, or any occasion where you want to make a statement.",
    img: "/temporary/p10.jpg",
    price: 69.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 6,
      },
      {
        title: "Large",
        additionalPrice: 8,
      },
    ],
  },
];


export const singleProduct: Product = {
  id: 1,
  title: "Basic",
    desc: "Ignite your fashion with the collection from the Basics.",
    img: "/public/temporary/p1.jpg",
    price: 24.9,
  options: [
    {
      title: "Small",
      additionalPrice: 0,
    },
    {
      title: "Medium",
      additionalPrice: 4,
    },
    {
      title: "Large",
      additionalPrice: 6,
    },
  ],
};


type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export const menu: Menu = [
  {
    id: 1,
    slug: "mens",
    title: "Men's Clothing",
    desc: "Explore our stylish collection of men's clothing for every occasion.",
    img: "/temporary/m1.jpg",
    color: "white",
  },
  {
    id: 2,
    slug: "womens",
    title: "Women's Clothing",
    desc: "Discover the latest trends in women's fashion with our diverse collection.",
    img: "/temporary/m2.jpg",
    color: "white",
  },
  {
    id: 3,
    slug: "kids",
    title: "Kids' Clothing",
    desc: "Dress your little ones in adorable and comfortable outfits from our kids' collection.",
    img: "/temporary/m3.jpg",
    color: "white",
  },
];
