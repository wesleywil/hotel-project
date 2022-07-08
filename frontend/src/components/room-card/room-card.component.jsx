import React from "react";

const RoomCard = ({item})=>{

    const handleTotal = (item)=>{
        console.log(item.extra_price)
        let total = 0.00;
        let obj = {};

        if(item.vip === true){
            total = (item.daily_price*10 + item.extra_price*10)/10;
            document.getElementById('total').innerHTML = `$ ${total}`
            console.log('total with VIP: ', total);
            
            obj = {
                id:item.id,
                room_id:item.room_id,
                vip:item.vip,
                room_bed:item.room_bed,
                daily_price:item.daily_price,
                extra_price:item.extra_price,
                total:total,
            }
            localStorage.setItem('roomObj', JSON.stringify(obj));

        }else{
            total = (item.daily_price*10)/10;
            document.getElementById('total').innerHTML = `$ ${total}`
            console.log('total: ', total);
            
            obj = {
                id:item.id,
                room_id:item.room_id,
                vip:item.vip,
                room_bed:item.room_bed,
                daily_price:item.daily_price,
                extra_price:item.extra_price,
                total:total,
            }
            localStorage.setItem('roomObj', JSON.stringify(obj));
        }

    }

    const filterVacancy = (i)=>{
        return i.vacancy === true;
    }

    return(
        <>
            {
                item.rooms.filter(filterVacancy).map((item)=>(
                    <div 
                        key={item.id} 
                        className="p-2 rounded-xl flex flex-col w-11/12 bg-violet-500 text-slate-100"
                        style={{width:'265px'}}
                    >
                        <span className="border-b-4 border-violet-800 rounded-xl w-full p-2"><b>Room:</b> {item.room_id}</span>
                        <p 
                            className="border-b-4 border-violet-800 rounded-xl w-full p-2 overflow-y-auto h-48" 
                            style={{overflowWrap: 'break-word'}}
                        >
                            <b>Description: </b>
                        {item.decription}</p>
                        <span className="border-b-4 border-violet-800 rounded-xl w-full p-2"><b>Vip:</b> {item.vip === true ? 'YES' : 'NO'}</span>
                        <span className="border-b-4 border-violet-800 rounded-xl w-full p-2"><b>Bed:</b> {item.room_bed}</span>
                        <span className="border-b-4 border-violet-800 rounded-xl w-full p-2"><b>Daily:</b> ${item.daily_price}</span>
                        <span className="border-b-4 border-violet-800 rounded-xl w-full p-2"><b>Extra:</b> ${item.vip === true ? item.extra_price : '0.00'}</span>
                        <button onClick={()=>handleTotal(item)}  className="mt-2 text-slate-900 hover:text-slate-300 text-xl border-2 border-slate-900 hover:bg-violet-600 rounded-xl font-bold">Select</button>
                    </div>
                ))
            }
        </>
    )
}

export default RoomCard;