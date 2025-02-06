import React from "react";
import './section.css'
import { CiFacebook } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
export default function Home() {
  return (
    <div className="container">
        <div className="home">
      <div className="sec1">
        <h2>Get the best prouct<br/>at your home </h2>
        <input type="search" placeholder="Enter product" />
      </div>
      <div className="sec2">

      </div>
      <div className="sec3">
        <div className="fec">
        <CiFacebook />
        </div>
        <div className="twiter">
        <FaTwitter />
        </div>
       <div className="ins">
       <FaSquareInstagram />
        </div>
      </div>
    </div>
    </div>
  )
}
