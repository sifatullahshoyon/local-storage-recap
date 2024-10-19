import React, { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import {addToLocalStorage, getStoredCart, removeFromLocalStorage} from '../../utilities/localStorage'
import Cart from '../Cart/Cart';



const Bottles = () => {
    const [bottles , setBottles] = useState([]);
    const [cart , setCart] = useState([]);

    const handleAddToCart = (bottle) => {
        // console.log('bottle adding' , bottle);
        const newCart = [...cart , bottle];
        // console.log(newCart);
        setCart(newCart);
        addToLocalStorage(bottle._id);
    };

    const handleRemove = id => {
        // Visual Cart Remove
        const remainingCart = cart?.filter(bottle => bottle._id !== id);
        setCart(remainingCart);
        // Remove from local storage
        removeFromLocalStorage(id);
    };

    useEffect(() => {
        try {
            fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setBottles(data);
            })
        } catch (error) {
            console.error(error);
        }
    } , []);


    // Load Cart from local storage
    useEffect(() => {
        // console.log(bottles.length);
        if(bottles.length > 0){
            const storedCart = getStoredCart();
            // console.log(storedCart);
            const saveCart = [];
            for(let id of storedCart){
                // console.log(id);
                const bottle = bottles?.find(bottle => bottle._id === id);
                if(bottle){
                    saveCart.push(bottle);
                };
            };
            // console.log('save cart' , saveCart);
            setCart(saveCart);
        };

    } , [bottles]);

    return (
        <div className='my-10'>
            <h4 className='text-xl'>Total Bottle: {bottles.length}</h4>
            <Cart cart={cart} handleRemove={handleRemove} />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5'>
                {bottles?.map(bottle => <Bottle key={bottle._id} bottle={bottle} handleAddToCart={handleAddToCart} />)}
            </div>
        </div>
    );
};

export default Bottles;