import { Link } from "react-router-dom";

const SingleDonation = ({donation}) => {



    const {id, picture, title, category, category_bg, card_bg, text_button_bg } = donation || {}
    return (
        <Link to={`/donationDetails/${id}`}>
        <div className="flex flex-col ">
            <img className="" src={picture} alt="" />
            <div style={{background: `${card_bg}`}} className="p-4  grow">
            <h4 style={{background: `${category_bg}`, color: `${text_button_bg}`}}  className=" w-20 rounded-lg text-center text-[14px] font-medium">{category}</h4>

            <h3 style={{color: `${text_button_bg}`}} className="mt-3 font-semibold" >{title}</h3>
            
            </div>
        </div>
        </Link>
    );
};

export default SingleDonation;

