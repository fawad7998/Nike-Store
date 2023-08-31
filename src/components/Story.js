import React from "react";
import Title from "./Title";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { HeartIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/outline";
import { HashtagIcon } from "@heroicons/react/24/solid";

import { truncate } from "lodash";

const Story = ({ story: { title, news } }) => {
    const splideOptions={
        perPage:3,
        perMove:1,
        type:'loop',
        rewind:true,
        keyboard:'global',
        gap:'1rem',
        pagination:false,
        padding:'2rem',
        breakpoints:{       
            1440:{perPage:4 },
            991:{ perPage:2.3 },
            767:{ perPage:2 } ,
            550:{ perPage:1 },
            320:{ perPage:1 },            
        },

    };
  return (
    <div className="nike-container mb-11">
      <Title title={title} />
      <div className="mt-7">
        <Splide options={splideOptions}>
          {news?.map((val, i) => (
            <SplideSlide key={i} className="mb-0.5">
              <div className="relative h-full  grid items-center gap-4 pb-2 rounded-lg shadow shadow-slate-200 ring-1 ring-slate-200">
                <div className="flex items-center justify-center">
                  <img src={val.img}  alt="/" className="w-full h-auto object-cover  shadow-md shadow-slate-200 rounded-tl-lg rounded-tr-lg" />
                </div>
                <div className="flex justify-between items-center px-4">
                  <div className="flex items-center gap-0.5">
                    <HeartIcon className="icon-style text-red-500 w-5 h-5" />
                    <span className="text-xs font-bold">{val.like}</span>
                  </div>

                  <div className="flex items-center gap-0.5">
                    <ClockIcon className="icon-style text-black w-4 h-4 " />
                    <span className="text-xs font-bold">{val.time}</span>
                  </div>

                  <div className="flex items-center gap-0.5">
                    <HashtagIcon className="icon-style text-blue-600" />
                    <span className="text-xs font-bold text-blue-600">{val.by}</span>
                  </div>
                </div>

                <div className="grid items-center justify-items-start px-4">
                  <h1 className="text-base font-semibold lg:text-sm">{val.title}</h1>
                  <p className="text-sm text-justify  lg:text-xs">{truncate(val.text,{length:175})}</p>
                </div>
                <div className="flex items-center  justify-center px-4 w-full">
                  <a href={val.url} rel="noopener noreferrer" className="w-full bg-gradient-to-b from-slate-900 to-black shadow-md shadow-black text-center text-slate-100 button-theme py-1.5" target="_blank">{val.btn}</a>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Story;
