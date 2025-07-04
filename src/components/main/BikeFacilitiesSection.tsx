import React from 'react';
import Link from 'next/link';

const facilities = [
  { href: '/roadMap', src: '/main/main_bike_facility_1.png', title: '공공자전거' },
  { href: '/roadMap', src: '/main/main_bike_facility_2.png', title: '수리 시설' },
  { href: '/roadMap', src: '/main/main_bike_facility_3.png', title: '공기주입기' },
  { href: '/roadMap', src: '/main/main_bike_facility_4.png', title: '보관소' },
];

function BikeFacilitiesSection() {
  return (
    <div>
      <article className="flex flex-col gap-30 lg:gap-50">
        <div className="flex flex-col lg:gap-12 gap-4">
          <h3 className="lg:text-3xl text-xl text-primaryRed font-bold">Bike Facilities</h3>
          <h2 className="lg:text-4xl text-xl font-bold dark:text-black1">
            언제 어디서나 안심 라이딩! 편의시설 한눈에
          </h2>
        </div>
        <div className="grid grid-cols-12 gap-8">
          {facilities.map((facility, idx) => (
            <Link key={idx} href={facility.href} className="col-span-3 group">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={facility.src}
                  alt="bike facility"
                  className="mb-4 w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
              <h4 className="lg:text-2xl text-lg font-semibold text-center dark:text-black1">
                {facility.title}
              </h4>
            </Link>
          ))}
        </div>
      </article>
    </div>
  );
}

export default BikeFacilitiesSection;
