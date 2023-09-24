import React from 'react';

const Banner = () => {
    return (
        <div >
            <h2 className='text-center text-4xl font-bold mt-52'>I Grow By Helping People In Need</h2>
            <div className='text-center'>
            <input type="text" className='w-52 h-12'/>
            <button className='btn mt-8 bg-[#FF444A]'>Search</button>
            </div>
        </div>
    );
};

export default Banner;