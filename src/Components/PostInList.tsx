import "./PostInList.css";
import Post from "../models/Posts";
import PostForm from "./PostForm";
interface Props {
  post: Post;
  onDelete: () => void;
}

export default function PostInList({ post, onDelete }: Props) {
  return (
    <div className="PostInList">
      <h3> {post.title}</h3>
      <p>{post.thought}</p>
      <i
        className="fas fa-trash"
        onClick={() => {
          onDelete();
        }}
      ></i>
    </div>
  );
}
