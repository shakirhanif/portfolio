import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineMail,
  AiOutlineGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useRouter } from "next/router";
import { Link as LinkS, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setlinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/todo-project" ||
      router.asPath === "/pak-explorer-project" ||
      router.asPath === "/osum-project"
    ) {
      setNavBg("transparent");
      setlinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setlinkColor("#1f2937");
    }
  }, [router]);

  const handleNav = () => {
    return setNav((preValue) => !preValue);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? " fixed w-full h-20 shadow-xl z-[100]  "
          : " fixed w-full h-20 z-[100]  "
      }
    >
      <div className=" flex justify-between items-center w-full h-full px-2 2xl:px-16  ">
        <Link href={"/"}>
          <Image
            src="/../public/assets/shakir_hanif_logo.png"
            alt="/"
            width={111}
            height={111}
          />
        </Link>
        <div className=" h-5">
          <ul
            style={{ color: `${linkColor}` }}
            className=" hidden md:flex mr-5"
          >
            <LinkS
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              <li className=" ml-10 text-sm hover:border-b border-amber-400 ease-in duration-150">
                Home
              </li>
            </LinkS>
            <LinkS
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
            >
              <li className=" ml-10 text-sm hover:border-b  border-amber-400 ease-in duration-150 ">
                About
              </li>
            </LinkS>
            <LinkS
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
            >
              <li className=" ml-10 text-sm hover:border-b  border-amber-400 ease-in duration-150 ">
                Skills
              </li>
            </LinkS>
            <LinkS
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
            >
              <li className=" ml-10 text-sm hover:border-b  border-amber-400 ease-in duration-150 ">
                Projects
              </li>
            </LinkS>
            <LinkS
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              <li className=" ml-10 text-sm hover:border-b  border-amber-400 ease-in duration-150 ">
                Contact
              </li>
            </LinkS>
          </ul>
          <div
            onClick={handleNav}
            className=" md:hidden mr-5 hover:cursor-pointer"
          >
            <AiOutlineMenu color={linkColor} size={25}></AiOutlineMenu>
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? " md:hidden fixed left-4 top-0 w-full h-screen bg-black/70"
            : "fixed top-0"
        }
      >
        <div
          className={
            nav
              ? " md:hidden fixed left-0 top-0 w-[75%] sm:[60%] md:[40%] h-screen bg-[#ecf0f3] p-5 ease-in duration-500"
              : "fixed left-[-100%] p-5 ease-in duration-300"
          }
        >
          <div className="flex -ml-4 justify-between w-full items-center">
            <Link href={"/"} onClick={() => setNav(false)}>
              <Image
                src="/../public/assets/shakir_hanif_logo.png"
                alt="/"
                width={111}
                height={111}
              />
            </Link>
            <div
              onClick={handleNav}
              className=" mb-12 p-1 rounded-full shadow-lg shadow-gray-400 cursor-pointer"
            >
              <AiOutlineClose size={25}></AiOutlineClose>
            </div>
          </div>
          <div className=" border-b border-gray-300">
            <p className=" w-[85%] md:w-[60%]">Let's build together</p>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href={"/"}>
                <li
                  onClick={() => setNav(false)}
                  className=" w-20 my-4 mt-8 text-sm"
                >
                  Home
                </li>
              </Link>
              <Link href={"/#about"}>
                <li
                  onClick={() => setNav(false)}
                  className=" w-20 my-4 text-sm"
                >
                  About
                </li>
              </Link>
              <Link href={"/#skills"}>
                <li
                  onClick={() => setNav(false)}
                  className=" w-20 my-4 text-sm"
                >
                  Skills
                </li>
              </Link>
              <Link href={"/#projects"}>
                <li
                  onClick={() => setNav(false)}
                  className=" w-20 my-4 text-sm"
                >
                  Projects
                </li>
              </Link>
              <Link href={"/#contact"}>
                <li
                  onClick={() => setNav(false)}
                  className=" w-20 my-4 text-sm"
                >
                  Contact
                </li>
              </Link>
            </ul>
            <div className=" pt-[4rem]">
              <p className=" uppercase tracking-widest text-gray-600">
                Lets Connect
              </p>
              <div className="flex flex-row justify-center mt-3">
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
      </div>
    </div>
  );
};

export default Navbar;
