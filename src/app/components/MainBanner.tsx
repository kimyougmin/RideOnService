import React from 'react';

function MainBanner() {
  return (
    <div>
      <section className="w-full h-[600px] bg-black2">
        <div className="w-full h-full relative">
          <img src="/main/main_banner_bg.png" alt="banner text" className="w-full h-full object-cover"/>
          <img
            src="/main/main_banner_text.png"
            alt="banner text"
            className="absolute -bottom-1 left-1/2 -translate-x-1/2"
          />
        </div>
      </section>
    </div>
  );
}

export default MainBanner;
