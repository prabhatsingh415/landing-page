import React from "react";
import { home1, home2 } from "..";
import SignInJoinForm from "./SigninJoinForm";

function Home() {
  return (
    <div className="w-[360px] h-[720px] md:w-[min(960px,100%)] md:h-[678px] lg:w-[1440px] lg:h-[678px] bg-[#F7F5F9] grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-2 p-4 md:p-8">
      <div className="col-span-1 md:col-span-6 lg:col-span-8 w-full h-auto md:w-[65%] md:h-[auto] md:max-w-[707px]">
        <div className="flex gap-2 text-xl md:text-xl lg:text-3xl font-[600]">
          Explore your <p className="text-[#0096c8]">hobby</p>
          or <p className="text-[#8165a3]">passion</p>
        </div>
        <p className="text-wrap font-[300] text-sm md:text-base mt-4">
          Sign-in to interact with a community of fellow hobbyists and an
          eco-system of experts, teachers, suppliers, classes, workshops, and
          places to practice, participate or perform.
          <p className="hidden md:block">
            Your hobby may be about visual or performing arts, sports, games,
            gardening, model making, cooking, indoor or outdoor activities…
          </p>
        </p>
        <p className="hidden lg:block text-sm md:text-base">
          If you are an expert or a seller, you can Add your Listing and promote
          yourself, your students, products, services or events. Hop on your
          hobbyhorse and enjoy the ride.
        </p>
      </div>
      <div className="col-span-1 md:col-span-6 lg:col-span-4 w-full h-auto md:w-[35%] md:max-w-[400px]">
        <SignInJoinForm />
      </div>

      {/* Row 2: Images */}
      <div className="col-span-1 md:col-span-12 w-full h-auto md:h-[216px] flex flex-wrap md:flex-nowrap justify-center md:justify-start gap-2 md:gap-4 mt-4 md:mt-2">
        <img
          src={home1}
          className="w-[150.91px] h-[96.74px]  md:w-[345.76px] md:h-[200px] md:mt-32  lg:w-[336.96px] lg:h-[216px] object-cover"
          alt="home1"
        />
        <img
          src={home2}
          className="w-[154.83px] h-[96.74px]  md:w-[345.76px] md:h-[200px] md:mt-32  lg:w-[345.76px] lg:h-[216px] object-cover"
          alt="home2"
        />
      </div>
    </div>
  );
}

export default Home;
