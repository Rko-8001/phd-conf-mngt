import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import './Post.css'
import ProgressBar from 'react-bootstrap/ProgressBar';

const PostForm = ({ onSubmit }) => {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const timestamp = new Date().toLocaleString();
    onSubmit({ text, timestamp });
    setText("");
  };


  return (
    <Form className="bb" onSubmit={handleSubmit}>
        <ProgressBar variant="success" animated now={100} />
      <Form.Group controlId="formText">
        <Form.Control
          type="text"
          placeholder="Enter post text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </Form.Group>
      {text && (
        <div>
            {/* <p>{text}</p> */}
          <p>Posting on: {new Date().toLocaleDateString()}</p>
          <p>Time: {new Date().toLocaleTimeString()}</p>
        </div>
      )}
      <div className="cc">

      <Button variant="primary" type="submit">
        Post
      </Button>
      </div>
    </Form>
  );
};

export default PostForm;