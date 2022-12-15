import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

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

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-title">
          <div className="name-align">
            <div className="name-bar" style={{ paddingLeft: "1rem" }}>
              Shakir Hanif
            </div>
          </div>
        </div>

        <div className="nav-link-container">
          <div className="nav-links nav-link-settings">
            <div className="nav-menu-header">
              <div className="name-bar" style={{ paddingLeft: "5rem" }}>
                Shakir Hanif
                <br />
                <span>Front-end Developer</span>
              </div>
            </div>
            <div id="nth" className="nav-links-effect-container">
              <a href="#home" className="nav-link">
                <div className="link-anim-set">
                  <div className="link-anim-set-p p1">Home</div>
                </div>
              </a>
              <a href="#about" className="nav-link">
                <div className="link-anim-set">
                  <div className="link-anim-set-p p2">About</div>
                </div>
              </a>
              <a href="#skills" className="nav-link">
                <div className="link-anim-set">
                  <div className="link-anim-set-p p3">Skills</div>
                </div>
              </a>
              <a href="#projects" className="nav-link">
                <div className="link-anim-set">
                  <div className="link-anim-set-p p3">Projects</div>
                </div>
              </a>

              <a href="#contact" className="nav-link">
                <div className="link-anim-set">
                  <div className="link-anim-set-p p5">Contact</div>
                </div>
              </a>
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
          <button className="menu-btn" href="#">
            <i className="fa-solid fa-bars-staggered">{AiOutlineMenu}</i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarNew;
