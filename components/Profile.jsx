import React from "react";
import PostCard from "./PostCard";

const Profile = ({ data, name, desc, handleEdit, handleDelete }) => {
  return (
    <section class="w-full">
      <h1 class="text-5xl font-bold mt-5 mx-5">
        <span class="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
          {name}
        </span>
      </h1>

      <p class="mt-10 mx-4 mb-3 text-xl text-gray-600 max-w-2xl"> {desc} </p>

      <div class="sm:columns-2 xl:columns-3">
        {data.map((post) => (
          <PostCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
