import React from "react";
import Banner from "../assets/banner.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export const Content = () => {
  const rooms = [
    {
      id: 1,
      imageUrl: "1.png",
    },
    {
      id: 2,
      imageUrl: "2.png",
    },
    {
      id: 3,
      imageUrl: "3.png",
    },
    {
      id: 4,
      imageUrl: "4.png",
    },
    {
      id: 5,
      imageUrl: "5.png",
    },
    {
      id: 6,
      imageUrl: "6.png",
    },
    {
      id: 7,
      imageUrl: "7.png",
    },
    {
      id: 8,
      imageUrl: "8.png",
    },
    {
      id: 9,
      imageUrl: "9.png",
    },
    {
      id: 10,
      imageUrl: "10.png",
    },
    {
      id: 11,
      imageUrl: "11.png",
    },
    {
      id: 12,
      imageUrl: "12.png",
    },
    {
      id: 13,
      imageUrl: "13.png",
    },
    {
      id: 14,
      imageUrl: "14.png",
    },
    {
      id: 15,
      imageUrl: "15.png",
    },
    {
      id: 16,
      imageUrl: "16.png",
    },
    {
      id: 17,
      imageUrl: "17.png",
    },
    {
      id: 18,
      imageUrl: "18.png",
    },
    {
      id: 19,
      imageUrl: "19.png",
    },
    {
      id: 20,
      imageUrl: "20.png",
    },
    {
      id: 21,
      imageUrl: "21.png",
    },
    {
      id: 22,
      imageUrl: "22.png",
    },
    {
      id: 23,
      imageUrl: "23.png",
    },
    {
      id: 24,
      imageUrl: "24.png",
    },
  ];
  return (
    <div>
      <div className="bg-black flex justify-center my-[5rem]">
        <div className="absolute  left-[24rem] space-y-[2rem]  mt-[2.5rem]">
          <div className="space-y-[-37px] text-[4rem] font-semibold">
            <p className="text-btnPink ">DEAD </p>
            <p>POOL </p>
          </div>
          <div className="font-bold text-[1.2rem]">
            <p>Action</p>
            <p className="text-btnPink ">Rp.99.000</p>
          </div>
          <article className="w-[50rem] leading-[2rem]">
            Hold onto your chimichangas, folks. From the studio that brought you all 3 Taken films
            comes the block-busting, fourth-wall-breaking masterpiece about Marvel Comics’ sexiest
            anti-hero! Starring God’s perfect idiot Ryan Reynolds and a bunch of other "actors,"
            DEADPOOL is a giddy slice of awesomeness packed with more twists than Deadpool’s
            enemies’ intestines and more action than prom night. Amazeballs!
          </article>
          <button className="bg-btnPink px-[2rem] py-[.5rem] rounded-lg text-[20px]">
            Buy Now
          </button>
        </div>
        <div className=" flex justify-center  w-full">
          <img src={Banner} className="w-[100rem] " />
        </div>
      </div>
      <div className="mx-[10rem] mb-[3rem]">
        <h1 className="">List Film</h1>
        <div className="w-full my-[3rem] mb-[3rem] ">
          <Swiper
            slidesPerView={5}
            spaceBetween={3}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper flex"
          >
            {rooms.map((value) => {
              return (
                <SwiperSlide>
                  <img className="w-[400px]" src={`/thumbnail/${value.imageUrl}`} alt="" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
