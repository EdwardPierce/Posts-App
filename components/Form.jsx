import Link from "next/link";

const Form = ({ type, post, setPost, isSubmitting, handleSubmit }) => {
  return (
    <section>
      <h1 class="text-5xl font-bold mt-5 mx-5">
        <span class="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
          {type} Post
        </span>
      </h1>

      <form
        class="w-full max-w-2xl flex flex-col mt-10 border bg-zinc-100 rounded-lg gap-7 mx-5 p-5"
        onSubmit={handleSubmit}
      >
        <label>
          <span class="text-lg font-medium">Your post</span>
          <textarea
            value={post.post}
            onChange={(e) => setPost({ ...post, post: e.target.value })}
            required
            placeholder="write your post here"
            class="w-full block h-52 mt-5 p-3 rounded-lg text-base outline-0"
          />
        </label>

        <label>
          <span class="text-lg font-medium">
            Field of Tag
            <span class="font-normal">(#product, #idea, etc.)</span>
          </span>

          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type="text"
            required
            placeholder="#tag"
            class="w-full block mt-5 p-3 rounded-lg text-base outline-0"
          />
        </label>

        <div class="flex justify-end items-center gap-5 mx-5 mb-5">
          <Link href="/" class="text-gray-500 text-sm">
            Cancel
          </Link>

          <button
            class="bg-orange-600 text-white rounded-full px-5 py-1.5 text-sm"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
