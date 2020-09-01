import React from 'react'
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
    const [{}, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "Add_To_Basket",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });

    };

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
            <button onClick={addToBasket}>Add to cart</button>
        </div>
    );
}

export default Product;
