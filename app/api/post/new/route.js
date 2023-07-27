import Post from "@models/post";
import { connectToMongoDB } from "@utils/database";

export const POST = async (request) => {
  const { post, tag } = await request.json();

  try {
    await connectToMongoDB();

    const newPost = new Post({ post, tag });

    await newPost.save();

    return new Response(JSON.stringify(newPost), { status: 201 });
  } catch (error) {
    return new Response("Failed to create new post", { status: 500 });
  }
};
