import SingleDonation from "../SingleDonation/SingleDonation";
import '../Navbar/Navbar.css'
const Donations = ({donations, find, search}) => {
    const result = donations.filter(donation => donation.category.toLowerCase().includes(find))
    console.log(result);
    return (
        <div className="md:mt-24 mt-24 grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-4 ">
            {
            search ? result?.map(donation => <SingleDonation donation={donation} key={donation.id}></SingleDonation>)
             :
            donations?.map(donation => <SingleDonation donation={donation} key={donation.id}></SingleDonation>)
                
            }
        </div>
    );
};

export default Donations;