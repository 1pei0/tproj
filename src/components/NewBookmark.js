import React from "react";
import { Button, Form } from "react-bulma-components";

const { Input } = Form;

export default function NewBookmark(props) {
  const [title, setTitle] = React.useState("");
  const [url, setUrl] = React.useState("");

  const handleInputChange = (e) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "url") {
      setUrl(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "" || url === "") {
      return;
    } else {
      let state = { title, url };
      console.log(state);
      props.onAddBookmark(state);
      handleReset();
    }
  };

  const handleReset = () => {
    setTitle("");
    setUrl("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        rounded
        type="text"
        placeholder="Title"
        color="primary"
        size="normal"
        name="title"
        onChange={handleInputChange}
        value={title}
      />

      <Input
        type="text"
        color="primary"
        size="normal"
        rounded
        placeholder="URL"
        name="url"
        onChange={handleInputChange}
        value={url}
      />

      <Button rounded size="small" color="primary" outlined type="submit">
        Add Bookmark
      </Button>
      <Button
        color="danger"
        size="small"
        rounded
        outlined
        onClick={handleReset}
        type="button"
      >
        Reset
      </Button>
    </form>
  );
}
