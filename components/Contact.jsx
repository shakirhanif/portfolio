import Link from "next/link";
import React from "react";
import { AiOutlineMail, AiOutlineGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { Link as LinkS, animateScroll as scroll } from "react-scroll";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className=" max-w-[1240px] px-2 py-16 w-full ">
        <p className=" text-xl uppercase tracking-widest text-[#5651e5] ">
          Contact
        </p>
        <h2 className=" py-4 ">Get In Touch:</h2>
        <div className=" grid lg:grid-cols-5 ">
          <div className=" col-span-3 lg:col-span-2 shadow-xl shadow-gray-400 rounded-xl p-4 ">
            <div className=" lg:p-4 h-full ">
              <div>
                <img
                  src="/assets/get_in_touch_2.jpg"
                  alt=""
                  className=" rounded-xl hover:scale-105 ease-in duration-300 "
                />
              </div>
              <div>
                <h2 className=" py-2 ">Shakir Hanif</h2>
                <p>Full Stack Web Developer</p>
                <p className=" py-2 ">
                  I'm available for freelance or full-time position. Contact me
                  and have a chat.
                </p>
              </div>
              <div>
                <p className="uppercase pt-4 text-center">Contact with me</p>
                <div className=" flex items-center justify-between px-20 pt-4">
                  <div className="mx-4 rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                    <FaLinkedinIn size={20} />
                  </div>
                  <div className="mx-4 rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                    <AiOutlineGithub size={20} />
                  </div>
                  <div className="mx-4 rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                    <AiOutlineMail size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 ">
            <div className="p-4">
              <form>
                <div className=" grid md:grid-cols-2 gap-4 w-full py-2 ">
                  <div className=" flex flex-col ">
                    <label htmlFor="" className=" uppercase text-sm py-2 ">
                      Name
                    </label>
                    <input
                      className=" border-2 rounded-lg flex border-gray-300 "
                      type="text"
                    />
                  </div>
                  <div className=" flex flex-col ">
                    <label htmlFor="" className=" uppercase text-sm py-2 ">
                      Phone
                    </label>
                    <input
                      className=" border-2 rounded-lg flex border-gray-300 "
                      type="text"
                    />
                  </div>
                </div>
                <div className=" flex flex-col py-2 ">
                  <label htmlFor="" className=" uppercase text-sm py-2 ">
                    Email
                  </label>
                  <input
                    className=" border-2 rounded-lg flex border-gray-300 "
                    type="email"
                  />
                </div>
                <div className=" flex flex-col py-2 ">
                  <label htmlFor="" className=" uppercase text-sm py-2 ">
                    Subject
                  </label>
                  <input
                    className=" border-2 rounded-lg flex border-gray-300 "
                    type="text"
                  />
                </div>
                <div className=" flex flex-col py-2 ">
                  <label htmlFor="" className=" uppercase text-sm py-2 ">
                    Message
                  </label>
                  <textarea
                    rows="10"
                    className=" border-2 rounded-lg p-3 border-gray-300 "
                  ></textarea>
                </div>
                <button className=" w-full p-4 text-gray-100 mt-4 ">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <LinkS
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            <div className="mx-4 rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
              <HiOutlineChevronDoubleUp
                className=" m-auto text-[#5651e5] "
                size={25}
              ></HiOutlineChevronDoubleUp>
            </div>
          </LinkS>
        </div>
      </div>
    </div>
  );
};

export default Contact;
