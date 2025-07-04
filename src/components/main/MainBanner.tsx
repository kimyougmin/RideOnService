import React from 'react';
import Image from "next/image";

function MainBanner() {
  return (
    <div>
      <section className="w-full bg-black2">
        <div className="w-full h-full relative">
          <Image src="/main/main_banner_bg.png" alt="banner text" className="w-full h-full object-cover" width={500} height={500}/>
          <Image
            src="/main/main_banner_text.png"
            alt="banner text"
            className="absolute -bottom-1 left-1/2 -translate-x-1/2"
            width={500} height={500}
          />
        </div>
      </section>
    </div>
  );
}

export default MainBanner;
