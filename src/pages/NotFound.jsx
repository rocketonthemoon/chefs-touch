import monster from "../assets/monster.png";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className="flex justify-center items-center mt-20">
        <img className="w-96" src={monster} alt="" />
      </div>
      <div className="flex justify-center items-center mt-20">
        <button className="btn gap-2 bg-primary border-none text-white">
          <IoArrowBack />
          <Link to="/">Back to Home</Link>
        </button>
      </div>
    </>
  );
}

export default NotFound;
