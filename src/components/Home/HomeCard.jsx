/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const HomeCard = ({ data }) => {
  const {id,category_bg,card_bg,text_color } = data;
  const navigate=useNavigate()
  const handleNavigate =()=>{
    navigate(`/details/${id}`)

  }
  return (
    <div>
      <div onClick={handleNavigate} style={
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
              color:`${text_color}`,
              textTransform:'capitalize'
             
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
