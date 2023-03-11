import api from "./axiosPublic";

const createComment = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = api.get("/comments", data, config);

  return response.data.comment;
};

const getComments = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = api.get("/comments", config);

  return response.data.comments;
};

const updateComment = async (commentId, data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = api.patch(`/comments/${commentId}`, data, config);

  return response.data.post;
};

const deleteComment = async (commentId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = api.delete(`/comments/${commentId}`, config);

  return response.data;
};

const commentService = {
  createComment,
  getComments,
  updateComment,
  deleteComment,
};

export default commentService;
