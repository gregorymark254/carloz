import React from 'react'

const Contact = () => {
  return (
    <main>
      <div className="bg-[#151515] text-white min-h-screen">
        <div className="container mx-auto p-4">
            <h1 className="text-center py-6 mb-4">CONTACTS</h1>
            <div className="md:flex">
                <div className="w-full space-y-3 p-4">
                    <h3>Please, contact me in any way convenient for you!</h3>
                    <p>I’d love to hear from you, so if you like the shots I take, please, share your thoughts with me!
                        It’s striving to know of your impressions and would appreciate a healthy critics! Be sure to contact
                        me if you’re looking for a professional photographer!
                    </p>
                    <br />

                    <p>(+254) 798551778</p>
                    <p>Johncarloz@gmail.com</p>
                    <p>Nairobi, Kenya.</p>
                </div>
                <div className="w-full p-4">
                <form>
                    <div className="grid space-y-5">
                        <label htmlFor="name">
                            <input 
                                type="text" 
                                placeHolder="Name:"
                                required
                                className="px-2 py-4 w-full bg-[#7A4069] placeholder:text-slate-500 placeholder:font-bold"
                            />
                        </label>
                        <label htmlFor="email">
                            <input 
                                type="email" 
                                placeHolder="Email Address:"
                                required
                                className="px-2 py-4 w-full bg-[#7A4069] placeholder:text-slate-500  placeholder:font-bold"
                            />
                        </label>
                        <label htmlFor="number">
                            <input 
                                type="text" 
                                placeHolder="Phone Number:"
                                required
                                className="px-2 py-4 w-full bg-[#7A4069] placeholder:text-slate-500  placeholder:font-bold"
                            />
                        </label>
                        <label htmlFor="message">
                            <textarea 
                                name="message" 
                                placeHolder="Message:"
                                required
                                className="px-2 py-4 w-full placeholder:text-slate-500 placeholder:font-bold"
                                cols="30" rows="5">  
                            </textarea>
                        </label>
                        <button className="bg-[#E0144C] hover:bg-[#F24A72] text-white py-2">Send Message</button>
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
