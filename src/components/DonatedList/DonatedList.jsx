import React from 'react';

const DonatedList = ({donation}) => {
    const { picture, title, category, category_bg, card_bg, text_button_bg, description, price } = donation || {}
    return (
        <div>
               <div className='flex'>
               <img className='w-1/2' src={picture} alt="" />
               <div className='flex flex-col'>
               <span>
                    {category}
                   
                </span>
                <span>
                {title}
                </span>
                <span>
                    ${price}
                </span>
                <span>
                    <button>View Details</button>
                </span>
               </div>
               </div>
          
        </div>
    );
};

export default DonatedList;