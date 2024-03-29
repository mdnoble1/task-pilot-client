import image from "../../../assets/images/dashboard.png";

const DashboardLanding = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <h2 className="font-bold text-xl lg:text-2xl text-[#13ab94] my-12 mx-2">
          Welcome To Task Pilot Dashboard 🚀
        </h2>
        {/* <p className="font-semibold text-lg text-gray-500 text-center mb-6">
          We are thrilled to have you on board! Task Pilot is designed to make
          task management a breeze, helping you and your team stay organized,
          collaborate seamlessly and achieve your goals more efficiently.
        </p> */}
        <img className="w-10/12 md:w-1/2 lg:w-full mx-auto my-12" src={image} alt="" />
      </div>
    </div>
  );
};

export default DashboardLanding;
