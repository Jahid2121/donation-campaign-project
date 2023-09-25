import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {
    const [donation, setDonation] = useState()
    const { picture, title, category, category_bg, card_bg, text_button_bg, description, price } = donation || {}
    const {id} = useParams()
    const idInt = parseInt(id)
    const donations = useLoaderData()
    console.log(donations);

    useEffect(() => {
        const getDonation = donations?.find(donation => donation.id === idInt)
        setDonation(getDonation)
    },[idInt, donations])
    
    
    return (
        <div className="ml-40 mt-16 w-[900px]" >
            <img className="w-3/4" src={picture} alt="" />
            <button className="btn relative flex btn-primary -mt-16 ml-6">Donate ${price}</button>
            <h4 className="mt-10 text-4xl font-bold">{title}</h4>
            <p>{description}</p>
        </div>
    );
};

export default DonationDetails;