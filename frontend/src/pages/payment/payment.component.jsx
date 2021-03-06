import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";

const Payment = () => {
  const history = useNavigate();
  const [qtd, setQtd] = useState(1);
  let obj = JSON.parse(localStorage.getItem("roomObj"));
  const [finalPrice, setFinalPrice] = useState(0.0);
  const handleQtd = (action) => {
    if (action === "add") {
      setQtd(qtd + 1);
    } else {
      if (qtd >= 1) {
        setQtd(qtd - 1);
      }
    }
  };

  useEffect(() => {
    if (obj) {
      let total = 0.0;
      if (obj.vip === true) {
        total = ((obj.daily_price * 10 + obj.extra_price * 10) / 10) * qtd;
        setFinalPrice(total);
      } else {
        total = obj.daily_price * qtd;
        setFinalPrice(total);
      }
    }
  });

  const handleFinal = () => {
    const booking = {
      user: 1,
      room: obj.id,
      days: qtd,
      open: true,
    };

    axios
      .post("http://localhost:8000/api/accounts/bookings/", booking)
      .then((res) => {
        console.log("POSTING --> ", res);
        axios
          .get(`http://localhost:8000/api/main/rooms/${obj.id}`)
          .then((res) => {
            axios
              .put(`http://localhost:8000/api/main/rooms/${obj.id}`, {
                residence: res.data.residence,
                decription: res.data.decription,
                room_id: res.data.room_id,
                daily_price: res.data.daily_price,
                room_bed: res.data.room_bed,
                vip: res.data.vip,
                extra_price: res.data.extra_price,
                vacancy: false,
              })
              .then(() => {
                console.log("Updated Successfully!");
                localStorage.removeItem("roomObj");
                history("/residences");
              });
          });
      });

    console.log("BOOKING ORDER==> ", booking);
  };

  const handleClean = () => {
    let text = "Are you sure you want to cancel the booking?";
    if (confirm(text) == true) {
      localStorage.removeItem("roomObj");
      history("/residences");
    } else {
      text = "You canceled!";
    }
  };

  if (!localStorage.getItem("roomObj")) {
    return <Navigate to="/residences" replace={true} />;
  }
  return (
    <div className="container lg:w-1/3 mx-auto mt-20 bg-black border-2 border-violet-400 rounded-2xl overflow-hidden">
      <h1 className="text-center text-4xl text-slate-900 font-bold uppercase  bg-violet-400">
        Payment
      </h1>
      <div className="container mt-2 p-2 flex flex-col justify-center items-center">
        <h1 className="text-violet-300 text-center text-3xl">{obj.room_id}</h1>
        <div className="flex gap-2">
          <img
            className="rounded-3xl text-centter mt-2"
            src="http://dummyimage.com/300x300"
          />
          <div className="w-80 self-center	">
            <div className="flex border-t border-slate-200 py-2">
              <span className="text-violet-500">Bed</span>
              <span className="ml-auto text-violet-300">{obj.room_bed}</span>
            </div>
            <div className="flex border-t border-slate-200 py-2">
              <span className="text-violet-500">Daily Price</span>
              <span className="ml-auto text-violet-300">
                ${obj.daily_price}
              </span>
            </div>
            <div className="flex border-t border-slate-200 py-2">
              <span className="text-violet-500">Vip</span>
              <span className="ml-auto text-violet-300">
                {obj.vip === true ? "VIP ROOM" : "NO"}
              </span>
            </div>
            <div className="flex border-t border-slate-200 py-2">
              <span className="text-violet-500">Extra Price</span>
              <span className="ml-auto text-violet-300">
                {obj.vip === true ? `${obj.extra_price}` : "R$ 0.00"}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-2 p-2 border-2 border-violet-200 rounded-3xl  flex justify-between w-10/12">
          <span className="title-font self-center flex font-medium text-2xl text-violet-400">
            <div className="mr-5 mt-1">
              <button className="flex" onClick={() => handleClean()}>
                <FaTrashAlt />
              </button>
            </div>
            ${finalPrice}
          </span>

          <div className="flex self-center items-center">
            <button
              className="rounded-full p-1 font-bold text-2xl text-slate-100 bg-violet-500 hover:bg-violet-600"
              onClick={() => handleQtd("sub")}
            >
              &#129080;
            </button>
            <span className="text-slate-100 m-2 text-3xl">{qtd}</span>
            <button
              className="rounded-full p-1 font-bold text-2xl text-slate-100 bg-violet-500 hover:bg-violet-600"
              onClick={() => handleQtd("add")}
            >
              &#129082;
            </button>
          </div>
          <button
            onClick={() => handleFinal()}
            className="self-center rounded-xl py-1 px-3 bg-violet-500 hover:bg-violet-600 text-slate-100 font-bold text-xl "
          >
            Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
