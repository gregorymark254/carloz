import React from 'react'
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { VscGlobe } from "react-icons/vsc";

const Footer = () => {
  return (
    <main>
      <div className="bg-[#191919]">
        <div className="container mx-auto p-4">
          <div className="md:flex divide-x-2 p-3 space-x-3 text-neutral-400 content-center place-items-end">
            <div>
              <img src="https://ld-wp.template-help.com/wordpress_prod-12426/wp-content/themes/zoomix/assets/images/footer-logo.png" alt="" />
            </div>
            <br />
            <div className="pl-5">
              <p>Photographer portfolio</p>
            </div>
          </div>
          <hr />
          <div className="md:flex justify-between p-4">
            <div className="text-neutral-400">
              <p>Zoomix Copyright &copy; 2022 John Carloz</p>
            </div>
            <br />
            <div className="flex text-white space-x-3">
              <a href="/" className="hover:text-blue-500"><FaFacebookF/></a>
              <a href="/" className="hover:text-violet-500"><FaInstagram/></a>
              <a href="/" className="hover:text-green-600"><FaWhatsapp/></a>
              <a className="hover:text-indigo-700" href="www.royallens.com"><VscGlobe/></a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Footer
