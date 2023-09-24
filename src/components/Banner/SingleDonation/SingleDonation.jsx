
const SingleDonation = ({donation}) => {

    const {picture, title, category, category_bg, card_bg, text_button_bg, description, price } = donation || {}
    return (
        <div className="flex flex-col">
            <img className="" src={picture} alt="" />
            <div className= {`p-4 bg-[${card_bg}] grow`}>
            <h4 className={`w-20 rounded-lg text-center text-[14px] bg-[${category_bg}]`}>{category}</h4>
            <h3 className="mt-3 bg-[]">{title}</h3>
            </div>
        </div>
    );
};

export default SingleDonation;