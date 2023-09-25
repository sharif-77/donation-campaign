import "./banner.css";
const Banner = () => {
  return (
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
                  type="text"
                  placeholder="Search…"
                  className="input input-bordered md:w-96"
                />
                <button className="btn btn-square bg-red-600 ">
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
  );
};

export default Banner;
