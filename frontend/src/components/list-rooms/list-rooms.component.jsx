import axios from "axios";
import { useState, useEffect } from "react";

const RoomCard = ({ item }) => {
  return (
    <div className="flex relative">
      <img
        src="https://dummyimage.com/280x120"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-slate-800 opacity-0 hover:opacity-100 ease-in-out duration-500">
        <h1 className="text-slate-100">{item.residence}</h1>
        <h1 className="text-slate-100">{item.room_id}</h1>
        <h1 className="text-slate-100">{item.room_bed}</h1>
        <h1 className="text-slate-100">{item.daily_price}</h1>
        <h1 className="text-slate-100">{item.vip ? "True" : "False"}</h1>
        <h1 className="text-slate-100">{item.extra_price}</h1>
        <h1 className="text-slate-100">
          {item.vacancy ? "Vacancy" : "Closed"}
        </h1>
        <div className="border-2 p-2 text-xl ">
          <button className="text-green-500 mr-2 font-semibold  hover:underline ">
            Update
          </button>
          <button className="text-red-500 mr-2 font-semibold hover:underline">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

const ListRooms = ({ prooms }) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-center text-slate-100 text-xl uppercase font-semibold">
        Rooms
      </h1>
      <div className="border-2 flex flex-col gap-2 p-2">
        {prooms.map((item) => (
          <RoomCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ListRooms;
