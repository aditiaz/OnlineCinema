import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { TextInput } from "flowbite-react";
import Frame from "../assets/frame.svg";
import Kanye from "../assets/kanye.jpg";

export const AddFilm = () => {
  const [form, setForm] = useState({
    title: "",
    image: "",
    category: "",
    price: "",
    link_file: "",
    description: "",
  });
  const [preview, setPreview] = useState(null);
  const handleChange = (e) => {
    const { name, type, value } = e.target;
    setForm({ ...form, [name]: type === "file" ? e.target.files : e.target.value });
    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      console.log("ini data blob", url);
      setPreview(url);
    }
  };
  return (
    <div className="">
      <Navbar />
      <h1 className="my-[1rem] ml-[2rem] font-semibold">Add Film</h1>
      <div className="flex justify-center align-middle">
        <div className=" w-[40%] ">
          {" "}
          <form className=" space-y-[1rem] text-[1.21rem]" action="">
            <div className="my-[1rem] flex justify-center   ">
              <img
                className="w-[300px]  p-[12px] border-[5px] border-white  h-[300px]"
                src={preview}
                alt="preview here"
              />
            </div>
            <div className="flex gap-2 justify-between w-full ">
              <input
                className="w-full text-[1.2rem] border border-white rounded-lg"
                id="title"
                placeholder="Title"
                name="title"
                value={form.title}
                required={true}
                onChange={handleChange}
              />

              <label
                className=" border-[.1rem] bg-inputBg text-placeHolder border-white rounded-lg flex justify-between w-[15rem]"
                for="image"
              >
                <img src={Frame} alt="" />
                Attach Thumbnail
              </label>
              <input
                hidden
                id="image"
                className="bg-white text-black"
                type="file"
                placeholder="Title"
                name="image"
                onChange={handleChange}
              />
            </div>

            <input
              className="w-full text-[1.2rem] border border-white rounded-lg"
              id="title"
              placeholder="Category"
              name="category"
              value={form.categpry}
              required={true}
              onChange={handleChange}
            />
            <input
              className="w-full text-[1.2rem] border border-white rounded-lg"
              id="title"
              placeholder="Price"
              required={true}
              name="price"
              value={form.price}
              onChange={handleChange}
            />
            <input
              className="w-full focus:border-red text-[1.2rem] border border-white rounded-lg"
              id="title"
              placeholder="Link File"
              name="link_file"
              value={form.link_file}
              required={true}
              onChange={handleChange}
            />
            <textarea
              className="w-full bg-transparent text-[1.2rem] border border-white rounded-lg"
              id="title"
              placeholder="Description"
              required={true}
              name="description"
              onChange={handleChange}
              value={form.description}
              style={{ resize: "none" }}
            />
            <div className="flex justify-end">
              <button type="submit" className="bg-btnPink w-[7rem] py-[.3rem] rounded-lg">
                Add Film
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
