import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchProducts } from './api/products/getProducts';
import Card from './components/Card'; 
import Modal from './forms/Modal';


function App() {
  const [products, setProducts] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);  
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);



  useEffect(() => {
    setIsLoading(true);
    fetchProducts()
        .then(data => {
            setProducts(data);
            setError(null);
            setIsLoading(false); 
        })
        .catch(error => {
            setError(error.message);
            setIsLoading(false);
            setProducts([]);
        });
}, []);

  useEffect(() => {
    fetchProducts().then(data => {
      setProducts(data);
    }).catch(error => {
      console.error("Failed to fetch products:", error);
    });
  }, []);

  const handleCardClick = (index) => {
    setSelectedCard(index);
    setSelectedProduct(products[index]); 
    toggleModal();
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (isModalOpen) {
      setSelectedCard(null);
      setSelectedProduct(null);
    }
  };


  return (
    
    <div className="container">
      {isLoading ? (
        <div className="spinner"></div>
      ) : error ? (
        <p>Ошибка: {error}</p>
      ) : products.length === 0 ? (
        <p>Список продуктов пуст.</p>
      ) : (
        <div className="cardContainer">
          {products.map((product, index) => (
            <Card
              key={product.id}
              image={product.image}
              name={product.title}
              price={`${product.price}`}
              isSelected={selectedCard === index}
              onClick={() => handleCardClick(index)}
            />
          ))}
          <Modal product={selectedProduct} isOpen={isModalOpen} toggleModal={toggleModal} />
        </div>
      )}
    </div>

  );
}

export default App;
