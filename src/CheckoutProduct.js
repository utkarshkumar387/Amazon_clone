import React from 'react'

function CheckoutProduct({ id, title, image, price, rating }) {
    return (
        <div className="checkoutProduct">
            <img src={image} alt="" />
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>

                <p className="checkouProduct_price">{price}</p>
            </div>
        </div>
    )
}

export default CheckoutProduct;
