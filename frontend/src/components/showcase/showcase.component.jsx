import React,{useState, useEffect} from "react";
import axios from 'axios';

const ShowCase = ()=>{
    const [randomInfo, setRandomInfo] = useState([]);
    const [shiftRandomInfo, setShiftRandomInfo] = useState({
        'address':'',
        'description':'',
        'id':'',
        'location':'',
        'main_picture':'',
        'room_quantity':'',
        'rooms':[],
        'title':'',
        'type':'',
    });

    const getRandom3 = async()=>{
        const res = await axios.get('http://localhost:8000/api/main/residences/all/random')
        console.log(res.data)
        if(res.data.status === '204'){
            console.log('error')
            setRandomInfo([]);
        }else{
            console.log('nice')
            setRandomInfo(res.data)
            setShiftRandomInfo(res.data.shift())
        }
    }

    useEffect(()=>{
        getRandom3()
        
    },[])

    // Will need to use the shift function in the array to get the first item of our showcase

    return(
        <>
        {
            (
            randomInfo.length ?
                
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto flex flex-wrap">
                        <div className="lg:w-2/3 mx-auto">

                            <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
                                <img alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src={shiftRandomInfo.main_picture}/>
                                <div className="text-center relative z-10 w-full">
                                <h2 className="text-2xl text-gray-900 font-medium title-font mb-2">{shiftRandomInfo.title}</h2>
                                <p className="leading-relaxed">{shiftRandomInfo.description}</p>
                                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                                </div>
                            </div>

                        <div className="flex flex-wrap -mx-2">
                            {
                                randomInfo.map((item)=>(
                                    <div className="px-2 w-1/2" key={item.id}>
                                    <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                                        <img alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src={item.main_picture}/>
                                        <div className="text-center relative z-10 w-full">
                                        <h2 className="text-xl text-gray-900 font-medium title-font mb-2">{item.title}</h2>
                                        <p className="leading-relaxed">{item.description}</p>
                                        <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                        </div>
                                    </div>
                                    </div>
                                ))
                            }


                            {/* <div className="px-2 w-1/2">
                            <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                                <img alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="https://dummyimage.com/542x420"/>
                                <div className="text-center relative z-10 w-full">
                                <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                                <p className="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
                                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                                </div>
                            </div>
                            </div> */}

                        </div>
                        </div>
                    </div>
                </section>
            :
                <div className="container border-2 mx-auto p-2 mt-10">
                    <h1 className="text-white text-6xl text-center">NO SHOW CASE</h1>
                </div>
                
            )
        }
        </>
        
    )
}

export default ShowCase;