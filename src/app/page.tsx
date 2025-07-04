import NewsSection from "@/components/main/newSection/NewsSection";
import BicycleSection from "@/components/main/BicycleSection";
import BikeFacilitiesSection from "@/components/main/BikeFacilitiesSection";
import BikeRoutesSection from "@/components/main/BikeRoutesSection";
import MainBanner from "@/components/main/MainBanner";

export default function Home() {

  return (
    <div className="w-full block h-full dark:bg-black10">
      <section>
        <MainBanner/>
      </section>
      <section className=" mx-auto lg:my-120 lg:px-93 flex flex-col lg:gap-120 p-16 gap-20">
        <BikeRoutesSection/>
        <BikeFacilitiesSection/>
        <BicycleSection/>
        <NewsSection/>
      </section>
    </div>
  );
}
