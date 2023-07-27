"use client";

import { useState, useEffect } from "react";

import PostCard from "./PostCard";

const PostCardList = ({ data, handleTagClick }) => {
  return (
    <div class="mt-4 sm:columns-2 xl:columns-3">
      {data.map((post) => (
        <PostCard key={post._id} post={post} handleTagClick={handleTagClick} />
      ))}
    </div>
  );
};

const Feed = () => {
  const [allPosts, setAllPosts] = useState([]);

  //search states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/post");
      const data = await response.json();

      setAllPosts(data);
    };

    fetchPosts();
  }, []);

  const filterPosts = (searchText) => {
    const regex = new RegExp(searchText, "i");

    return allPosts.filter(
      (item) => regex.test(item.post) || regex.test(item.tag)
    );
  };

  const handleSearchedChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    //debounde method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPosts(e.target.value);
        setSearchResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchedByTag = filterPosts(tagName);
    setSearchResults(searchedByTag);
  };

  return (
    <section>
      <form class="w-full max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={handleSearchedChange}
          required
          class="w-full block bg-gray-300 p-2 rounded-md outline-0 shadow-md shadow-gray-500/50"
        />
      </form>

      {searchText ? (
        <PostCardList data={searchResults} handleTagClick={handleTagClick} />
      ) : (
        <PostCardList data={allPosts} handleTagClick={handleTagClick} />
      )}
    </section>
  );
};

export default Feed;
