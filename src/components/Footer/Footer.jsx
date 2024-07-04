import React from 'react'
import './footer.css'

import { GiEarthAsiaOceania } from "react-icons/gi";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='secContainer container grid'>
        <div className='logoDiv'>

          <div className='footerLogo'>
            <a href='#' className='logo flex'>
              <h1 className='flex'><GiEarthAsiaOceania className='icon'/>kumaha barudak</h1>
            </a>
          </div>

          <div className='socials flex'>
          <ImFacebook className='icon'/>
          <BsTwitter className='icon'/>
          <AiFillInstagram className='icon'/>
        </div>

        </div>

        <div className='footerLinks'>
          <span className='linkTitle'>
            Information
          </span>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Esplore</a>
          </li>
          <li>
            <a href='#'>Travel</a>
          </li>
          <li>
            <a href='#'>Blog</a>
          </li>
        </div>

        <div className='footerLinks'>
          <span className='linkTitle'>
            Contacs us
          </span>
          <span className='phone'>0831-4426-5446</span>
          <span className='email'>fawwazfara11@gmail.com</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
