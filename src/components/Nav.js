import React from 'react'
import {FaFacebookF,FaTwitter,FaInstagram,FaWhatsapp} from 'react-icons/fa'

const Nav = () => {
  return (
    <main>
       <div className="container mx-auto">
        <nav className='flex justify-between items-center px-4 w-full '>
          {/* Top nav */}
          <div className="md:flex divide-x-2 p-3 space-x-3 content-center place-items-end">
            <div>
             <h3>John Carloz</h3>
            </div>
            <br />
            <div className="pl-5">
              <p>Photographer portfolio</p>
            </div>
          </div>
    
          <div className='hidden md:flex'>
            <a href="https://www.facebook.com/profile.php?id=100008989771011" className="p-2 hover:text-blue-700"><FaFacebookF/></a>
            <a href="https://instagram.com/_royal.lens.ke?utm_media=copy_link" className="p-2 hover:text-indigo-700"><FaInstagram/></a>
            <a href="https://wa.me/+254111522255" className="p-2 hover:text-green-600"><FaWhatsapp/></a>
            <a href="http://royallens.vercel.app/" className="p-2 hover:text-indigo-700"><VscGlobe/></a>
          </div>
        </nav>
      </div>
    </main>
  )
}

export default Nav
