import React from "react";
import Banner from "../assets/banner.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import { API } from "../api/api";
import { useQuery } from "react-query";

export const Content = () => {
  const navigate = useNavigate();

  let { data: films } = useQuery("filmsCache", async () => {
    const response = await API.get("/films");
    return response.data.data;
  });

  return (
    <div className="pb-[10rem]">
      <div className="bg-black flex justify-center  my-[5rem]">
        <div className="absolute  left-[24rem] space-y-[2rem]  mt-[2.5rem]">
          <div className="space-y-[-37px] text-[4rem] font-semibold">
            <p className="text-btnPink ">DEAD </p>
            <p>POOL </p>
          </div>
          <div className="font-bold text-[1.2rem]">
            <p className="text-white">Action</p>
            <p className="text-btnPink ">Rp.99.000</p>
          </div>
          <article className="w-[50rem] text-white leading-[2rem]">
            Hold onto your chimichangas, folks. From the studio that brought you all 3 Taken films
            comes the block-busting, fourth-wall-breaking masterpiece about Marvel Comics’ sexiest
            anti-hero! Starring God’s perfect idiot Ryan Reynolds and a bunch of other "actors,"
            DEADPOOL is a giddy slice of awesomeness packed with more twists than Deadpool’s
            enemies’ intestines and more action than prom night. Amazeballs!
          </article>
        </div>
        <div className=" flex justify-center  w-full">
          <img src={Banner} className="w-[100rem] " />
        </div>
      </div>
      <div className="mx-[10rem] ">
        <h1 className="">Top 10 Best Seller</h1>
        <div className="w-full my-[3rem] mb-[3rem] ">
          <Swiper
            slidesPerView={5}
            spaceBetween={13}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper flex"
          >
            {films?.slice(0, 10).map((value) => {
              return (
                <SwiperSlide>
                  <img
                    onClick={() => navigate(`DetailFilm/${value.ID}`)}
                    className="w-[400px]"
                    src={`http://localhost:5000/uploads/${value.thumbnail}`}
                    alt=""
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <p className="text-center text-[2rem] mt-[12rem] mb-[2rem]">Movie List</p>
        <div className="flex justify-center gap-[2rem]">
          <button className="bg-blue-800 w-[6rem] h-[3rem] rounded-lg">All Movies</button>
          <button className="bg-blue-800 w-[5rem] h-[3rem] rounded-lg">Horror</button>
          <button className="bg-blue-800 w-[5rem] h-[3rem] rounded-lg">Drama </button>
          <button className="bg-blue-800 w-[5rem] h-[3rem] rounded-lg">Comedy</button>
        </div>

        <div className="flex  justify-center">
          <div className="grid grid-cols-6 w-[70%] mt-[3rem] gap-[2rem]  ">
            {films?.map((e) => {
              return (
                <div className="border border-white p-[.2rem] rounded-lg">
                  <img
                    onClick={() => navigate(`DetailFilm/${e.ID}`)}
                    className=" w-[200px] h-[300px]"
                    src={`http://localhost:5000/uploads/${e.thumbnail}`}
                  />
                  <h3 className="text-center">{e.title}</h3>
                  <p className="text-center"> {e.category} </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
