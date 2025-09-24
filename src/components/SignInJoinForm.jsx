import React, { useState } from "react";
import { eye_icon } from "..";

const SignInJoinForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="w-full md:w-[350px] max-w-md p-6">
      <div className="flex justify-center gap-2 mb-4">
        <button
          className={`px-4 py-2 font-bold ${
            isSignIn
              ? "text-[#8064A2] underline underline-offset-4"
              : " text-[#939CA3]"
          } rounded-tl-lg rounded-bl-lg`}
          onClick={() => setIsSignIn(true)}
        >
          Sign In
        </button>
        <button
          className={`px-4 py-2 font-bold ${
            !isSignIn
              ? "text-[#8064A2] underline underline-offset-4"
              : "text-[#939CA3]"
          } rounded-tr-lg rounded-br-lg`}
          onClick={() => setIsSignIn(false)}
        >
          Join In
        </button>
      </div>
      <form className="space-y-4">
        {isSignIn ? (
          <>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-[312px] h-[32px] p-2 bg-[#FFFFFF] rounded-lg border-none"
              />
            </div>
            <div className="relative w-[312px]">
              <input
                type="password"
                placeholder="Password"
                className="w-full h-[32px] p-2 pr-8 rounded-lg bg-white border-none"
              />
              <img
                src={eye_icon}
                alt="toggle password visibility"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
              <a href="#" className="text-blue-500">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-[#8064A2] text-white py-2 rounded-lg"
            >
              Continue
            </button>
            <div className="flex items-center space-x-2">
              <hr className="flex-grow border-gray-500" />
              <div className="text-center font-semibold text-gray-500 text-sm whitespace-nowrap">
                Or connect with
              </div>
              <hr className="flex-grow border-gray-500" />
            </div>

            <button className="w-[312px] h-[32px] bg-white border border-[#8064A2] py-2  pl-4 rounded-lg flex items-center justify-start gap-8 font-bold">
              <img
                src="https://www.google.com/favicon.ico"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Continue with Google
            </button>
            <button className="w-[312px] h-[32px] bg-white border border-[#8064A2] py-2 pl-4 rounded-lg flex items-center justify-start gap-8  font-bold ">
              <img
                src="https://www.facebook.com/favicon.ico"
                alt="Facebook"
                className="w-5 h-5 mr-2"
              />
              Continue with Facebook
            </button>
          </>
        ) : (
          <>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-[312px] h-[32px] p-2 bg-[#FFFFFF] rounded-lg border-none"
              />
            </div>
            <div className="relative w-[312px]">
              <input
                type="password"
                placeholder="Password"
                className="w-full h-[32px] p-2 pr-8 rounded-lg bg-white border-none"
              />
              <img
                src={eye_icon}
                alt="toggle password visibility"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 cursor-pointer"
              />
            </div>

            <div className="text-center text-[8px] text-gray-500">
              By continuing, you agree to our{" "}
              <span className="font-extrabold">Terms of Service</span> and{" "}
              <span className="font-extrabold">Privacy Policy</span>
            </div>

            <button
              type="submit"
              className="w-full bg-[#8064A2] text-white py-2 rounded-lg"
            >
              continue
            </button>
            <div className="flex items-center space-x-2">
              <hr className="flex-grow border-gray-500" />
              <div className="text-center font-semibold text-gray-500 text-sm whitespace-nowrap">
                Or connect with
              </div>
              <hr className="flex-grow border-gray-500" />
            </div>
            <button className="w-[312px] h-[32px] bg-white border border-[#8064A2] py-2  pl-4 rounded-lg flex items-center justify-start gap-8 font-bold ">
              <img
                src="https://www.google.com/favicon.ico"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Continue with Google
            </button>
            <button className="w-[312px] h-[32px] bg-white border border-[#8064A2] py-2 pl-4 rounded-lg flex items-center justify-start gap-8  font-bold">
              <img
                src="https://www.facebook.com/favicon.ico"
                alt="Facebook"
                className="w-5 h-5 mr-2"
              />
              Continue with Facebook
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default SignInJoinForm;
