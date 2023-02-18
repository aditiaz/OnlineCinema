import React from "react";
import { Navbar } from "../components/Navbar";

export const Profile = () => {
  return (
    <>
      <Navbar />
      <div class="flex gap-2 bg-black h-[45rem] mx-[9rem] mt-[2rem]">
        <div class="">
          <h2 class="text-left text-[40px] pb-[20px] pt-[50px] font-semibold">My Profile</h2>
          <div class="flex flex-row gap-6">
            <div>
              <img class="object-cover h-[20rem] w-[15rem] pt-2" src="/thumbnail/25.jpg" />
            </div>
            <div class="text-left text-payText font-semibold text-[1.2rem] leading-[2rem] ">
              <div>
                <h4 class="text-orange-500">Fullname</h4>
                <p>Aditia Aria Nugraha</p>
              </div>
              <div>
                <h4 class="text-orange-500">Email</h4>
                <p>aditiian96a@gmail.com</p>
              </div>
              <div>
                <h4 class="text-orange-500">Phone</h4>
                <p>0878-8270-9199</p>
              </div>
            </div>
          </div>
        </div>
        <div class="pl-[15rem] pt-[4rem] ">
          <h2 class="text-[30px] pb-[30px] text-left font-bold">History transaction</h2>
          <div class=" flex justify-center item-center  ">
            <div class="block w-[500px] p-6 bg-backGroundPay  rounded ">
              <div class="text-left">
                <h5 class=" mb-2 text-2xl font-bold tracking-tight ">Tom & Jerry</h5>
                <p class=" font-bold">
                  Saturday,<span className="text-[1rem] font-normal"> 16-Mei-2023</span>
                </p>
                <p class="font-normal text-orange-500 text-bold pb-[10px] font-semibold">
                  Total IDR. 150.000,00
                </p>
              </div>
              <div className="flex justify-end ">
                <p class="w-[8rem]  h-[2rem] text-[1.1rem]  bg-payText text-center text-green-400  bg-transparent-10 text-black">
                  Finished
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
