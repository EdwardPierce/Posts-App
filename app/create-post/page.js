"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

const CreatePost = () => {
  const router = useRouter();
  const [post, setPost] = useState({ post: "", tag: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const createPost = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("api/post/new", {
        method: "POST",
        body: JSON.stringify(post),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type="Create"
      post={post}
      isSubmitting={isSubmitting}
      setPost={setPost}
      handleSubmit={createPost}
    />
  );
};

export default CreatePost;
