import React, { useState, useEffect } from "react";
import axios from "axios";

import CardPost from "../card-post/card-post.component";

const ListPostsCompomponent = ({ setnewOption }) => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const res = await axios.get("http://localhost:8000/api/main/residences/");
    console.log(res.data);
    setPosts(res.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      {posts.length ? (
        <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-2 p-2">
          {posts.map((item) => (
            <CardPost key={item.id} info={item} newOption={setnewOption} />
          ))}
        </div>
      ) : (
        <h1 className="text-6xl text-slate-300 text-center p-2">
          NO POSTS YET
        </h1>
      )}
    </div>
  );
};

export default ListPostsCompomponent;
