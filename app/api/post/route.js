import Post from "@models/post";
import { connectToMongoDB } from "@utils/database";

export const GET = async (request) => {
  try {
    await connectToMongoDB();

    const posts = await Post.find();

    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all posts", { status: 500 });
  }
};
