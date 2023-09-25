const HomeCard = ({ data }) => {
  const { category_bg,card_bg,text_color } = data;
  return (
    <div>
      <div style={
        {
            background: `${card_bg}`

        }
      } className="card card-compact  bg-base-100 shadow-xl">
        <figure>
          <img src={data.image} alt="Shoes" />
        </figure>

        <div className="card-body">
          <p
            style={{
              background: `${category_bg}`,
              padding:5,
              borderRadius:5,
              fontWeight:'bold',
              width:'max-content',
              color:`${text_color}`
             
            }}
          >
            {data.category}
          </p>
          <h2 style={
            {
                color:`${text_color}`


            }
          } className="card-title">{data.title}</h2>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
