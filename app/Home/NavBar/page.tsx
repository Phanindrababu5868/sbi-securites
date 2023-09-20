"use client";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import Dropdown from "./dailogbar";
import CloseIcon from "@mui/icons-material/Close";
import "./page.css";
import { Box } from "@mui/material";
import Link from "next/link";

const tabs = [
  {
    title: "Product",
    options: [
      { Option: "Equity", link: "/MutualFunds" },
      { Option: "Drevetive", link: "/Derivatives" },
      { Option: "Fixed income", link: "/MutualFunds" },
    ],
  },
  {
    title: "Platforms",
    options: [
      { Option: "Mobile", link: "/Home/TradingPlatforms" },
      { Option: "Web Plaform", link: "/Home/TradingPlatforms" },
    ],
  },
  {
    title: "Research",
    options: [
      { Option: "Equity Research", link: "/MutualFunds" },
      { Option: "Derivative Research", link: "/Derivatives" },
      { Option: "Currency Research", link: "/MutualFunds" },
      { Option: "MF Research", link: "/MutualFunds" },
    ],
  },

  {
    title: "Knowledge Center",
    options: [{ Option: "FAQs", link: "/Home/FAQS" }],
  },
  {
    title: "Loan",
    options: [
      { Option: "Car Loan", link: "/Home" },
      { Option: " Home Loan", link: "/Home" },
    ],
  },
];

const NavBar = () => {
  const [showpopup, setShowPopUp] = useState(false);

  return (
    <>
      <div className="navbar-bg-container">
        <div className="nav-bar-container">
          <Link href="/">
            <img
              src="/images/logo.png/"
              alt="sbi securities"
              className="navbar-logo"
            />
          </Link>
          <div className="navbar-input-container">
            <input type="text" placeholder="How may i help you ?" />
            <div className="navbar-search-icon-container">
              <SearchIcon
                sx={{
                  width: "16px",
                  height: "16px",
                  color: "#ffffff",
                }}
              />
            </div>
          </div>
          <button className="nav-bar-btn">Open An Account</button>
          <select className="navbar-laguage-selete">
            <option>IN | English</option>
            <option>IN | Hindi</option>
            <option>IN | Telugu</option>
          </select>
          <div className="profile-container" onClick={() => setShowPopUp(true)}>
            <MenuIcon
              sx={{
                width: {
                  sm: 12,
                  lg: 16,
                },
                height: {
                  sm: 12,
                  lg: 16,
                },
              }}
            />
            <div className="navbar-search-icon-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clip-path="url(#clip0_115_832)">
                  <path
                    d="M8 8C8.79113 8 9.56449 7.76541 10.2223 7.32588C10.8801 6.88635 11.3928 6.26164 11.6955 5.53074C11.9983 4.79983 12.0775 3.99556 11.9231 3.21964C11.7688 2.44372 11.3878 1.73098 10.8284 1.17157C10.269 0.612165 9.55629 0.231202 8.78036 0.0768607C8.00444 -0.0774802 7.20017 0.00173314 6.46927 0.304484C5.73836 0.607234 5.11365 1.11992 4.67412 1.77772C4.2346 2.43552 4 3.20888 4 4C4.00106 5.06054 4.42283 6.07734 5.17274 6.82726C5.92266 7.57718 6.93946 7.99894 8 8ZM8 1.33334C8.52742 1.33334 9.04299 1.48973 9.48152 1.78275C9.92005 2.07577 10.2618 2.49224 10.4637 2.97951C10.6655 3.46678 10.7183 4.00296 10.6154 4.52024C10.5125 5.03753 10.2586 5.51268 9.88562 5.88562C9.51268 6.25856 9.03752 6.51254 8.52024 6.61543C8.00296 6.71832 7.46678 6.66551 6.97951 6.46368C6.49224 6.26185 6.07577 5.92005 5.78275 5.48152C5.48973 5.04299 5.33333 4.52742 5.33333 4C5.33333 3.29276 5.61428 2.61448 6.11438 2.11438C6.61448 1.61429 7.29276 1.33334 8 1.33334Z"
                    fill="#F2F2F2"
                  />
                  <path
                    d="M8 9.33398C6.40924 9.33575 4.88414 9.96846 3.75931 11.0933C2.63447 12.2181 2.00176 13.7432 2 15.334C2 15.5108 2.07024 15.6804 2.19526 15.8054C2.32029 15.9304 2.48986 16.0007 2.66667 16.0007C2.84348 16.0007 3.01305 15.9304 3.13807 15.8054C3.2631 15.6804 3.33333 15.5108 3.33333 15.334C3.33333 14.0963 3.825 12.9093 4.70017 12.0342C5.57534 11.159 6.76232 10.6673 8 10.6673C9.23768 10.6673 10.4247 11.159 11.2998 12.0342C12.175 12.9093 12.6667 14.0963 12.6667 15.334C12.6667 15.5108 12.7369 15.6804 12.8619 15.8054C12.987 15.9304 13.1565 16.0007 13.3333 16.0007C13.5101 16.0007 13.6797 15.9304 13.8047 15.8054C13.9298 15.6804 14 15.5108 14 15.334C13.9982 13.7432 13.3655 12.2181 12.2407 11.0933C11.1159 9.96846 9.59076 9.33575 8 9.33398Z"
                    fill="#F2F2F2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_115_832">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`nav-bar-popup-container ${showpopup ? "show-popup" : ""}`}
      >
        <Box
          display={"flex"}
          justifyContent={"flex-end"}
          sx={{
            order: {
              lg: 1,
              sm: 0,
            },
          }}
        >
          <CloseIcon onClick={() => setShowPopUp(false)} />
        </Box>
        <Dropdown tabs={tabs} closeHandler={setShowPopUp} />
      </div>
    </>
  );
};

export default NavBar;
