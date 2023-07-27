"use client";

import { usePathname, useRouter } from "next/navigation";

const PostCard = ({ post, handleEdit, handleDelete, handleTagClick }) => {
  const pathName = usePathname();

  return (
    <div
      class="w-full max-w-sm bg-gray-100/50 h-fit inline-block px-5 pt-5 m-3 border
     border-stone-500 rounded-lg shadow-md shadow-zinc-500/25"
    >
      <p>{post.post} </p>
      <p
        onClick={() => handleTagClick && handleTagClick(post.tag)}
        class="text-blue-500 my-3 cursor-pointer"
      >
        {post.tag}{" "}
      </p>

      {pathName === "/profile" && (
        <>
          <hr />
          <div class="px-20 py-3">
            <p
              onClick={handleEdit}
              class="w-20 float-left shadow-md shadow-gray-400/50 cursor-pointer text-center text-sm border rounded-full bg-gray-300 bg-gradient-to-r from-green-500 to-lime-400 bg-clip-text text-transparent"
            >
              Edit
            </p>
            <p
              onClick={handleDelete}
              class="w-20 ml-24 shadow-md shadow-gray-400/50 cursor-pointer text-center text-sm border rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent"
            >
              Delete
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default PostCard;
