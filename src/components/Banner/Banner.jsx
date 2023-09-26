import { useState } from "react";

const Banner = ({donations, find, setFind }) => {
    const handleSearch = () => {
    }

    return (
        <div className="" >
            <h2 className='text-center text-4xl font-bold mt-52'>I Grow By Helping People In Need</h2>
            <div className='text-center'>


            <input placeholder="Search here..." type="text" className='w-64 border-2 rounded-lg h-12' onChange={e=> setFind(e.target.value)}/>
            <button onClick={handleSearch} className='btn mt-8 bg-[#FF444A]'>Search</button>
            </div>
        </div>
    );
};

export default Banner;