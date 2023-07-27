import Link from "next/link";

import React from "react";

const Nav = () => {
  return (
    <div
      class="flex justify-between items-center  w-full  mb-8 p-3
     bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500"
    >
      <Link href="/">
        <h1 class="mt-0 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl">
          Posts App
          <sup>
            <small class="text-xs italic">CRUD</small>
          </sup>
        </h1>
      </Link>

      <div class="flex gap-5 h-10 ">
        <Link href="/create-post" class="black_btn">
          Create Post
        </Link>

        <Link href="/profile" class="black_btn">
          Profile
        </Link>
      </div>
    </div>
  );
};

export default Nav;
