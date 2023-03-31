import { useState } from "react";
import PostForm from "./PostForm";
import './Post.css';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import ProgressBar from 'react-bootstrap/ProgressBar';

const App = () => {
  const [posts, setPosts] = useState([]);

  const handlePostSubmit = (post) => {
    setPosts([...posts, post]);
  };
let cur = 1;
  return (
    <div className="bb">
        <h4>Post Portal</h4>
      <PostForm onSubmit={handlePostSubmit} />
      <h4>Previous Posts</h4>
      <ProgressBar variant="info" animated now={100} />
      <ul className="ee">
        {posts.map((post, index) => (
        //   <li key={index}>
            <Toast className="ee" key={index}>
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Post Number: {cur++}</strong>
              <small>{post.timestamp}</small>
            </Toast.Header>
            <Toast.Body>{post.text} </Toast.Body>
          </Toast>
        //   </li>
        ))}
      </ul>
    </div>
  );
};

export default App;




