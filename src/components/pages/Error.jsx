import React from "react";
import Image from "../Image";
import errorGif from "/error.gif";
import { useNavigate } from "react-router-dom";
const Error = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <Image className={"w-full h-screen"} src={errorGif} />
      <button onClick={handleClick} className="bg-red-400 p-3">
        Go To Home & Plz Don't Cry..!
      </button>
    </>
  );
};

export default Error;
