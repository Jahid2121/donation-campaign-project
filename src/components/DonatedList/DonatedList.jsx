import React from 'react';

const DonatedList = ({donation}) => {
    console.log(donation);
    const { picture, title, category, category_bg, card_bg, text_button_bg, description, price } = donation || {}
    return (
        <div>
            
                <img src={picture} alt="" />
            
        </div>
    );
};

export default DonatedList;