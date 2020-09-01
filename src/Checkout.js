import React from 'react';
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct"


function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            {/* <img src="" alt="" className="checkout_ad"/>*/}
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Cart is empty.</h2>
                    <p>You have no items in your cart.</p>
                </div>
            ):(
                <div>
                    <h2 className="checkout_title">Your Shopping Cart</h2>
                    {/* List of checkout products */}
                    {basket.map(item => (
                        <CheckoutProduct
                            item={item.id}
                            title={item.id}
                            image={item.image}
                            price={item.price}
                            rating={item.rating} 
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Checkout;
