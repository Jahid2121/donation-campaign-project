import { Link } from "react-router-dom";

const DonatedList = ({donation}) => {
    const { picture, title, category, category_bg, card_bg, text_button_bg,price, id } = donation || {}
    return (
        <div className="flex">
            <img className="w-1/3" src={picture} alt="" />
            <div style={{background: `${card_bg}`}} className="p-4 grow">
            <h4 style={{background: `${category_bg}`, color: `${text_button_bg}`}}  className=" w-20 rounded-lg text-center font-normal text-[14px]">{category}</h4>

            <h3 className="mt-2 text-xl font-bold" >{title}</h3>
            <p style={{color: `${text_button_bg}`}} className="font-semibold ml-1 my-1">${price}.00</p>
            <Link to={`/donationDetails/${id}`}>
            <button style={{background: `${text_button_bg}`}}  className="p-2 rounded-lg text-white">View Details</button>
            </Link>
            </div>
        </div>
    );
};

export default DonatedList;