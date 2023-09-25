import { useEffect, useState } from "react";
import DonatedList from "../../components/DonatedList/DonatedList";

const Donation = () => {
    const [noDonationData, setNoDonationData] = useState(false)
    const [donated, setDonated] = useState([])
    
    useEffect(() => {
        const donationList = JSON.parse(localStorage.getItem('donates'))
        if(donationList){
            setDonated(donationList)
        }
        else{
            setNoDonationData('Not Donated yet!')
        }

    },[])
    return (
        <div>
            <div>
            {noDonationData ? <p className="flex items-center justify-center text-center h-[80vh]">{noDonationData}</p>
                :
                <div>
                {
                    donated?.map(donation => <DonatedList key={donation.id} donation={donation}></DonatedList>)
                }
                </div>
            }
            </div>
        </div>
    );
};

export default Donation;