import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
        <div className="flex flex-col justify-center items-center w-full h-full">
           <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
            <div className="sm:text-right pb-8 pl-4">
                <p className="text-4xl font-bold inline border-b-4 border-pink-600">About</p>
            </div>
            <div></div>   
            </div> 
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                <div className= "sm:text-right text-4xl font-bold">
<<<<<<< HEAD
                    <p>Hi. I am Rey Genosa. A Junior Developer. Nice meeting you here. Please take a look around</p>
=======
                    <p>Hi. I am Rey Genosa. Nice meeting you here. Please take a look around</p>
>>>>>>> 30f3a5853782203a8a077f8a2bcec16ee8bd40d1
                </div>
                <div>
                    <p>
                        I am passionate in building highly, maintainable, testable, scalable, and efficient software systems ans web pages. I never contented and always willing to explore and expand to new technologies.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About