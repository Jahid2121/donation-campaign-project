import { Link } from "react-router-dom";

const DonatedList = ({donation}) => {
    const { picture, title, category, category_bg, card_bg, text_button_bg, id } = donation || {}
    return (
        <div className="flex mx-auto">
            <img className="w-1/3" src={picture} alt="" />
            <div style={{background: `${card_bg}`}} className="p-4 grow">
            <h4 style={{background: `${category_bg}`, color: `${text_button_bg}`}}  className=" w-20 rounded-lg text-center font-normal text-[14px]">{category}</h4>

            <h3 style={{color: `${text_button_bg}`}} className="mt-3 font-bold" >{title}</h3>
            <Link to={`/donationDetails/${id}`}>
            <button style={{background: `${text_button_bg}`}}  className="p-2 rounded-lg text-white">View Details</button>
            </Link>
            </div>
        </div>
    );
};

export default DonatedList;