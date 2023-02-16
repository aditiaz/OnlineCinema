import React, { useState } from "react";
import Iframe from "react-iframe";
import { Navbar } from "../components/Navbar";
import { Modal, TextInput } from "flowbite-react";
import Sheet from "../assets/sheet.svg";

export const DetailFilm = () => {
  const [buy, setBuy] = useState(false);
  return (
    <>
      <Navbar />
      <div class="flex gap-2 bg-black h-[45rem] mx-[5rem] mt-[2rem]">
        <div class="basis-1/3 ">
          <img class="object-cover h-[30rem] w-[20rem] pt-2" src="/thumbnail/25.jpg" />
        </div>

        <div class="basis-2/3">
          <div class="flex flex-row justify-between items-center pb-7 ">
            <h2 class="text-[30px] font-bold">INTERTLEAR</h2>
            <div>
              <button
                onClick={() => setBuy(true)}
                class="bg-btnPink w-[6rem] h-[2rem] rounded-md"
                type="button"
              >
                Buy Now
              </button>
            </div>
          </div>
          <Iframe
            url="https://www.youtube.com/embed/zSWdZVtXT7E"
            width="840px"
            height="320px"
            id=""
            className=""
            display="block"
            position="relative"
          />
          <div class="pt-5">
            <h4 class="text-left text-xl font-semibold ">Family Friendly</h4>
            <h3 class="text-left py-4 text-orange-500 font-bold">IDR 150.000,00</h3>
            <p class="leading-normal text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde qui deleniti dolorem
              recusandae. Provident quia expedita unde ipsum placeat magnam vero, laboriosam quas
              nostrum? Alias atque qui nisi repellendus accusantium quibusdam vitae ipsum maxime
              perspiciatis? Doloribus perferendis necessitatibus totam amet reprehenderit optio
              assumenda similique quod. At, earum? Molestiae minus labore illum sed expedita
              blanditiis a, nemo cupiditate tenetur! Ipsa sit nemo neque ullam nulla, velit
              architecto omnis corrupti, iusto placeat iste esse corporis.
            </p>
          </div>
        </div>

        {/* modal */}

        <Modal show={buy} size="md" popup={true} onClose={() => setBuy(false)}>
          <Modal.Body className="bg-black rounded-lg ">
            <Modal.Header />
            <div className="space-y-6  pb-4 sm:pb-6  xl:pb-8">
              <p className="text-[1.2rem] font-bold text-white text-center">
                Cinema<span className="text-btnPink">Online</span> : 0981312323
              </p>
              <div>
                <div className="my-[2rem] space-y-[.2rem]">
                  <p className="text-[1.5rem] font-semibold"> Tom & Jerry</p>
                  <p className="text-[1rem] font-semibold ">
                    {" "}
                    Total : <span className="text-btnPink">Rp.158,000</span>
                  </p>
                </div>
                <TextInput
                  id="account"
                  placeholder="Input Your Account Number"
                  disabled
                  required={true}
                />
              </div>
              <div className="flex gap-1">
                <button className="bg-btnPink  text-[1.1rem] gap-2 flex justify-center w-[12rem] font-semibold h-[2.2rem] rounded-md ">
                  Attach Payment
                  <img src={Sheet} className="w-[1.7rem]" alt="sheet" />
                </button>
                <p className="text-[10px] text-payText font-semibold">
                  *transfer can be made to holyways account
                </p>
              </div>{" "}
              s <button className="bg-btnPink w-full rounded-md p-[.3rem]">PAY</button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};
