import React from 'react';
import PropTypes from 'prop-types'; // ES6


const Bottle = ({bottle , handleAddToCart}) => {
    const {title, color, price, img} = bottle;
    return (
        <div className="max-w-[350px] space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[350px] dark:bg-[#18181B]">
        <img width={400} height={400} className="h-[275px] w-[350px] rounded-lg object-cover" src={img} />
        <div className="grid gap-2">
          <h1 className="text-lg font-semibold ">Name: {title}</h1>
          <p className="text-sm text-gray-500 dark:text-white/60">Color: {color}</p>
          <div className="text-lg font-semibold">Price: ${price}</div>
        </div>
        <div className="flex gap-4">
          <button onClick={() => handleAddToCart(bottle)} className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base ">Add to Cart</button>
          <button className="rounded-md border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white  py-2  duration-300 hover:bg-gray-200">View Details</button>
        </div>
    </div>
    );
};

Bottle.propTypes = {
  bottle: PropTypes.object.isRequired,
  handleAddToCart: PropTypes.func.isRequired
};

export default Bottle;