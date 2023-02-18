import React, { useState } from "react";
import Iframe from "react-iframe";
import { Navbar } from "../components/Navbar";
import { Modal, TextInput } from "flowbite-react";
import Sheet from "../assets/sheet.svg";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { API } from "../api/api";
import jwt from "jwt-decode";
import moment from "moment/";
export const DetailFilm = () => {
  const today = moment().format(" D MMMM YYYY");
  const { id } = useParams();
  let { data: film } = useQuery("filmCache", async () => {
    const response = await API.get(`/film/` + id);
    return response.data.data;
  });
  const handleTransaction = useMutation(async () => {
    try {
      const response = await API.post("/createtransaction", {});
    } catch (error) {
      console.log(error);
    }
  });
  const user = localStorage.Email;
  const [buy, setBuy] = useState(false);
  return (
    <>
      <Navbar />
      <div class="flex gap-2 bg-black h-[45rem] mx-[5rem] mt-[2rem]">
        <div class="basis-1/3 ">
          <img
            class="object-cover h-[30rem] w-[20rem] pt-2"
            src={`http://localhost:5000/uploads/${film?.thumbnail}`}
          />
        </div>

        <div class="basis-2/3">
          <div class="flex flex-row justify-between items-center pb-7 ">
            <h2 class="text-[30px] font-bold">{film?.title}</h2>
            <div>
              {user == "admin@mail.com" ? (
                <></>
              ) : (
                <button
                  onClick={() => setBuy(true)}
                  class="bg-btnPink w-[6rem] h-[2rem] rounded-md"
                  type="button"
                >
                  Buy Now
                </button>
              )}
            </div>
          </div>
          <Iframe
            url={film?.FilmUrl}
            width="840px"
            height="320px"
            id=""
            className=""
            display="block"
            position="relative"
          />

          <div class="pt-5">
            <h4 class="text-left text-xl font-semibold ">{film?.category}</h4>
            <h3 class="text-left py-4 text-orange-500 font-bold">
              IDR {film?.Price.toLocaleString()}
            </h3>
            <p class="leading-normal text-justify">{film?.description}</p>
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
                  // name="acc_number"
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
              <button className="bg-btnPink w-full rounded-md p-[.3rem]">PAY</button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};
