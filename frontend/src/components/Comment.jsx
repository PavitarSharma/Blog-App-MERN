import React, { useState } from "react";
import { useDispatch } from "react-redux";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { Box, Paper, Stack } from "@mui/material";
import { createComment, reset } from "../redux/reducers/commentSlice";

const Comment = ({ postId }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");

  const handleOnChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!comment) {
      return;
    }

    const data = {
      content: comment,
      postId: postId,
    };

    dispatch(createComment(data));
    dispatch(reset())
  };
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        gap: "10px",
        borderRadius: "25px",
      }}
    >
      <Box
        sx={{
          border: "1px solid gray",
          borderRadius: "25px",
          padding: "6px 12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "10px",
          width: "80%",
        }}
      >
        <input
          id="content"
          type="text"
          name="content"
          value={comment}
          onChange={handleOnChange}
          placeholder="Add a comment"
          style={{
            height: "100%",
            padding: "6px 0",
            border: "none",
            outline: "none",
          }}
        />
        <InsertEmoticonIcon />
      </Box>
      <button
        type="submit"
        style={{
          background: "#ddd",
          padding: "10px",
          borderRadius: "25px",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </Paper>
  );
};

export default Comment;
