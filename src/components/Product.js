import React from 'react';
import {StarIcon} from '@heroicons/react/24/solid';
import {ShoppingBagIcon} from '@heroicons/react/24/solid';

const Product = ({
  ifExists,
  id,
  color,
  shadow,
  title,
  text,
  img,
  btn,
  rating,
  price,
}) => {
  return (
    <>
      <div
        className={`relative bg-gradient-to-b ${color} ${shadow}
        grid items-center  ${
          ifExists ? ' justify-items-start' : 'justify-items-center'
        }  rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105 `}
      >
        <div
          className={`grid items-center  ${
            ifExists ? ' justify-items-start' : 'justify-items-center'
          }`}
        >
          <h1 className="text-slate-200 text-xl lg:text-lg md:text-base filter         drop-shadow">
            {title}
          </h1>
          <p
            className="text-slate-200 font-normal
          md:text-sm  filter drop-shadow "
          >
            {text}
          </p>
        </div>
        <div className="grid flex-col items-center ">
          <div className=" flex w-28  items-center justify-between my-2 ">
            <div className="bg-white  px-1 rounded">
              <h1 className="text-black text-sm font-medium">${price}</h1>
            </div>
            <div className="flex items-center gap-1">
              <StarIcon className="icon-style w-5 h-5 md:w-4 md:h-4" />
              <h1 className="md:text-sm"> {rating}</h1>
            </div>
          </div>
          <div className="flex items-center gap-3 my-1">
            <button
              type="button"
              className="bg-white-90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200 "
            >
              <ShoppingBagIcon className="icon-style text-slate-900" />
            </button>
            <button
              type="button"
              className="bg-white  blur-effect-theme button-theme p-0.5 shadow shadow-sky-300 px-2 py-1 text-sm text-black"
            >
              {btn}
            </button>
          </div>
        </div>

        <div
          className={`flex items-center ${
            ifExists
              ? 'absolute top-5 right-1 sm:absolute top-5 right-[-10px] '
              : 'justify-center'
          }`}
        >
          <img
            src={img}
            className={` transitions-theme hover:-rotate-12 object-contain ${
              ifExists
                ? 'h-auto w-48 lg:w-48 md:w-42 sm:w-48 sm:h-20 -rotate-[35deg] '
                : 'h-32 w-64'
            }`}
            alt="shoe/img"
          />
        </div>
      </div>
    </>
  );
};

export default Product;
