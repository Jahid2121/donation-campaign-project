import { Outlet } from 'react-router-dom';
import Navbar from '../components/Banner/Navbar/Navbar';
import '../components/Banner/Navbar/Navbar.css'
const MainLayOut = () => {
    return (
        <>
        <div className='overlay bg-opacity-50 container mx-auto'>
        <div className='container mx-auto content '>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
        </div>
        </>
    );
};

export default MainLayOut;