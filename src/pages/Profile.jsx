import React from "react";

export const Profile = () => {
  return (
    <div class="flex flex-row gap-5 bg-black h-[40rem] w-[80rem]">
      <div class="">
        <h2 class="text-left text-[40px] pb-[20px] pt-[50px] font-semibold">My Profile</h2>
        <div class="flex flex-row gap-6">
          <div>
            <img class="object-cover h-[30rem] w-[20rem] pt-2" src="/thumbnail/25.jpg" />
          </div>
          <div class="text-left font-semibold">
            <h4 class="text-orange-500">Fullname</h4>
            <p>Arya Krisna</p>
            <h4 class="text-orange-500">Email</h4>
            <p>aryakrisna87@gmail.com</p>
            <h4 class="text-orange-500">Phone</h4>
            <p>082-131-607-594</p>
          </div>
        </div>
      </div>
      <div class="pl-[15rem] pt-[4rem] ">
        <h2 class="text-[30px] pb-[30px] text-left font-bold">History transaction</h2>
        <div class=" flex justify-center item-center  ">
          <a
            href="#"
            class="block w-[500px] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <div class="text-left">
              <h5 class=" mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Interstelear
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">Saturday, 16-Mei-2023</p>
              <p class="font-normal text-orange-500 text-bold pb-[10px] font-semibold">
                Total IDR. 150.000,00
              </p>
            </div>
            <div>
              <p class="bg-green-400 bg-transparent-10 text-black">Finished</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
