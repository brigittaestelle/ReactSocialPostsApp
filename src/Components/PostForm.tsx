import "./PostForm.css";

export default function PostForm({ onClose }: { onClose: () => void }) {
  return (
    <form className="PostForm">
      <i
        className="fas fa-times-circle"
        onClick={() => {
          onClose();
        }}
      ></i>
      <label>Title</label>
      <input type="text" />
      <label>Thought</label>
      <textarea></textarea>
      <button type="submit">Add Post</button>
    </form>
  );
}
