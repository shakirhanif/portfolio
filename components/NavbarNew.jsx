import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

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
            <div className="name-bar" style={{ paddingLeft: "1rem" }}>
              Shakir Hanif
            </div>
          </div>
        </div>

        <div className="nav-link-container">
          <div className={`nav-links nav-link-settings ${nav}`}>
            <div className="nav-menu-header">
              <div className="name-bar" style={{ paddingLeft: "5rem" }}>
                Shakir Hanif
                <br />
                <span>Full-Stack Web Developer</span>
              </div>
            </div>
            <div
              onMouseOver={() => setOpacity(true)}
              onMouseOut={() => setOpacity(false)}
              id="nth"
              className="nav-links-effect-container"
            >
              <Link
                href="/#home"
                className={`nav-link ${
                  opacity ? "opacity-30 hover:opacity-100" : null
                }`}
              >
                <div className="link-anim-set">
                  <div className="link-anim-set-p p1 ">Home</div>
                </div>
              </Link>
              <Link
                href="/#about"
                className={`nav-link ${
                  opacity ? "opacity-30 hover:opacity-100" : null
                }`}
              >
                <div className="link-anim-set">
                  <div className="link-anim-set-p p2">About</div>
                </div>
              </Link>
              <Link
                href="/#skills"
                className={`nav-link ${
                  opacity ? "opacity-30 hover:opacity-100" : null
                }`}
              >
                <div className="link-anim-set">
                  <div className="link-anim-set-p p3">Skills</div>
                </div>
              </Link>
              <Link
                href="/#projects"
                className={`nav-link ${
                  opacity ? "opacity-30 hover:opacity-100" : null
                }`}
              >
                <div className="link-anim-set">
                  <div className="link-anim-set-p p3">Projects</div>
                </div>
              </Link>

              <Link
                href="/#contact"
                className={`nav-link ${
                  opacity ? "opacity-30 hover:opacity-100" : null
                }`}
              >
                <div className="link-anim-set">
                  <div className="link-anim-set-p p5">Contact</div>
                </div>
              </Link>
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
