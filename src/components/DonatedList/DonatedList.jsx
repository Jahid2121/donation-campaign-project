
const DonatedList = ({donation}) => {
    const { picture, title, category, category_bg, card_bg, text_button_bg, description, price } = donation || {}
    return (
        <div className="flex">
            <img className="w-1/2" src={picture} alt="" />
            <div style={{background: `${card_bg}`}} className="p-4  grow">
            <h4 style={{background: `${category_bg}`, color: `${text_button_bg}`}}  className=" w-20 rounded-lg text-center text-[14px]">{category}</h4>

            <h3 style={{color: `${text_button_bg}`}} className="mt-3" >{title}</h3>
            </div>
        </div>
    );
};

export default DonatedList;