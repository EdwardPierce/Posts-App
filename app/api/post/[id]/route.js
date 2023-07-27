import { connectToMongoDB } from "@utils/database";
import Post from "@models/post";

export const GET = async (request, { params }) => {
  try {
    await connectToMongoDB();

    const post = await Post.findById(params.id);

    if (!post) {
      return new Response("Post not found", { status: 404 });
    }

    return new Response(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  const { post, tag } = await request.json();

  try {
    await connectToMongoDB();

    const existingPost = await Post.findByIdAndUpdate(
      params.id,
      { post, tag },
      { new: true }
    );

    if (!existingPost) {
      return new Response("Post not found", { status: 404 });
    }

    return new Response("Successfully updated the Post", { status: 200 });
  } catch (error) {
    return new Response("Error updating post", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    await connectToMongoDB();

    const deletedPost = await Post.findByIdAndDelete(params.id);

    if (!deletedPost) {
      return new Response("Post not found", { status: 404 });
    }

    return new Response("Successfully deleted the Post", { status: 200 });
  } catch (error) {
    return new Response("Error deleting post", { status: 500 });
  }
};
