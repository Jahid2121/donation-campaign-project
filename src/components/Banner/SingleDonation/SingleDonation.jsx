
const SingleDonation = ({donation}) => {

    const {picture, title,category,category_bg,card_bg, text_button_bg, description,price } = donation || {}
    return (
        <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
    <img
      src={picture}
      alt="ui/ux review check"
    />
  </div>
  <div className="p-6">
    <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      UI/UX Review Check
    </h4>
    <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
      Because it's about motivating the doers. Because I'm here to follow my
      dreams and inspire others.
    </p>
  </div>
  
</div>
    );
};

export default SingleDonation;