import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const singer of cart) {
        total = total + singer.cost;
    }
    return (
        <div className="text-center text-white">
            <h4><i class="fas fa-user"></i> Singers Selected: {cart.length}</h4>
            <h6> 💰 Total Cost:{total} BDT</h6>
            <p> 🎙️ Selected Singer Name: </p>
            <ol>
                {
                    cart.map(singer => <li>{singer.name}</li>)
                }
            </ol>
        </div>
    );
};

export default Cart;