import React from 'react'
import Profilepic from '../images/Profilepic.jpg'


const Introduction = () =>{
    return (
        <>
            <div>
                <section class="text-gray-400 bg-gray-900 body-font">
                    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Hi ,I'am Rohan
                        </h1>
                        <p class="mb-8 leading-relaxed">I am a software engineer with experience in media and tech industry. I enjoy machine learning, web programming and everything about Software Development. I believe that data and software can be used to make better decisions. My core competencies includes building applications using Python,Java,JavaScript and their related frameworks.</p>
                        <div class="flex justify-center">
                            {/* <button class="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Button</button>
                            <button class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Button</button> */}
                        </div>
                        </div>
                        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            <img class="object-cover object-center rounded" alt="hero" src={Profilepic}></img>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Introduction