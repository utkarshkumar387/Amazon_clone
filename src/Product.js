import React from 'react'
import "./Product.css";

function Product({ id, title, image, price, rating }) {
    return (
        <div className="product">
            <div className="product_info">
                <p className="product_title">{title}</p>
                <p className="product_price">
                    <small>Rs</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <p>&#9733;</p>
                        ))
                    }
                </div>
            </div>
            <img src={image} alt="" />
            <button>Add to cart</button>
        </div>
    );
}

export default Product;
