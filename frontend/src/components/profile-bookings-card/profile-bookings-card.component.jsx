import React from "react";

const ProfileBookingsCard = ({ info }) => {
  return (
    <div className="flex p-2 justify-center">
      <div className="flex flex-col bg-violet-100 text-gray-900 font-bold rounded-3xl p-2 border-2 border-slate-400">
        <span>Reserve is {info.open === true ? "Open" : "Closed"}</span>
        <span>
          Start: {info.start_booking} End: {info.end_booking}
        </span>
        <span>
          Hotel/Cabin -{" "}
          <a href="#" className="text-blue-800 hover:text-blue-600 px-1">
            Link Hotel
          </a>
        </span>
        <span>Room : {info.room.room_id}</span>
        <button className="bg-gray-900 hover:bg-gray-800 text-slate-100 hover:text-slate-200 w-1/2 mx-auto rounded-xl">
          Visit Booking
        </button>
      </div>
    </div>
  );
};

export default ProfileBookingsCard;
