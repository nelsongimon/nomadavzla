"use client";

import LogoSVG from "./LogoSVG";
export default function LoadingLogo() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-white">
      <div className="w-[150px] lg:w-[170px] mt-[-250px]">
        <LogoSVG />
      </div>
    </div>
  );
}
