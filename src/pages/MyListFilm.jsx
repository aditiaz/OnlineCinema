import React from "react";
import { Navbar } from "../components/Navbar";

export const MyListFilm = () => {
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
  ];
  return (
    <div className="bg-black  h-full">
      <Navbar />
      <h1 className="my-[5rem] ml-[3rem]">My List Film</h1>
      <div className="flex  justify-center">
        <div className="grid grid-cols-6 w-[70%]  gap-[2rem]  ">
          {rooms.map((e) => {
            return <img className=" w-[300px] mb-[2rem]" src={`/thumbnail/${e.imageUrl}`} />;
          })}
        </div>
      </div>
    </div>
  );
};
