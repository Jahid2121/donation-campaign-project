import { useEffect, useState } from "react";
import DonatedList from "../../components/DonatedList/DonatedList";

const Donation = () => {
    const [noDonationData, setNoDonationData] = useState(false)
    const [donated, setDonated] = useState([])
    const [showAll, setShowAll] = useState(false)
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20 container mx-auto mb-10">
                {
                    showAll ? 
                    donated?.map(donation => <DonatedList key={donation.id} donation={donation}></DonatedList>)
                    :
                    donated?.slice(0, 4).map(donation => <DonatedList key={donation.id} donation={donation}></DonatedList>)
                }
                </div>
                 {
                    donated.length > 4 && !showAll
                     ?
                     <div className="flex justify-center mt-12">
                        <button onClick={() => setShowAll(!showAll)} className=' btn bg-green-500'>See All</button>
                    </div>
                     :
                      ''
                    
                 }
                </div>
            }
            </div>
            
        </div>
    );
};

export default Donation;