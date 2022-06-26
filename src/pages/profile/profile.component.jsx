import React from "react";


const Profile = () =>{

    return(
        <div className="container mx-auto px-4 mt-96">
            <div className="relative flex flex-col min-w-0 break-words bg-gray-900 border-2 border-violet-400 w-full mb-6 shadow-xl rounded-lg -mt-64">
                <div className="px-6">
                    <div className="flex flex-wrap justify-center">
                            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                <div className="relative">
                                    <img src="https://dummyimage.com/300x300" alt="profile picture" className="shadow-xl rounded-full h-auto align-middle border-none relative -m-16 -ml-3 lg:-ml-3 mb-2"/>
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right mt-2">
                                <div className="py-6 px-3 mt-32 sm:mt-0">
                                    <button className="bg-violet-400 active:bg-violet-500 uppercase text-slate-800 font-bold horder:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150">Connect</button>
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                    <div className="mr-4 p-3 text-center ">
                                        <span className="text-xl font-bold block uppercase tracking-wide text-slate-300">22</span>
                                        <span className="text-sm text-slate-400">Friends</span>
                                    </div>
                                    <div className="mr-4 p-3 text-center ">
                                        <span className="text-xl font-bold block uppercase tracking-wide text-slate-300">10</span>
                                        <span className="text-sm text-slate-400">Photos</span>
                                    </div>
                                    <div className="lg:mr-4 p-3 text-center ">
                                        <span className="text-xl font-bold block uppercase tracking-wide text-slate-300">89</span>
                                        <span className="text-sm text-slate-400">Comments</span>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="text-center mt-12">
                        <h3 className="text-4xl font-semibold leading-normal mb-2 text-slate-200 ">Jenna Stones</h3>
                        <div className="text-sm leading-normal mt-0 mb-2 text-slate-300 font-bold uppercase">
                            <i className="fas fa-map-marker-alt mr-2 text-lg text-slate-200"></i>
                                Los Angeles, California
                        </div>
                        <div className="mb-2 text-slate-200 mt-10">
                            <i className="fas fa-briefcase mr-2 text-lg text-slate-200"></i>
                                "Solution Manager - Creative Tim Officer"
                        </div>
                        <div className="mb-2 text-slate-200">
                            <i className="fas fa-university mr-2 text-lg text-slate-200"></i>
                                "University of Computer Science"
                        </div>
                    </div> 
                    <div className="mt-10 py-10 border-t border-slate-600 text-center">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full lg:w-9/12 px-4 ">
                            <p className="mb-4 text-lg leading-relaxed text-slate-200">An artist of considerable range, Jenna the name taken by Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</p>
                            <a href="#" className="font-normal text-violet-500">Show more</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Profile;