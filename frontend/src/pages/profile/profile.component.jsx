import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import ProfileBookingsCard from "../../components/profile-bookings-card/profile-bookings-card.component";

import { BookingsDiv } from "./profile.styles";

const Profile = () => {
  const history = useNavigate();
  const [user, setUser] = useState("");
  const [bookings, setBookings] = useState([]);
  const [display, setDisplay] = useState(false);

  const getProfile = async () => {
    const res = await axios.get("http://localhost:8000/api/accounts/users/1");
    console.log(res.data.list_booking);
    setUser(res.data);
    setBookings(res.data.list_booking);
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="container mx-auto px-4 mt-96">
      <div className="relative flex flex-col min-w-0 break-words bg-gray-900 border-2 border-violet-400 w-full mb-6 shadow-xl rounded-lg -mt-64">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
              <div className="relative">
                <img
                  src={`http://localhost:8000${user.profile_picture}`}
                  alt="profile picture"
                  className="shadow-xl rounded-full h-auto align-middle border-none relative -m-16 -ml-3 lg:-ml-3 mb-2"
                />
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right mt-2">
              <div className="py-6 px-3 mt-32 sm:mt-0">
                <button
                  onClick={() => history("/residences")}
                  className="bg-violet-400 active:bg-violet-500 hover:bg-violet-500 uppercase text-slate-100 font-bold horder:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                >
                  New Booking
                </button>
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4 lg:order-1">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center ">
                  <span className="text-xl font-bold block uppercase tracking-wide text-slate-300">
                    22
                  </span>
                  <span className="text-sm text-slate-400">Friends</span>
                </div>
                <div className="mr-4 p-3 text-center ">
                  <span className="text-xl font-bold block uppercase tracking-wide text-slate-300">
                    10
                  </span>
                  <span className="text-sm text-slate-400">Photos</span>
                </div>
                <div className="lg:mr-4 p-3 text-center ">
                  <span className="text-xl font-bold block uppercase tracking-wide text-slate-300">
                    89
                  </span>
                  <span className="text-sm text-slate-400">Comments</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-4xl font-semibold leading-normal mb-2 text-slate-200 ">
              {user.first_name} {user.last_name}
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-slate-300 font-bold uppercase">
              <b>Username: </b>
              {user.username}
            </div>
            <div className="mb-2 text-slate-200 mt-2">{user.email}</div>
          </div>
          <div className="mt-10 py-10 border-t border-slate-600 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4 ">
                <p className="mb-4 text-lg leading-relaxed text-slate-200">
                  An artist of considerable range, Jenna the name taken by
                  Melbourne-raised, Brooklyn-based Nick Murphy writes, performs
                  and records all of his own music, giving it a warm, intimate
                  feel with a solid groove structure. An artist of considerable
                  range.
                </p>
                <button
                  onClick={() => setDisplay(!display)}
                  className="font-normal text-violet-500"
                >
                  Show Bookings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BookingsDiv display={display.toString()}>
        <div className="bg-gray-900 border-2 border-violet-400 w-full rounded-lg mb-2">
          <h1 className="text-4xl font-semibold leading-normal mb-2 text-slate-200 text-center">
            My Bookings
          </h1>
          {bookings.length ? (
            bookings.map((item) => (
              <ProfileBookingsCard key={item.id} info={item} />
            ))
          ) : (
            <h1 className="text-center text-gray-800 font-bold text-7xl p-4">
              YOU DON'T HAVE ANY BOOKINGS
            </h1>
          )}
        </div>
      </BookingsDiv>
    </div>
  );
};

export default Profile;
