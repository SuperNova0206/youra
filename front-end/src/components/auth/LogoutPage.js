import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { clearProfileDetails } from "../../store/ProfileSlice";
import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
      dispatch(clearProfileDetails());
      navigate("/register");
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <button
        onClick={handleLogout}
        className="bg-black text-white py-2 px-4 rounded-md flex items-center gap-2"
      >
        <AiOutlineLogout />
        <span>Logging out</span>
      </button>
    </div>
  );
};

export default LogoutPage;
