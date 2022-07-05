import React,{useState, useEffect} from "react";
import axios from 'axios';


import ShowcaseMain from "../showcase-components/showcase-main.component";
import ShowcaseSecondary from "../showcase-components/showcase-secondary.component";

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

    return(
        <>
        {
            (
            randomInfo.length ?
                
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto flex flex-wrap">
                        <div className="lg:w-2/3 mx-auto">
                            <ShowcaseMain item={shiftRandomInfo}/>

                            <div className="flex flex-wrap -mx-2">
                                {
                                    randomInfo.map((item)=>(
                                        <ShowcaseSecondary key={item.id} item={item}/>
                                    ))
                                }


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