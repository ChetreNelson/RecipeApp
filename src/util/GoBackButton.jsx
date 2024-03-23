import React from "react";
import { useNavigate } from "react-router-dom";

function GoBackButton() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <button
      onClick={goBack}
      className="bg-gray-300 hover:bg-gray-400 text-gray-800 
        font-bold py-3 px-6 mx-4 rounded-l"
    >
      GO BACK
    </button>
  );
}

export default GoBackButton;
