import NewsSection from "@/app/components/newSection/NewsSection";
import BasicFooter from "@/app/components/BasicFooter";
import BasicHeader from "@/app/components/BasicHeader";
import BicycleSection from "@/app/components/BicycleSection";
import BikeFacilitiesSection from "@/app/components/BikeFacilitiesSection";
import BikeRoutesSection from "@/app/components/BikeRoutesSection";
import MainBanner from "@/app/components/MainBanner";

export default function Home() {

  return (
    <div>
      <div className="w-full block h-full dark:bg-black10">
        <BasicHeader/>
        <section>
          <MainBanner/>
        </section>
        <section className="w-[1440px] mx-auto my-[120px] px-[93px] flex flex-col gap-[120px]">
          <BikeRoutesSection/>
          <BikeFacilitiesSection/>
          <BicycleSection/>
          <NewsSection/>
        </section>

        <BasicFooter/>
      </div>
    </div>
  );
}
