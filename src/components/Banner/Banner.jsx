import '../Banner/Navbar/Navbar.css'
const Banner = ({ setFind, setSearch ,search}) => {
    const handleSearch = () => {
        setSearch(!search)
    }
    return (
        <div className='overlay p-3 md:p-52 bg-opacity-50 container mx-auto'>
            <h2 className='text-center text-4xl font-bold '>I Grow By Helping People In Need</h2>
            <div className='text-center '>


            <input placeholder="Search here..." type="text" className=' md:w-72 border-2 focus:p-3 rounded-l-lg h-12 pl-4' onChange={e=> setFind(e.target.value)}/>
            <button onClick={handleSearch} className='p-3
            rounded-r-lg mt-8 bg-[#FF444A] text-white'>Search</button>
            </div>
        </div>
    );
};

export default Banner;