import React from 'react'

const About = () => {
  return (
    <main>
      <div className="bg-[#151515] text-white min-h-screen">
        <div className="container mx-auto p-4">
            <div>
                <h1 className="text-center py-6"><b>ABOUT ME</b></h1>
                <div className="md:flex">
                    <div className="w-full p-4">
                        <img className="rounded-full" src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                    </div>
                    <div className="w-full space-y-8 mt-12 p-4">
                        <div>
                            <h4><b>My Directions:</b></h4>
                            <p>I have a proactive attitude when it comes to my work. There are lots of things that inspire me,
                                among which there is travelling, jazz music and new discoveries! In my free time I enjoy kayaking and climbing, 
                                and there are still so many things to experience for me.
                            </p>
                        </div>
                        <div>
                            <h4><b>My Archievements:</b></h4>                 
                            <p>I am a winner of Urban Photo Awards ‘17 contest, as well as International Photography Awards.
                                I also took shots for National Geographic, as I enjoy traveling in my free time. Today I’m taking part
                                in the Nature Photo Competition ‘17.
                            </p>
                        </div>
                       <div className="mt-8 pt-4">
                            <a className="bg-[#E0144C] py-3 px-6 hover:bg-[#e95e83]" href="https://gregorymark.netlify.app/">Learn more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </main>
  )
}

export default About
