import { Outlet } from 'react-router-dom';
import Navbar from '../components/Banner/Navbar/Navbar';
import '../components/Banner/Navbar/Navbar.css'
const MainLayOut = () => {
    return (
        <>

        <div className='container mx-auto  '>
            <Navbar></Navbar>
            
        <Outlet></Outlet>
        </div>
        
        </>
    );
};

export default MainLayOut;