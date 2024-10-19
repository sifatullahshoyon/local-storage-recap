import React from 'react';
import PropTypes from 'prop-types'; // ES6

const Cart = ({cart , handleRemove}) => {
    return (
        <div>
            <h6 className='my-2'>Cart {cart.length}</h6>
            <div className='w-28 flex gap-5'>
                {cart?.map(bottle => <div key={bottle._id}>
                    <img src={bottle.img} alt={bottle.title} />
                    <button onClick={() => handleRemove(bottle._id)}>Remove</button>
                </div>)}
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    // isRequired is optional
    handleRemove: PropTypes.func.isRequired
};

export default Cart;