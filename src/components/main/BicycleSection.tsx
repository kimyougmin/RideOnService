import React from 'react';
import Link from "next/link";

function BicycleSection() {
  return (
    <div>
      <article className="flex flex-col gap-12">
        <div className="flex flex-col gap-12">
          <h3 className="text-3xl text-primaryRed font-bold">Bicycle</h3>
          <h2 className="text-4xl font-bold dark:text-black1">나에게 딱 맞는 자전거 찾기</h2>
          <p className="text-20 text-bold m-0 dark:text-black1">
            브랜드별, 카테고리별 자전거 정보를 한곳에서! <br/>
            Trek, Specialized 등 인기 브랜드부터 아동용, E-BIKE, 로드, 픽시, MTB까지 다양한 자전거
            정보를 확인하세요.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-8">
          <Link href="bicycleSearch/1" className="col-span-6">
            <img src="/main/main_bike_brand.png" alt="bike facility" className="mb-4"/>
          </Link>
          <Link href="bicycleSearch/2" className="col-span-6">
            <img src="/main/main_bike_category.png" alt="bike facility" className="mb-4"/>
          </Link>
        </div>
      </article>
    </div>
  );
}

export default BicycleSection;
