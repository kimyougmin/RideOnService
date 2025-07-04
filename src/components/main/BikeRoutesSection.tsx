import React from 'react';
import Link from "next/link";

function BikeRoutesSection() {

  return (
    <div>
      <article className="grid grid-cols-12 gap-4">
        <div className="col-span-5 lg:col-span-4 flex flex-col gap-62">
          <div className="flex flex-col gap-8">
            <h3 className="text-xl lg:text-3xl text-primaryRed font-bold">Bike Routes</h3>
            <h2 className="text-xl lg:text-4xl font-bold dark:text-black1 leading-tight">
              라이딩의 모든 순간, <br/>
              RideON과 함께
            </h2>
            <p className="md:text-lg hidden md:inline m-0 dark:text-black1">
              라이딩에 필요한 모든 것! 최적의 경로, 실시간 날씨, 그리고 함께할 라이더까지 RideOn에서
              찾으세요.
            </p>
          </div>
          <div className="hidden lg:inline">
            <div className="w-full h-fit flex gap-4 grid-flow-row2">
              <Link
                href="/riderCrewBoard"
                className="w-full h-fit text-center bg-black3 text-black8 rounded py-16 dark:bg-black7 dark:text-black1 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                모임 찾기
              </Link>
              <Link
                href="/roadMap"
                className="w-full h-fit text-center bg-black3 text-black8 rounded py-16 dark:bg-black7 dark:text-black1 hover:bg-primaryRed dark:hover:bg-primaryRed hover:text-white transition-all duration-300"
              >
                라이딩 경로 찾기
              </Link>
            </div>
          </div>
        </div>
        <div className="col-start-6 col-span-7 overflow-hidden">
          <img src="/main/main_bike_route.png" alt="banner text" className="w-full"/>
        </div>
      </article>
      <div className="inline lg:hidden ">
        <div className="w-full h-fit mt-20 flex gap-4 grid-flow-row2">
          <Link
            href="/riderCrewBoard"
            className="w-full h-fit text-center bg-black3 text-black8 rounded py-16 dark:bg-black7 dark:text-black1 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            모임 찾기
          </Link>
          <Link
            href="/roadMap"
            className="w-full h-fit text-center bg-black3 text-black8 rounded py-16 dark:bg-black7 dark:text-black1 hover:bg-primaryRed dark:hover:bg-primaryRed hover:text-white transition-all duration-300"
          >
            라이딩 경로 찾기
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BikeRoutesSection;
