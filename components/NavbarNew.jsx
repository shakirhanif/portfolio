import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link as LinkS, animateScroll as scroll } from "react-scroll";

const NavbarNew = () => {
  const [downloadCv, setDownloadCv] = useState(
    <span className="download-text">Download CV</span>
  );
  const [pointerEvent, setPointerEvent] = useState(true);
  function cvClickHandler() {
    setDownloadCv(
      <span className="download-text" style={{ top: "-100px" }}>
        Download CV
      </span>
    );
    setPointerEvent(false);
    setTimeout(() => {
      setDownloadCv(
        <span className="spinner-anim">
          <svg className="spinner" viewBox="0 0 50 50">
            <circle
              className="path"
              cx="25"
              cy="25"
              r="20"
              fill="none"
              stroke-width="5"
            ></circle>
          </svg>
        </span>
      );
    }, 250);
    setTimeout(() => {
      setDownloadCv(
        <span className="download-text">
          <i className="fa-solid fa-check"></i>Thank you
        </span>
      );
    }, 2500);
    setTimeout(() => {
      setDownloadCv(
        <span className="download-text">
          <i className="fa-solid fa-file-arrow-down"></i>Download CV
        </span>
      );
      setPointerEvent(true);
    }, 7000);
  }

  const [opacity, setOpacity] = useState(false);
  const [nav, setNav] = useState("");
  function navHandler() {
    setNav((preValue) =>
      preValue === "active-nav anim-navs" ? "" : "active-nav"
    );
    setTimeout(() => {
      setNav((preValue) => preValue + " anim-navs");
    }, 100);
  }

  const [shadow, setShadow] = useState(false);
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
    <nav
      className={
        shadow ? " fixed w-full shadow-xl z-[100]  " : " fixed w-full z-[100]  "
      }
    >
      <div className="nav-container">
        <div className="nav-title">
          <div className="name-align">
            <LinkS
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              <div
                className="name-bar text-[#5651e5] font-extrabold font-serif hover:cursor-pointer"
                style={{ paddingLeft: "1rem" }}
              >
                Shakir Hanif
              </div>
            </LinkS>
          </div>
        </div>

        <div className="nav-link-container">
          <div className={`nav-links nav-link-settings ${nav}`}>
            <LinkS
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => setNav("")}
            >
              <div className="nav-menu-header hover:cursor-pointer">
                <div className="name-bar" style={{ paddingLeft: "5rem" }}>
                  Shakir Hanif
                  <br />
                  <span>Full-Stack Web Developer</span>
                </div>
              </div>
            </LinkS>
            <div
              onMouseOver={() => setOpacity(true)}
              onMouseOut={() => setOpacity(false)}
              id="nth"
              className="nav-links-effect-container"
            >
              <LinkS
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => setNav("")}
              >
                <div
                  className={`nav-link ${
                    opacity ? "opacity-30 hover:opacity-100" : null
                  } hover:cursor-pointer`}
                >
                  <div className="link-anim-set">
                    <div className="link-anim-set-p p1 ">Home</div>
                  </div>
                </div>
              </LinkS>
              <LinkS
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => setNav("")}
              >
                <div
                  className={`nav-link ${
                    opacity ? "opacity-30 hover:opacity-100" : null
                  } hover:cursor-pointer`}
                >
                  <div className="link-anim-set">
                    <div className="link-anim-set-p p2">About</div>
                  </div>
                </div>
              </LinkS>
              <LinkS
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => setNav("")}
              >
                <div
                  className={`nav-link ${
                    opacity ? "opacity-30 hover:opacity-100" : null
                  } hover:cursor-pointer`}
                >
                  <div className="link-anim-set">
                    <div className="link-anim-set-p p3">Skills</div>
                  </div>
                </div>
              </LinkS>
              <LinkS
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => setNav("")}
              >
                <div
                  className={`nav-link ${
                    opacity ? "opacity-30 hover:opacity-100" : null
                  } hover:cursor-pointer`}
                >
                  <div className="link-anim-set">
                    <div className="link-anim-set-p p3">Projects</div>
                  </div>
                </div>
              </LinkS>
              <LinkS
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => setNav("")}
              >
                <div
                  className={`nav-link ${
                    opacity ? "opacity-30 hover:opacity-100" : null
                  } hover:cursor-pointer`}
                >
                  <div className="link-anim-set">
                    <div className="link-anim-set-p p5">Contact</div>
                  </div>
                </div>
              </LinkS>
            </div>
            <div className="download-center">
              <div onClick={cvClickHandler}>
                <Link
                  href="#cv"
                  id="downloadCv"
                  className="download-cv"
                  style={{ pointerEvents: `${pointerEvent ? "auto" : "none"}` }}
                >
                  {downloadCv}
                </Link>
              </div>
            </div>
          </div>
          <button
            className="menu-btn shadow-none rounded-none bg-none"
            onClick={navHandler}
            href="#"
          >
            {nav !== "active-nav anim-navs" ? (
              <AiOutlineMenu></AiOutlineMenu>
            ) : (
              <AiOutlineClose></AiOutlineClose>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarNew;
