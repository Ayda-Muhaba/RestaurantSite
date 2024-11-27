import React, { useState } from 'react';
import { menuItems } from '../components/menuItems'; 
import '../styles/MenuSection.css'; // Import the CSS file

const MenuSection = () => {
  const [currentCategory, setCurrentCategory] = useState(Object.keys(menuItems)[0]); // Default to first category
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const getPaginatedItems = () => {
    const items = menuItems[currentCategory];
    const startIndex = (currentPage - 1) * itemsPerPage;
    return items.slice(startIndex, startIndex + itemsPerPage);
  };

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(menuItems[currentCategory].length / itemsPerPage);

  return (
    <div className="menu-section">
      {/* Category Buttons */}
      <div className="category-buttons">
        {Object.keys(menuItems).map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`category-button ${
              currentCategory === category ? 'active' : ''
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Display Paginated Items */}
      <div className="menu-items">
        {getPaginatedItems().map((item, index) => (
          <div key={index} className="menu-item">
            <div className="image-container">
              <img src={item.image} alt={item.name} className="menu-image" />
            </div>
            <div className="item-details">
              <h3 className="item-name">{item.name}</h3>
              <p className="item-description">{item.description}</p>
              <div className="price-box">{item.price}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button
          onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
          disabled={currentPage === 1}
          className="pagination-button"
        >
          Prev
        </button>
        <span className="current-page">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          onClick={() => setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="pagination-button"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MenuSection;


















