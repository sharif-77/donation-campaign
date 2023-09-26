import { useLoaderData } from "react-router-dom";
import HomeCard from "./HomeCard";
import "./banner.css";
import { useRef, useState } from "react";

const Home = () => {
  const allData = useLoaderData();
  const value=useRef()
  const [clicked,setClicked]=useState(true)
  const [searchData,setSearchData]=useState([])

  const handleButtonClick = ()=>{
   const inputValue=value.current.value
   const filteredData=allData.filter(data=>data.category==inputValue)
   setSearchData(filteredData)
   if (inputValue) {
    
     setClicked(false)
   }

  }
 
  return (
    <div>
      <div className="my-10">
        {" "}
        <div className="bg-img h-[50vh] md:h-[70vh] top-[200px] md:top-0 border-2 ">
          <div className="-mt-20 md:mt-10 ">
            <div className="flex flex-col items-center justify-center">
              <p className="text-4xl font-extrabold">
                I Grow By Helping People In Need
              </p>
              <div className="m-auto w-full flex flex-col items-center justify-center mt-10">
                <div className="form-control">
                  <div className="input-group">
                    <input
                    ref={value}
                      type="text"
                      placeholder="Search…"
                      className="input input-bordered md:w-96"
                    />
                    <button onClick={handleButtonClick} className="btn btn-square bg-red-600 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-4/5 m-auto mt-[70vh] md:mt-[55vh] ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5">

          {
            clicked?allData.map((data) => (
              <HomeCard key={data.id} data={data} />
            )):searchData.map(data=><HomeCard key={data.id} data={data} />)
          }

        </div>
      </div>
    </div>
  );
};

export default Home;
