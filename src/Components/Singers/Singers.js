import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Singer from '../Singer/Singer';
import './Singers.css'

const Singers = () => {
    const [singers, setSingers] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./singers.JSON')
            .then(res => res.json())
            .then(data =>setSingers(data))
        
    },[])

    const handleAddToCart = (singer) => {
        const newCart = [...cart, singer];
        setCart(newCart);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        {
                            singers.map(singer => <Singer
                                key = {singer.key}
                                singer={singer}
                                handleAddToCart={handleAddToCart}
                            >    
                            </Singer>)
                        }
                    </div>
                </div>
                
                <div className="col-md-3 mt-3">
                    <Cart
                        cart={cart}
                    >

                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Singers;