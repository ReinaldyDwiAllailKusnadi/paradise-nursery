import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const products = [
  {
    id: 1,
    name: "Aloe Vera",
    description: "A low-maintenance plant known for its soothing properties.",
    price: 15,
    image: "/images/aloe-vera.jpg",
    category: "Indoor",
  },
  {
    id: 2,
    name: "Snake Plant",
    description: "A hardy indoor plant that helps improve air quality.",
    price: 20,
    image: "/images/snake-plant.jpg",
    category: "Indoor",
  },
  {
    id: 3,
    name: "Peace Lily",
    description: "An elegant plant with beautiful white flowers.",
    price: 25,
    image: "/images/peace-lily.jpg",
    category: "Flowering",
  },
  {
    id: 4,
    name: "Monstera",
    description: "A tropical plant with large, distinctive leaves.",
    price: 30,
    image: "/images/monstera.jpg",
    category: "Tropical",
  },
  {
    id: 5,
    name: "Spider Plant",
    description: "An easy-to-grow plant suitable for homes and offices.",
    price: 18,
    image: "/images/spider-plant.jpg",
    category: "Indoor",
  },
  {
    id: 6,
    name: "Fiddle Leaf Fig",
    description: "A stylish plant that adds a natural touch to any room.",
    price: 35,
    image: "/images/fiddle-leaf-fig.jpg",
    category: "Indoor",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="product-list-page">
      <h1>Paradise Nursery</h1>
      <p>Explore our collection of beautiful plants.</p>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />

            <div className="product-info">
              <span className="product-category">
                {product.category}
              </span>

              <h2>{product.name}</h2>

              <p>{product.description}</p>

              <div className="product-footer">
                <span className="product-price">
                  ${product.price.toFixed(2)}
                </span>

                <button
                  type="button"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
