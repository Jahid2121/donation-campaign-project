import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Banner/Navbar/Navbar';
import '../components/Banner/Navbar/Navbar.css'
import { useEffect } from 'react';
const MainLayOut = () => {
    const location = useLocation()
    console.log(location);

    useEffect(() =>{

        if(location.pathname === '/'){
            document.title = "Donation Campaign"
        }
        else if (location.state) {
            document.title = `${location.state}`
        }
        else{
            document.title = `${location.pathname.replace("/", "")}`
        }






    },[location.pathname])

    return (
        <>

        <div className='container mx-auto  '>
            <Navbar></Navbar>
            <div className='max-w-[990px]'>

            </div>
        <Outlet></Outlet>   
        </div>
        
        </>
    );
};

export default MainLayOut;