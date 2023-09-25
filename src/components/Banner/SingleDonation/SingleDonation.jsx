import { Link } from "react-router-dom";

const SingleDonation = ({donation}) => {



    const {id, picture, title, category, category_bg, card_bg, text_button_bg, description, price } = donation || {}
    return (
        <Link to={`/donationDetails/${id}`}>
        <div className="flex flex-col">
            <img className="" src={picture} alt="" />
            <div className={`p-4 bg-[${card_bg}] grow`}>
            <h4  className={`w-20 rounded-lg text-center text-[14px] text-[${text_button_bg}] bg-[${category_bg}] `}>{category}</h4>
            <h3 className={`mt-3 text-[${text_button_bg}]`}>{title}</h3>
            </div>
        </div>
        </Link>
    );
};

export default SingleDonation;

