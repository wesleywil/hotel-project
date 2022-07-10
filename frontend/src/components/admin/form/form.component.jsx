import axios from "axios";
import React, { useState, useEffect, createRef } from "react";

const FormComponent = ({ post }) => {
  const [res, setRes] = useState({
    main_picture: "",
    title: "",
    location: "",
    address: "",
    description: "",
    room_quantity: "",
    type: "",
    vacancy: false,
    rooms: "",
  });

  useEffect(() => {
    if (typeof post !== "undefined") {
      setRes(post);
    } else {
      console.log("UNDEFINED");
    }
  });

  const handleSubmit = (e) => {
    //e.preventDefault();
    console.log("SUBMITED", e.target.title.value);
    const picture = document.getElementById("main_picture");
    if (typeof post !== "undefined") {
      e.preventDefault();

      if (typeof picture.files[0] !== "undefined") {
        axios.put(
          `http://localhost:8000/api/main/residences/${post.id}?format=json`,
          {
            main_picture: picture.files[0],
            title: e.target.title.value,
            location: e.target.location.value,
            address: e.target.address.value,
            description: e.target.description.value,
            room_quantity: e.target.room_quantity.value,
            vacancy: e.target.vacany.value,
            type: e.target.type.value,
            rooms: post.rooms,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      } else {
        axios.put(
          `http://localhost:8000/api/main/residences/${post.id}?format=json`,
          {
            title: e.target.title.value,
            location: e.target.location.value,
            address: e.target.address.value,
            description: e.target.description.value,
            room_quantity: e.target.room_quantity.value,
            vacancy: e.target.vacany.value,
            type: e.target.type.value,
            rooms: post.rooms,
          }
        );
      }
    } else {
      e.preventDefault();
      axios.post(
        "http://localhost:8000/api/main/residences/",
        {
          main_picture: picture.files[0],
          title: e.target.title.value,
          location: e.target.location.value,
          address: e.target.address.value,
          description: e.target.description.value,
          room_quantity: e.target.room_quantity.value,
          vacancy: e.target.vacany.value,
          type: e.target.type.value,
          rooms: [],
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    }
  };

  return (
    <form
      className="text-xl"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      <span className="ml-2 text-slate-100">Post Image</span>
      <input
        id="main_picture"
        className="w-full block w-full text-sm text-slate-100 rounded-lg border border-gray-300 cursor-pointer focus:outline-none"
        type="file"
        accept="image/*"
        defaultValue={res.main_picture}
      />
      <span className="ml-2 text-slate-100">Post Title</span>
      <input
        id="title"
        className="w-full rounded-lg bg-slate-300 font-semibold "
        type="text"
        placeholder="Title"
        defaultValue={res.title}
      />
      <span className="ml-2 text-slate-100">Location</span>
      <input
        id="location"
        className="w-full rounded-lg bg-slate-300 font-semibold "
        type="text"
        placeholder="Place Location"
        defaultValue={res.location}
      />
      <span className="ml-2 text-slate-100">Adress</span>
      <input
        id="address"
        className="w-full rounded-lg bg-slate-300 font-semibold "
        type="text"
        placeholder="Place Address"
        defaultValue={res.address}
      />
      <span className="ml-2 text-slate-100">Description</span>
      <textarea
        id="description"
        className="w-full rounded-lg bg-slate-300 font-semibold "
        defaultValue={res.description}
        placeholder="Description"
      ></textarea>
      <span className="ml-2 text-slate-100">Room Quantity</span>
      <input
        id="room_quantity"
        className="w-full rounded-lg bg-slate-300 font-semibold "
        type="number"
        placeholder="Room Quantity"
        defaultValue={res.room_quantity}
      />
      <div className="form-check mt-2 ml-2">
        <input
          className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="checkbox"
          defaultChecked={res.vacancy}
          id="vacancy"
        />
        <label
          className="form-check-label inline-block text-slate-100"
          htmlFor="vacancy"
        >
          Open/Closed
        </label>
      </div>

      <span className="ml-2 text-slate-100">Type</span>
      <select
        id="type"
        className="w-full rounded-lg focus:border-violet-300 text-slate-900 bg-slate-300 font-semibold"
        defaultValue={"0"}
      >
        <option
          disabled
          value="0"
          className="bg-slate-700 text-slate-500 font-semibold"
        >
          Select Residence Type
        </option>
        <option
          value="Cabin"
          className="bg-slate-500 text-slate-100 font-semibold"
        >
          Cabin
        </option>
        <option
          value="Hotel"
          className="bg-slate-500 text-slate-100 font-semibold"
        >
          Hotel
        </option>
      </select>
      <div className="flex justify-center mt-2 gap-2">
        <button className="bg-green-600 hover:bg-green-700 text-slate-100 font-semibold px-12 text-2xl rounded-3xl">
          Save
        </button>
        <button
          type="button"
          className="bg-red-600 hover:bg-red-700 text-slate-100 font-semibold px-12 text-2xl rounded-3xl"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default FormComponent;
