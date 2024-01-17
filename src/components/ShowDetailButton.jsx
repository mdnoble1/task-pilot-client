/* eslint-disable react/prop-types */
import { TbInfoTriangle } from "react-icons/tb";


const ShowDetailButton = ({ _id }) => {


    const handleShowDetail = ( _id ) => {
        console.log(_id)
    }

    return (
        <div>
            <button onClick={() => handleShowDetail(_id)} className="text-2xl md:text-3xl text-black btn btn-ghost btn-circle">
            <TbInfoTriangle></TbInfoTriangle>
          </button>
        </div>
    );
};

export default ShowDetailButton;