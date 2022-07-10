import React, { useState } from "react";

import DefaultComponent from "../../components/admin/default/default.component";
import ListPostsCompomponent from "../../components/admin/list-posts/list-posts.component";
import NewPostComponent from "../../components/admin/new-post/new-post.component";

const AdminPage = () => {
  const [options, setOptions] = useState(<DefaultComponent />);

  return (
    <div className="container mt-20 mx-auto flex border-2 border-violet-400 rounded-2xl p-2">
      <div className="grow w-20 bg-slate-900 h-96 border-2  rounded-xl  m-2">
        <h1 className="font-bold uppercase underline text-center text-slate-100 text-4xl mb-10 m-2">
          Menu
        </h1>
        <ul className="text-center">
          <li
            className="border-b-2 border-t-2 border-slate-100 hover:border-red-500 text-slate-100 hover:text-red-500 font-semibold text-2xl px-2 mb-2 ease-in-out duration-500"
            onClick={() =>
              setOptions(<ListPostsCompomponent setnewOption={setOptions} />)
            }
          >
            List Posts
          </li>
          <li
            className="border-b-2 border-t-2 border-slate-100 hover:border-red-500 text-slate-100 hover:text-red-500 font-semibold text-2xl px-2 mb-2 ease-in-out duration-500"
            onClick={() => setOptions(<NewPostComponent />)}
          >
            New Post
          </li>
        </ul>
      </div>
      <div className="grow w-1/2 bg-slate-900 border-2 rounded-xl p-2 m-2">
        <h1 className="font-bold uppercase underline text-center text-slate-100 text-4xl mb-10 m-2">
          Panel
        </h1>
        <div className="container w-11/12 mx-auto overflow-hidden mt-10 mb-2">
          {options}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
