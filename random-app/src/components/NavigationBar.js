import React from 'react'

const NavigationBar = () =>{
    return(
        <>
            <div>
                <header class="text-gray-400 bg-gray-900 body-font">
                    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                        <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <span class="ml-3 text-xl">Rohan S Nayak</span>
                        </a>
                        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <a class="mr-5 hover:text-white" href="#">Skills</a>
                        <a class="mr-5 hover:text-white" href="#">Work Experience</a>
                        <a class="mr-5 hover:text-white" href="#">Third Link</a>
                        <a class="mr-5 hover:text-white" href="#">Fourth Link</a>
                        </nav>
                        <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Button
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                        </button>
                    </div>
                </header>
            </div>
        </>
    )
}

export default NavigationBar