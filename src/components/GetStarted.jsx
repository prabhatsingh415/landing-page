import React from "react";
import { Group } from "..";

function GetStarted() {
  return (
    <section className="w-[360px] h-[267px] md:w-[min(960px,100%)] md:h-[662px] lg:w-[1440px] lg:h-[662px] bg-[#F7FDFF] p-4 md:p-16">
      <div className="flex flex-col justify-start items-start gap-4">
        <div className="flex gap-2 text-xl md:text-xl lg:text-3xl font-[600]">
          Your <p className="text-[#8165a3]">Hobby</p>, Your{" "}
          <p className="text-[rgb(0,150,200)]">Community...</p>
        </div>
        <div className="flex justify-center items-center w-[112px] h-[40px] rounded-[8px] border-[1px] hover:bg-[#ffffff] hover:border-[#8064A2] hover:text-[#8064A2] font-semibold bg-[#8064A2] text-white hover:cursor-pointer transition-colors duration-200 ease-in-out">
          Get Started
        </div>
      </div>

      <div className="flex justify-center items-center mt-16 md:mt-32">
        <div>
          <img src={Group} />
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
