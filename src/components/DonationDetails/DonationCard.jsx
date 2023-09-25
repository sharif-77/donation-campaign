/* eslint-disable react/prop-types */
const DonationCard = ({ data }) => {
  const {
    image,category, title, price,text_color, btn_bg, card_bg,category_bg,} = data;
  return (
    <div>
      <div
        style={{ background: `${card_bg}` }}
        className="card lg:card-side shadow-xl "
      >
        <figure>
          <img src={image} alt="image" className="h-full" />
        </figure>
        <div className="card-body">
          <p
            style={{
              background: `${category_bg}`,
              padding:5,
              borderRadius: 5,
              fontWeight: "bold",
              width: "max-content",
              color: `${text_color}`,
              textTransform: "capitalize",
              
            }}
          >
            {category}
          </p>
          <h2 style={{ color: `${text_color}` }} className="card-title text-base ">{title}</h2>
          <p style={{ color: `${text_color}` }} className="font-bold">
            ${price}.00
          </p>
          <div className="card-actions mt-5">
            <button style={{background: `${btn_bg}`}} className="btn btn-primary font-bold"> View Details</button>
          </div>
        </div>
      </div>
      {/* button */}
    </div>
  );
};

export default DonationCard;
