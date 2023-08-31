import React from 'react';
import SocialLinks from '../components/SocialLinks.js';
import Clips from './Clips.js';
const Hero = ({
  heroapi: {title, subtitle, btntext, img, sociallinks, videos},
}) => {
  return (
    <>
      <div className="w-auto h-auto flex flex-col sm:mb-20 md:mb-[100px] lg:mb-[80px] xl:mb-[150px]">
        <div className="bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[95vh] sm:h-[73vh] absolute top-0 left-0 right-0 opacity-100 z-10"></div>
        <div className="relative z-20 opacity-100 grid items-center justify-items-center nike-container">
          <div className="grid items-center justify-items-center md:mt-24 mt-28">
            <h1 className="text-6xl lg:text-5xl  md:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200">
              {title}
            </h1>
            <h1 className="text-6xl lg:text-5xl  md:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200">
              {subtitle}
            </h1>
            <button className="button-theme bg-slate-200  shadow-slate-200 rounded-xl my-5 ">
              {btntext}
            </button>
            <div className="grid items-center gap-5 md:gap-3 absolute  top-[40vh] lg:top-[40vh] md:top-[42vh] xsm:top-[40vh] left-[11%] xl:left-0 w-auto h-auto">
              {videos?.map((val, i) => (
                <Clips key={i} imgsrc={val.imgsrc} clip={val.clip} />
              ))}
            </div>
            <div className="grid  item-center absolute top-[43vh] md:top-[42vh] sm:top-[38vh] lg:top-[27vh] right-0 gap-3">
              {sociallinks?.map((val, i) => (
                <SocialLinks key={i} icon={val.icon} />
              ))}
            </div>
          </div>
          <div>
            <img
              src={img}
              alt="hero-img"
              className="w-auto h-[45vh] lg:h-[35vh] md:h-[31vh] sm:h-[21vh] xsm:h-[19vh] transitions-theme -rotate-[25deg] hover:rotate-0 cursor-pointer object-fill"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
