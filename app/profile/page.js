"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";

const AdminProfile = () => {
  const router = useRouter();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/post");
      const data = await response.json();

      setPosts(data);
    };

    fetchPosts();
  }, []);

  const handleEdit = (post) => {
    router.push(`/update-post?id=${post._id}`);
  };

  const handleDelete = async (post) => {
    const hasConfirmed = confirm("Are you sure to delete a post?");

    if (hasConfirmed) {
      try {
        await fetch(`/api/post/${post._id}`, {
          method: "DELETE",
        });

        const filteredPosts = posts.filter((item) => item._id !== post._id);
        setPosts(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <section>
      <Profile
        data={posts}
        name="Admin"
        desc="Welcome to your personalized profile page"
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </section>
  );
};

export default AdminProfile;
