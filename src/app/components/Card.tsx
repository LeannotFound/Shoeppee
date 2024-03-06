import Image from "next/image";
import React, { useState } from "react";
import Button from "./Button";
import Link from "next/link";
import { Products } from "../lib/type";
import { products } from "../lib/data";

export type CardProps = {
  slug?: string;
  name: string;
  brand: string;
  description: string;
  rate: string;
  price: string;
  image: string;
};

function Card({
  slug,
  name,
  brand,
  description,
  rate,
  price,
  image,
}: CardProps) {
  const [count, setCount] = useState(0);

  const onClickHandlerAdd = () => {
    setCount(count + 1);
  };
  const onClickHandlerMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="flex justify-center ">
        <div className="border-solid border-2 p-5 content-center m-1 ">
          <Link href={`/product/${slug}`} key={slug}>
            <div>
              <p className="flex">
                {" "}
                <svg
                  width="9"
                  height="9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.69 7.501l2.181 1.44c.281.184.627-.09.545-.428l-.632-2.582a.406.406 0 01.126-.395L8.866 3.84c.255-.22.125-.666-.208-.688L6.105 2.98a.35.35 0 01-.193-.073.372.372 0 01-.123-.17L4.837.246a.372.372 0 00-.131-.178.35.35 0 00-.412 0 .372.372 0 00-.131.178L3.21 2.738a.372.372 0 01-.123.17.35.35 0 01-.193.073l-2.553.17c-.333.023-.463.468-.208.689L2.09 5.536a.406.406 0 01.125.396l-.584 2.392c-.1.405.316.734.65.513L4.31 7.501a.345.345 0 01.38 0z"
                    fill="#F7B543"
                  />
                </svg>
                {rate}
              </p>
            </div>
            <Image alt="sbabdsjad" src={image} height={290} width={200} />
            <h3 className="font-bold">{brand}</h3>
            <p className="py-1">{name}</p>
            <p className="py-1">{description}</p>
            <div className="flex">
              <div>
                <p className="p-2 my-2 text-red-600 border-2 border-red-600 rounded-lg w-fit justify-self-start">
                  {" "}
                  {price}
                </p>
              </div>

              <div>
                {" "}
                <p className="justify-self-end line-through mx-1">19.9$</p>
              </div>
            </div>
          </Link>
          <div className="flex justify-center justify-items-center space-x-3">
            <Button
              className="bg-whites border-solid border-2 border-grey p-3 px-5 rounded-lg hover:bg-gray-200 "
              name={`-`}
              onClick={onClickHandlerMinus}
            ></Button>
            <h2 className="self-center">{count}</h2>
            <Button
              className="bg-whites border-solid border-2 border-grey  p-3 px-5 rounded-lg  hover:bg-gray-200"
              name={`+`}
              onClick={onClickHandlerAdd}
            ></Button>

            <div className="group bg-whites border-solid border-2 border-grey p-2 rounded-lg cursor-pointer w-1/16 hover:w-full justify-center inline-block">
              {" "}
              <div className="self-center inline-flex">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3H3.21922L6.78345 17.2569C5.73276 17.7236 5 18.7762 5 20C5 21.6569 6.34315 23 8 23C9.65685 23 11 21.6569 11 20C11 19.6494 10.9398 19.3128 10.8293 19H15.1707C15.0602 19.3128 15 19.6494 15 20C15 21.6569 16.3431 23 18 23C19.6569 23 21 21.6569 21 20C21 18.3431 19.6569 17 18 17H8.78078L8.28078 15H18C20.0642 15 21.3019 13.6959 21.9887 12.2559C22.6599 10.8487 22.8935 9.16692 22.975 7.94368C23.0884 6.24014 21.6803 5 20.1211 5H5.78078L5.15951 2.51493C4.93692 1.62459 4.13696 1 3.21922 1H2ZM18 13H7.78078L6.28078 7H20.1211C20.6742 7 21.0063 7.40675 20.9794 7.81078C20.9034 8.9522 20.6906 10.3318 20.1836 11.3949C19.6922 12.4251 19.0201 13 18 13ZM18 20.9938C17.4511 20.9938 17.0062 20.5489 17.0062 20C17.0062 19.4511 17.4511 19.0062 18 19.0062C18.5489 19.0062 18.9938 19.4511 18.9938 20C18.9938 20.5489 18.5489 20.9938 18 20.9938ZM7.00617 20C7.00617 20.5489 7.45112 20.9938 8 20.9938C8.54888 20.9938 8.99383 20.5489 8.99383 20C8.99383 19.4511 8.54888 19.0062 8 19.0062C7.45112 19.0062 7.00617 19.4511 7.00617 20Z"
                    fill="#0F0F0F"
                  />
                </svg>
                <p className="transition duration-150 ease-in-out hidden group-hover:inline-flex sm:hiddern">
                  Add to cart
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
