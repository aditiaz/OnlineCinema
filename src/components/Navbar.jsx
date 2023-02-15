import React, { useState } from "react";
import movieIc from "../assets/movieIc.svg";
import { Modal, Button, TextInput, Dropdown, Avatar } from "flowbite-react";
import profilePic from "../assets/kanye.jpg";
import Clapper from "../assets/clapperboard.svg";
import Logout from "../assets/logout.svg";
import User from "../assets/user.svg";
import Layer from "../assets/Layer.svg";

const BeforeLogin = () => {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  return (
    <div className="grid grid-cols-2 gap-5  content-center">
      <React.Fragment>
        <button
          onClick={() => setLogin(true)}
          className="px-[2.5rem] cursor-pointer rounded-lg px-[.8rem] h-[3rem] w-[9rem] font-bold"
        >
          Login
        </button>

        <Modal show={login} size="md" popup={true} onClose={() => setLogin(false)}>
          <Modal.Body className="bg-black rounded-lg">
            <Modal.Header />
            <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
              <h3 className="text-[3rem] font-bold text-btnPink dark:text-white">Login</h3>
              <div>
                <div className="mb-2 block">
                  {/* <Label htmlFor="email" value="Your email" /> */}
                </div>
                <TextInput id="email" placeholder="Email" required={true} />
              </div>
              <div>
                <div className="mb-2 block">
                  {/* <Label htmlFor="password" value="Your password" /> */}
                </div>
                <TextInput placeholder="Password" id="password" type="password" required={true} />
              </div>
              <div>
                <div className="mb-2 block">
                  {/* <Label htmlFor="email" value="Your email" /> */}
                </div>
              </div>
              <Button className="bg-btnPink w-full">Login</Button>

              <div className="flex w-full justify-center text-sm font-medium text-white">
                Already have an account?click &nbsp;
                <span
                  onClick={() => {
                    setRegister(true);
                    setLogin(false);
                  }}
                  className="cursor-pointer"
                >
                  here
                </span>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </React.Fragment>
      <React.Fragment>
        <button
          onClick={() => setRegister(true)}
          className="px-[2.5rem] cursor-pointer rounded-lg bg-btnPink px-[.8rem] h-[3rem] w-[9rem] font-bold"
        >
          Register
        </button>

        <Modal show={register} size="md" popup={true} onClose={() => setRegister(false)}>
          <Modal.Body className="bg-black rounded-lg">
            <Modal.Header />
            <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
              <h3 className="text-[3rem] font-bold text-btnPink dark:text-white">Register</h3>
              <div>
                <div className="mb-2 block">
                  {/* <Label htmlFor="email" value="Your email" /> */}
                </div>
                <TextInput id="email" placeholder="Email" required={true} />
              </div>
              <div>
                <div className="mb-2 block">
                  {/* <Label htmlFor="password" value="Your password" /> */}
                </div>
                <TextInput placeholder="Password" id="password" type="password" required={true} />
              </div>
              <div>
                <div className="mb-2 block">
                  {/* <Label htmlFor="email" value="Your email" /> */}
                </div>
                <TextInput id="fullname" placeholder="Full Name" required={true} />
              </div>
              <Button className="bg-btnPink w-full">Register</Button>

              <div className="flex w-full justify-center text-sm font-medium text-white">
                Already have an account?click &nbsp;
                <span
                  onClick={() => {
                    setRegister(false);
                    setLogin(true);
                  }}
                  className="cursor-pointer"
                >
                  here
                </span>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    </div>
  );
};

const AfterLogin = () => {
  const admin = "admsdfin";
  return (
    <div className="bg-black text-white py-5">
      <Dropdown
        color="black"
        arrowIcon={false}
        inline={true}
        label={<Avatar rounded={true} img={profilePic} bordered={true} color="pink" size="lg" />}
      >
        <div className="border-none w-[12rem]">
          {admin == "admin" ? (
            <div>
              <Dropdown.Item>
                <img className="w-[20px]" src={User} /> &nbsp;Profile
              </Dropdown.Item>
              <Dropdown.Item>
                <img className="w-[20px]" src={Clapper} /> &nbsp; My List Film
              </Dropdown.Item>
            </div>
          ) : (
            <Dropdown.Item>
              <img className="w-[20px]" src={Layer} /> &nbsp; Add Film
            </Dropdown.Item>
          )}
          <Dropdown.Item>
            <img className="w-[20px]" src={Logout} /> &nbsp; Logout
          </Dropdown.Item>
        </div>
      </Dropdown>
    </div>
  );
};

export const Navbar = () => {
  const test = "2";
  return (
    <div className="bg-black flex justify-between h-[7rem] pr-[5rem] ">
      <img src={movieIc} alt="icMovie" />
      {test == "1" ? <BeforeLogin /> : <AfterLogin />}
    </div>
  );
};
export { BeforeLogin, AfterLogin };
