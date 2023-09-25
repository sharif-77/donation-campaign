import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import HomeCard from "./HomeCard";

const Home = () => {
  const allData=useLoaderData()
  console.log(allData);
    return (
        <div >
          <div className="my-10">  <Banner/></div>
            <div className="w-4/5 m-auto mt-[50vh] md:mt-[55vh] ">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
              {
                allData.map(data=><HomeCard key={data.id} data={data}/>)
              }
              </div>

            </div>
            
        </div>
    );
};

export default Home;