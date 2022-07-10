import axios from "axios";
import React, { useState, useEffect } from "react";

import FormComponent from "../form/form.component";
import ListRooms from "../../list-rooms/list-rooms.component";

const EditPostComponent = ({ id }) => {
  const [post, setPost] = useState({});
  const [pRooms, setProoms] = useState([]);
  const [view, setView] = useState(<FormComponent />);
  console.log("ID RECEIVED: ", id);

  const getResidenceById = async () => {
    const res = await axios.get(
      `http://localhost:8000/api/main/residences/${id}`
    );
    console.log(res.data);
    setPost(res.data);
    setProoms(res.data.rooms);
    setView(<FormComponent post={res.data} />);
  };

  useEffect(() => {
    getResidenceById();
  }, []);

  return (
    <div>
      <h1 className="text-center border-b-4 text-slate-100 font-semibold uppercase  text-2xl mb-2 mx-auto">
        Edit Post
      </h1>
      <div className="p-2 xl:flex justify-center gap-2 border-2 rounded-xl">
        <div className="p-2 flex flex-col justify-center xl:w-1/2">
          <img className="rounded-full" src={post.main_picture} />
          <span className="m-2 text-xl text-slate-100 font-bold text-center">
            {post.title}
          </span>
          <button
            onClick={() => setView(<ListRooms prooms={pRooms} />)}
            className="text-red-400 hover:text-red-600  border-b-2 border-red-400 hover:border-red-600 w-1/2 mx-auto mb-2"
          >
            List Rooms
          </button>
          <button className="text-green-400 hover:text-green-600 border-b-2 border-green-400 hover:border-green-600 w-1/2 mx-auto mb-2">
            New Room
          </button>
        </div>
        <div className="p-2 xl:w-1/2">
          {/* <FormComponent post={post} /> */}
          {view}
        </div>
      </div>
    </div>
  );
};

export default EditPostComponent;
