"use client";
import React, { useState } from "react";
import Card from "./Card";
import { Products } from "../lib/type";
import Link from "next/link";

type CardProps1 = {
  products: Products[];
};

export const Cards = ({ products }: CardProps1) => {
  return (
    <div className="flex flex-wrap justify-center justify-items-center">
      <div className="flex w-full justify-center justify-items-center">
        <div className="w-full bg-orange-500 min-h-20 mb-4 ">
          <div className="flex items-center justify-center space-x-10">
            <div>
              <svg
                width="48px"
                height="50px"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M512.5 423.9c-13.5-21.3-18.8-38.2-38.7-38.2H218.5c-19.8 0-35.9 16.1-35.9 35.9v259.1h772.7s0-98.1-177.3-121.7c-145-19.3-282.2-88-282.2-201.8"
                  fill="#F07067"
                />
                <path
                  d="M323.6 518.7m-62.9 0a62.9 62.9 0 1 0 125.8 0 62.9 62.9 0 1 0-125.8 0Z"
                  fill="#CDE9E3"
                />
                <path
                  d="M973.2 734.7c0 9.9-8 18-18 18H182.5c-9.9 0-18-8-18-18v-35.9c0-9.9 8-18 18-18h772.7c9.9 0 18 8 18 18v35.9z"
                  fill="#EDEDED"
                />
                <path
                  d="M323.6 437.8c-44.6 0-80.9 36.3-80.9 80.9s36.3 80.9 80.9 80.9 80.9-36.3 80.9-80.9-36.3-80.9-80.9-80.9z m0 125.8c-24.8 0-44.9-20.2-44.9-44.9s20.2-44.9 44.9-44.9c24.8 0 44.9 20.2 44.9 44.9s-20.1 44.9-44.9 44.9z"
                  fill="#211F1E"
                />
                <path
                  d="M971.4 666.8c-6.7-31.2-38.6-105.3-191.1-125.5-89.5-11.9-189.9-45.9-238-105.8-0.6-1-1.4-1.9-2.1-2.7-16.7-21.8-26.5-46.8-26.5-75.4 0-9.9-8-18-18-18-9.9 0-18 8-18 18 0 3.6 0.1 7.2 0.4 10.7-1.4-0.1-2.8-0.2-4.3-0.2H218.5c-29.7 0-53.9 24.2-53.9 53.9v246.1c-10.7 6.2-18 17.7-18 30.9v35.9c0 19.8 16.1 35.9 35.9 35.9h772.7c19.8 0 35.9-16.1 35.9-35.9v-35.9c0.1-14-8-26-19.7-32z m-38.5-4H759c3.7-72.2 28.8-83.7 29.1-83.8-0.6 0.3-1 0.3-1 0.3l-0.2-0.6c103.9 16.5 136.1 59.5 146 84.1zM200.5 421.7c0-9.9 8.1-18 18-18h255.3c4.8 0 6.8 1.6 16.4 18 2.2 3.7 4.5 7.7 7.1 11.8 0.6 1 1.3 1.9 2.1 2.7 0.7 1.1 1.5 2.2 2.2 3.3l-28.5 17.1c-8.5 5.1-11.3 16.1-6.2 24.7 3.4 5.6 9.3 8.7 15.4 8.7 3.2 0 6.3-0.8 9.2-2.6l32.1-19.3c8.8 9.4 18.6 18.1 29.2 26.3L528 524.9c-6.3 7.7-5.1 19 2.6 25.3 3.3 2.7 7.3 4 11.3 4 5.2 0 10.4-2.3 14-6.7l26.8-33c11.8 7 24.2 13.4 37.1 19.2l-16.5 34.7c-4.3 9-0.4 19.7 8.5 23.9 2.5 1.2 5.1 1.7 7.7 1.7 6.7 0 13.2-3.8 16.2-10.3l17.4-36.5c30.1 10.9 61.7 19 92.8 24.7-10.9 17.4-20.9 45.5-23 90.6H200.5V421.7z m-18 313v-35.9h772.7v35.9H182.5z"
                  fill="#211F1E"
                />
              </svg>
              <h1 className="self-center text-white">Shoepee</h1>
            </div>
            <input type="text" placeholder ="  Search for products, brands and shops" className="w-2/5 self-center mt-5 h-10"></input>
          </div>
         
        </div>
      </div>

      {products.map((product) => {
        return (
          <div key={product.slug} className="justify-items-center">
            <Card
              slug={product.slug}
              name={product.name}
              brand={product.brand}
              description={product.description}
              rate={product.rate}
              price={product.price}
              image={product.image}
            />
          </div>
        );
      })}
    </div>
  );
};
