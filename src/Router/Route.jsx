import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../LayOut/MainLayOut';
import Home from '../Pages/Home/Home';
import Donation from '../Pages/Donation/Donation';
import Statistics from '../Pages/Statistics/Statistics';
import DonationDetails from '../Pages/DonationDetails/DonationDetails';

const Route = createBrowserRouter([
    
    {
        path: '/',
        element: <MainLayOut></MainLayOut>,
        children: [
            {
                path: '/',
                loader: () => fetch('/donations.json'),
                element: <Home></Home>
                
            },
            {
                path: '/donations',
                element: <Donation></Donation>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/donationDetails/:id',
                loader: () => fetch('/donations.json'),
                element: <DonationDetails></DonationDetails>
            },
        ]
    }
])

export default Route;