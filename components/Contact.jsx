import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMail, AiOutlineGithub } from "react-icons/ai";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { Link as LinkS, animateScroll as scroll } from "react-scroll";
import { useForm } from "react-hook-form";
import axios from "axios";

const Contact = () => {
  const [sendForm, setSendForm] = useState("Send Message");
  const [myForm, setMyForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "",
  });
  const resetForm = () => {
    setTimeout(() => {
      setMyForm({
        name: "",
        email: "",
        phone: "",
        message: "",
        subject: "",
      });
    }, 100);
    setTimeout(() => {
      setSendForm("Message Sent Successfully");
    }, 1200);
    setTimeout(() => {
      setSendForm("Send Message");
    }, 7000);
  };
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submitHandler = async ({ name, phone, email, subject, message }) => {
    // console.log(email);
    try {
      await axios.post("api/message", {
        name,
        phone,
        email,
        subject,
        message,
      });
    } catch (err) {
      console.log(err);
    }
  };
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
                <div className=" flex flex-col px-20 pt-4">
                  <Link href="https://github.com/shakirhanif/" target="_blank">
                    <div className=" flex items-center py-2 hover:scale-105 ease-in duration-100 ">
                      <AiOutlineGithub size={20} />
                      <p className=" mx-2">github.com/shakirhanif</p>
                    </div>
                  </Link>
                  <div className=" flex items-center py-2 hover:cursor-default hover:scale-105 ease-in duration-100 ">
                    <AiOutlineMail size={20} />
                    <p className=" mx-2">shakirhanif@hotmail.com</p>
                  </div>
                  <div className=" flex items-center py-2 hover:cursor-default hover:scale-105 ease-in duration-100 ">
                    <BsTelephone size={20} />
                    <p className=" mx-2">0321-4852967</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 ">
            <div className="p-4">
              <form onSubmit={handleSubmit(submitHandler)}>
                <div className=" grid md:grid-cols-2 gap-4 w-full py-2 ">
                  <div className=" flex flex-col ">
                    <label htmlFor="name" className=" uppercase text-sm py-2 ">
                      Name
                    </label>
                    <input
                      {...register("name", {
                        required: "Please enter name",
                      })}
                      id="name"
                      className=" border-2 rounded-lg flex border-gray-300 "
                      type="text"
                      value={myForm.name}
                      onChange={(e) =>
                        setMyForm({ ...myForm, name: e.target.value })
                      }
                    />
                    {errors.name ? (
                      <div className=" text-red-500">{errors.name.message}</div>
                    ) : null}
                  </div>
                  <div className=" flex flex-col ">
                    <label htmlFor="phone" className=" uppercase text-sm py-2 ">
                      Phone
                    </label>
                    <input
                      className=" border-2 rounded-lg flex border-gray-300 "
                      type="text"
                      id="phone"
                      {...register("phone")}
                      value={myForm.phone}
                      onChange={(e) =>
                        setMyForm({ ...myForm, phone: e.target.value })
                      }
                    />
                    {errors.phone ? (
                      <div className=" text-red-500">
                        {errors.phone.message}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className=" flex flex-col py-2 ">
                  <label htmlFor="email" className=" uppercase text-sm py-2 ">
                    Email
                  </label>
                  <input
                    className=" border-2 rounded-lg flex border-gray-300 "
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "Please enter email",
                    })}
                    value={myForm.email}
                    onChange={(e) =>
                      setMyForm({ ...myForm, email: e.target.value })
                    }
                  />
                  {errors.email ? (
                    <div className=" text-red-500">{errors.email.message}</div>
                  ) : null}
                </div>
                <div className=" flex flex-col py-2 ">
                  <label htmlFor="subject" className=" uppercase text-sm py-2 ">
                    Subject
                  </label>
                  <input
                    className=" border-2 rounded-lg flex border-gray-300 "
                    type="text"
                    id="subject"
                    {...register("subject", {
                      required: "Please enter subject",
                    })}
                    value={myForm.subject}
                    onChange={(e) =>
                      setMyForm({ ...myForm, subject: e.target.value })
                    }
                  />
                  {errors.subject ? (
                    <div className=" text-red-500">
                      {errors.subject.message}
                    </div>
                  ) : null}
                </div>
                <div className=" flex flex-col py-2 ">
                  <label htmlFor="message" className=" uppercase text-sm py-2 ">
                    Message
                  </label>
                  <textarea
                    id="message"
                    {...register("message", {
                      required: "Please enter Message",
                    })}
                    rows="5"
                    className=" border-2 rounded-lg p-3 border-gray-300 "
                    value={myForm.message}
                    onChange={(e) =>
                      setMyForm({ ...myForm, message: e.target.value })
                    }
                  />
                  {errors.message ? (
                    <div className=" text-red-500">
                      {errors.message.message}
                    </div>
                  ) : null}
                </div>
                <div
                  onClick={() => {
                    myForm.phone === "" ||
                    myForm.name === "" ||
                    myForm.email === "" ||
                    myForm.subject === "" ||
                    myForm.message === ""
                      ? null
                      : resetForm();
                  }}
                  className=" w-full flex justify-center p-4 mt-4 "
                >
                  <button className="border-2 bg-[#5651e5] p-2 px-3 rounded-md text-white active:scale-95 ease-in duration-75 hover:bg-[#1f18d8] hover:cursor-pointer hover:scale-105">
                    {sendForm}
                  </button>
                </div>
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
