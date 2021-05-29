import React from 'react'

const Skills = () => {
    return (
        <>
        <div>
            {/* <section class="text-gray-400 bg-gray-900 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                        <h1 className="text-5xl font-normal leading-normal mt-0 mb-2 text-white">Proficiency</h1>
                    </div>
                </div>
            </section> */}
            <section class="text-gray-400 bg-gray-900 body-font">
                    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Technical Proficiences</h1>
                            <div className="relative pt-1">
                                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
                                    <div style={{ width: "30%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
                                </div>
                        </div>
                        </div>
                    </div>
            </section>
        </div>
        </>
    )
}

export default Skills
