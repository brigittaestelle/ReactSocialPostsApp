import "./SocialPosts.css";
import { useState } from "react";
import Post from "../models/Posts";
import PostInList from "./PostInList";
import PostForm from "./PostForm";

export default function SocialPosts() {
  const [formIsVisible, setFormIsVisible] = useState(false);
  const [posts, setPosts] = useState<Post[]>([
    { title: "Grand Circus", thought: "Grand Circus is cool." },
    { title: "React", thought: "React give me power!" },
    {
      title: "Beatrice",
      thought:
        "My friend Beatrice has mad skills. She mae the top 10. I'm so proud of her!",
    },
  ]);
  function deletePost(i: number) {
    // copy then modify
    let copiedPosts = [...posts];
    copiedPosts.splice(i, 1);
    setPosts(copiedPosts);
  }
  return (
    <div className="SocialPosts">
      <h1>My Thoughts</h1>
      <button
        onClick={() => {
          setFormIsVisible(true);
        }}
      >
        New Thought
      </button>
      {formIsVisible && (
        <PostForm
          onClose={() => {
            setFormIsVisible(false);
          }}
        />
      )}
      {posts.map((post, index) => (
        <PostInList
          key={index}
          post={post}
          onDelete={() => {
            deletePost(index);
          }}
        />
      ))}
    </div>
  );
}
