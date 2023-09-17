import React from "react";
import "./loader.css";

const Loading = () => {
  return (
    <div className=' w-full h-screen flex justify-center items-center'>
      <div class='lds-ellipsis'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
