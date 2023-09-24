
const SingleDonation = ({donation}) => {

    const {picture, title, category, category_bg, card_bg, text_button_bg, description, price } = donation || {}
    return (
        <div>
            <img src={picture} alt="" />
            <div className= {`p-4 bg-[${card_bg}]`}>
            <h4 className="">{category}</h4>
            </div>
        </div>
    );
};

export default SingleDonation;