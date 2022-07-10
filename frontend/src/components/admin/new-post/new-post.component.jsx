import React from "react";

import FormComponent from "../form/form.component";

const NewPostComponent = () => {
  return (
    <>
      <h1 className="text-center border-b-4 text-slate-100 font-semibold uppercase   text-2xl mb-2 mx-auto">
        New Post
      </h1>
      <div className="p-2 border-2 rounded-xl">
        <FormComponent />
      </div>
    </>
  );
};

export default NewPostComponent;
