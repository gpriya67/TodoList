import React from "react";

const Header = () => {
  return (
    <div className=" flex justify-center mt-10 px-5 md:px-20">
      <div className="  items-center text-center flex justify-center gap-3 ">
        <div className="w-14 h-14 md:w-24 md:h-24">
          <img src="/assets/logo.png" className=" w-full h-auto" />
        </div>
        <h4 className=" mt-2 text-orange-600 font-bold text-lg md:text-2xl text-center mb-3">
          TodoList
        </h4>
      </div>
    </div>
  );
};

export default Header;
