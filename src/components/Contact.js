import React from 'react'
import { MdContacts, MdMarkEmailRead, MdAddLocationAlt } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";

const Contact = () => {
  return (
    <main>
      <div className="bg-[#151515] text-white min-h-screen">
        <div className="container mx-auto p-4">
            <h1 className="text-center py-6 mb-4"><b>CONTACTS</b></h1>
            <div className="md:flex">
                <div className="w-full space-y-3 p-4">
                    <h3>Please, contact me in any way convenient for you!</h3>
                    <p className="text-neutral-400">I’d love to hear from you, so if you like the shots I take, please, share your thoughts with me!
                        It’s striving to know of your impressions and would appreciate a healthy critics! Be sure to contact
                        me if you’re looking for a professional photographer!
                    </p>
                    <br />

                    <div className="text-[#E0144C]">
                        <div className="flex items-center space-x-2 hover:text-white">
                            <MdContacts/><h4><a href="tel:+254111522255">(+254) 111 522 255</a></h4>
                        </div>
                        <div className="flex items-center space-x-2 hover:text-white">
                            <CiGlobe/><a href="www.royallens.com"><b>Website/www.royallens.com</b></a>
                        </div>
                        <div className="flex items-center space-x-2 hover:text-white">
                            <MdMarkEmailRead/><h4><a href="mailto:odhiambojohncarloz81@gmail.com"><b>Email/odhiambojohncarloz81@gmail.com</b></a></h4>
                        </div>
                        <div className="flex items-center space-x-2 hover:text-white">
                            <MdAddLocationAlt/><h4><b>Location/Nairobi, Kenya.</b></h4>
                        </div>
                    </div>
                </div>
                <div className="w-full p-4">
                <form action="mailto:gregorymark254@gmail.com" method="post">
                    <div className="grid space-y-5">
                        <label htmlFor="name">
                            <input 
                                type="text" 
                                placeholder="Name:"
                                required
                                id="name"
                                name="name"
                                autocomplete="off"
                                className="px-2 py-4 w-full bg-[#7A4069] focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 placeholder:text-slate-500 placeholder:font-bold"
                            />
                        </label>
                        <label htmlFor="email">
                            <input 
                                type="email" 
                                placeholder="Email Address:"
                                required
                                id="email"
                                name="email"
                                autocomplete="off"
                                className="px-2 py-4 w-full bg-[#7A4069] focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 placeholder:text-slate-500  placeholder:font-bold"
                            />
                        </label>
                        <label htmlFor="number">
                            <input 
                                type="text" 
                                placeholder="Phone Number:"
                                required
                                id="number"
                                name="number"
                                autocomplete="off"
                                className="px-2 py-4 w-full bg-[#7A4069] focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 placeholder:text-slate-500  placeholder:font-bold"
                            />
                        </label>
                        <label htmlFor="message">
                            <textarea 
                                name="message" 
                                placeholder="Message:"
                                required
                                autocomplete="off"
                                className="px-2 py-4 w-full focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-black placeholder:text-slate-500 placeholder:font-bold"
                                cols="30" rows="5">  
                            </textarea>
                        </label>
                        <button type="submit" className="bg-[#E0144C] hover:bg-[#F24A72] text-white py-3">Send Message</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
      </div>
    </main>
  )
}

export default Contact
