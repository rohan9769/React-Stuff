import React from 'react'
import Profilepic from '../images/Profilepic.jpg'

const Intro = () => {
    return (
        <div>
            <section class="text-gray-400 bg-gray-900 body-font">
                <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={Profilepic}></img>
                    <div class="text-center lg:w-2/3 w-full">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Hi ,I'am Rohan</h1>
                        <p class="text-2xl leading-relaxed mb-8">I am a software engineer with experience in media and tech industry. I enjoy machine learning, web programming and everything about Software Development. I believe that data and software can be used to make better decisions. My core competencies includes building applications using Python,Java,JavaScript and their related frameworks.</p>
                    </div>
                </div>
            </section> 
        </div>
    )
}

export default Intro
