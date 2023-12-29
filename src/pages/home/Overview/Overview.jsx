import overviewImg from "../../../assets/images/overview2.png";

const Overview = () => {
  return (
    <div className="my-10 lg:my-20">
      <div className="hero">
        <div className="hero-content justify-between flex-col w-full lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-xl md:text-2xl font-bold text-[#13ab94] w-1/2 mx-auto lg:mx-0 tracking-[8px]
            md:tracking-[15px]">
              OVERVIEW
            </h1>
            <h2 className="text-2xl lg:text-3xl font-bold mt-4 lg:mt-10">
              A Little Information About Our TASK PILOT
            </h2>
            <p className="font-semibold text-md text-gray-500 mt-6">
              TASK PILOT is your all-in-one task management platform designed to
              simplify your life and elevate your productivity.
            </p>
            <div className="flex gap-10 mt-6 justify-center lg:justify-start ">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold">
                  30<span className="text-[#13ab94]">+</span>
                </h2>
                <small className="text-[#13ab94]">Worldwide Branch</small>
              </div>
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-center">
                  1000<span className="text-[#13ab94]">+</span>
                </h2>
                <small className="text-[#13ab94]">Trusted Clients</small>
              </div>

              <div className="text-center">
                <h2 className="text-3xl font-extrabold">
                  500<span className="text-[#13ab94] font-extrabold">+</span>
                </h2>
                <small className="text-[#13ab94]">Team Members</small>
              </div>
            </div>
          </div>
          <div className="card relative h-full">
            <div className="card-body">
              <img src={overviewImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
