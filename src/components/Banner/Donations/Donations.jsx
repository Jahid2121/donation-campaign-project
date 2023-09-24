import SingleDonation from "../SingleDonation/SingleDonation";

const Donations = ({donations}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {
                donations?.map(donation => <SingleDonation donation={donation} key={donation.id}></SingleDonation>)
            }
        </div>
    );
};

export default Donations;