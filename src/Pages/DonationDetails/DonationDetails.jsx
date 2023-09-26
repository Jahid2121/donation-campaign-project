import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {
    const [donation, setDonation] = useState()
    const { picture, title, category, category_bg, card_bg, text_button_bg, description, price } = donation || {}
    const {id} = useParams()
    const idInt = parseInt(id)
    const donations = useLoaderData()


    const handleDonation = () => {
        
        const donationArray = []
        
        const donationList = JSON.parse(localStorage.getItem('donates'))
        if(!donationList){
            donationArray.push(donation)
            localStorage.setItem('donates', JSON.stringify(donationArray))
            return toast.success('Successfully Donated! Go to donations pages for more information')
        }
        else{

            
            
                donationArray.push(...donationList, donation)
            localStorage.setItem('donates', JSON.stringify(donationArray))
            return toast.success('Successfully Donated! Go to donations pages for more information')
            

            
            
        }

    }

    useEffect(() => {
        const getDonation = donations?.find(donation => donation.id === idInt)
        setDonation(getDonation)
    },[idInt, donations])
    
    
    return (
        <div className="ml-40 mt-16 w-[900px] relative" >
            <div className="bg-blend-overlay">
            <img className="w-3/4" src={picture} alt="" />
            <div  className="bg-[#0B0B0B80] w-[675px] h-20 -mt-20 absolute overflow-hidden"></div>
            <button style={{background: `${text_button_bg}`}} onClick={handleDonation} className="btn relative flex  -mt-16 ml-6">Donate ${price}</button>
            <h4 className="mt-10 text-4xl font-bold">{title}</h4>
            </div>


            <p className="mb-20">{description}</p>
            <Toaster></Toaster>
        </div>
    );
};

export default DonationDetails;