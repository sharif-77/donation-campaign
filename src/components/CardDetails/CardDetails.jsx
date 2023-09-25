import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import './CardDetails.css';
import swal from 'sweetalert';
import { setDataToLS } from "../../utils/localstorage";
const CardDetails = () => {
    const allData=useLoaderData()
    const {id}=useParams()
    const [data,setData]=useState({})
    useEffect(()=>{
        const findData=allData.find(data=>data.id ==id)
        setData(findData)
        
        
    },[allData,id])

    const handleDonate =()=>{
        swal("Good job!", "Donate Completed", "success");
        setDataToLS(id)

    }
    console.log(allData,id);
    console.log(data);
    return (
        <div className='w-4/5 m-auto mb-10 '>
            <div>
                <div className="w-5/5">
                    <div className="relative">
                        <div><img src={data.image} alt="image" className="w-full h-[70vh] rounded-lg" /></div>
                        <div className="over_lay absolute bottom-0 p-8 w-full rounded-lg" >
                        <button onClick={handleDonate} style={{background: `${data.btn_bg}`}} className="text-white py-2 px-4 font-bold rounded-md">Donate ${data.price}</button>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <h1 className="text-3xl font-bold">{data.title}</h1>
                    <p className="mt-5">{data.description}</p>
                </div>
            </div>
            
        </div>
    );
};

export default CardDetails;