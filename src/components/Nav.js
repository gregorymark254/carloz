import React from 'react'
// import {Link} from 'react-router-dom'
import {FaFacebookF,FaTwitter,FaInstagram} from 'react-icons/fa'

const Nav = () => {
    // const [navIsShown, setnavIsShown] = useState(false);

    // const toggleNavIsShown = () => {
    //     setnavIsShown((navIsShown) => !navIsShown);
    // };

  return (
    <main>
       <div className="container mx-auto">
        <nav className='flex justify-between items-center px-4 w-full '>
          {/* Top nav */}
          <div className="md:flex divide-x-2 p-3 space-x-3 content-center place-items-end">
            <div>
              {/* <img src="https://ld-wp.template-help.com/wordpress_prod-12426/wp-content/themes/zoomix/assets/images/footer-logo.png" alt="" />
             */}
             <h3>John Carloz</h3>
            </div>
            <br />
            <div className="pl-5">
              <p>Photographer portfolio</p>
            </div>
          </div>
          {/* <ul className='hidden md:flex'>
            <li className="p-4 hover:text-blue-700">
              <a href="/">Home</a>
            </li>
            <li className="p-4 hover:text-blue-700">
              <a href="/about">About</a>
            </li>
            <li className="p-4 hover:text-blue-700">
              <a href="/programs">Programs</a>
            </li>
            <li className="p-4 hover:text-blue-700"> 
              <a href="/blog">Blogs</a>
            </li>
            <li className="p-4 hover:text-blue-700">
              <a href="/contact">Contact</a>
            </li>
          </ul> */}
          <div className='hidden md:flex'>
            <a href="/" className="p-2 hover:text-blue-700"><FaFacebookF/></a>
            <a href="/" className="p-2 hover:text-blue-700"><FaTwitter/></a>
            <a href="/" className="p-2 hover:text-indigo-700"><FaInstagram/></a>
          </div>
        </nav>
      </div>
    </main>
  )
}

export default Nav

// {/* Responsive Nav
//           {!navIsShown && (
//             <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6 md:hidden' onClick={toggleNavIsShown} >
//               <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25' />
//             </svg>
           
//           )} */}
        //   {navIsShown && (
        //     <div className='md:hidden absolute z-10 top-0 left-0 w-full bg-gray-100/90 text-black px-4 py-6'>
        //       <div className='flex justify-end border border-b-2 border-b-black'>
        //         <svg xmlns='http://www.w3.org/2000/svg'fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6' onClick={toggleNavIsShown} >
        //           <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12'/>
        //         </svg>
        //       </div>
        //       <ul className=' mb-4'>
        //         <li className="p-4 hover:text-blue-700">
        //           <a href="/">Home</a>
        //         </li>
        //         <li className="p-4 hover:text-blue-700">
        //           <a href="/about">About</a>
        //         </li>
        //         <li className="p-4 hover:text-blue-700">
        //           <a href="/programs">Programs</a>
        //         </li>
        //         <li className="p-4 hover:text-blue-700"> 
        //           <a href="/blog">Blogs</a>
        //         </li>
        //         <li className="p-4 hover:text-blue-700">
        //           <a href="/contact">Contact</a>
        //         </li>
        //       </ul>
        //       <div className="flex">
        //         {/* <Link to="" className="p-2 hover:text-blue-700"><FaFacebookF/></Link>
        //         <Link to="" className="p-2 hover:text-blue-700"><FaTwitter/></Link>
        //         <Link to="" className="p-2 hover:text-red-700"><FaYoutube/></Link>
        //         <Link to="" className="p-2 hover:text-indigo-700"><FaInstagram/></Link> */}
        //       </div>
        //     </div>
        //   )}