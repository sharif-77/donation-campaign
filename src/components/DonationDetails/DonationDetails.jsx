import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDataFromLS } from "../../utils/localstorage";
import DonationCard from "./DonationCard";

const DonationDetails = () => {
  const allData = useLoaderData();
  const [donateData, setDonateData] = useState([]);
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    const lsData = getDataFromLS();
    const filteredData = allData.filter((data) =>
      lsData.includes(data.id.toString())
    );
    setDonateData(filteredData);
  }, [allData]);
  return (
    <div className="w-4/5 m-auto mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {!clicked
          ? donateData
              .slice(0, 4)
              .map((data) => <DonationCard key={data.id} data={data} />)
          : donateData.map((data) => (
              <DonationCard key={data.id} data={data} />
            ))}
      </div>

      <div
        className={`m-auto mt-5 flex justify-center items-center  ${
          clicked && "hidden"
        }`}
      >
        {donateData.length > 4 && (
          <button
            onClick={() => setClicked(true)}
            className="m-auto btn bg-green-600 text-white font-bold py-2 px-5"
          >
            See All
          </button>
        )}
      </div>

      <div className=" flex justify-center items-center h-[60vh] text-3xl font-bold">
        {donateData.length<=0&& <p>You haven't donate Yet</p>}
      </div>

    </div>
  );
};

export default DonationDetails;
