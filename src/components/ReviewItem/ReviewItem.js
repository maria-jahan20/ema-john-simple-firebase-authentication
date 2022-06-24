import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({ product, handleRemoveProduct }) => {
  const { img, name, price, quantity } = product;
  // const {handleRemoveProduct}=props;
  return (
    <div className="container">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="cart-product">
        <div className="cart-info">
          <p className="cart-product-name" title={name}>
            {name.length > 20 ? name.slice(0, 20) + "..." : name}
          </p>
          <p>price:${price}</p>
          <p>Quantity:{quantity}</p>
        </div>
        <div>
          <button onClick={() => handleRemoveProduct(product)}>
            <FontAwesomeIcon
              className="button"
              icon={faTrashAlt}
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;