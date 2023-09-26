import SingleDonation from "../SingleDonation/SingleDonation";

const Donations = ({donations, find}) => {
    console.log(find);
    console.log(donations);
    return (
        <div className="mt-40 grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-4">
            {
            
                 
                 donations?.map(donation => <SingleDonation donation={donation} key={donation.id}></SingleDonation>)
                
            }
        </div>
    );
};

export default Donations;